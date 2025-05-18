// Gebruik Node.js native fetch als die beschikbaar is, anders gebruik node-fetch
import fetch from "node-fetch";
// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";
import session from "express-session";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");
app.set("view engine", "liquid");

app.get("/", async function (request, response) {
  response.render("index.liquid");
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(`Project draait via http://localhost:${app.get("port")}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`);
});

app.get("/veronica/likes", async function (request, response) {
  const likedShows = await fetch("https://fdnd-agency.directus.app/items/mh_accounts/7?fields=id,name,liked_shows.mh_show_id.*.*.*");
  const likedShowsJSON = await likedShows.json();

  response.render("veronica-likes.liquid", { algemeen: likedShowsJSON.data }); // hierdoor geef je de opgevraagde data mee in de naam algemeen
});

function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

app.get("/livechat", async (req, res) => {
  try {
    const response = await fetch("https://fdnd-agency.directus.app/items/mh_chats", {
      headers: {},
    });

    const data = await response.json();
    const messages = data.data;

    res.render("live-chat", {
      page: "radio",
      radiostation: "Live Chat",
      messages,
      username: req.session.username,
    });
  } catch (error) {
    console.error("Failed to fetch chat messages:", error);
    res.status(500).send("Error fetching chat messages.");
  }
});

app.post("/livechat", async (req, res) => {
  const { sender, message } = req.body;
  const cleanSender = sanitizeInput(sender);
  const cleanMessage = sanitizeInput(message);

  try {
    await fetch("https://fdnd-agency.directus.app/items/mh_chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: cleanSender,
        message: cleanMessage,
        chathost: 2,
        status: "draft",
      }),
    });

    res.redirect("/livechat");
  } catch (error) {
    console.error("Failed to post chat message:", error);
    res.status(500).send("Error posting chat message.");
  }
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  req.session.username = sanitizeInput(username);
  res.redirect("/livechat");
});

app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/livechat");
  });
});

//error page
app.use((req, res, next) => {
  res.status(404).render("404page.liquid"); // custom error page
});
