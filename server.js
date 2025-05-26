// Gebruik Node.js native fetch als die beschikbaar is, anders gebruik node-fetch
import fetch from "node-fetch";
// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";
import session from "express-session";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

const app = express();
app.use(express.static("public"));

// Maak werken met data uit formulieren iets prettiger

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.set("view engine", "liquid");

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");
app.set("view engine", "liquid");

app.get("/:station", async (req, res) => {
  const stationSlug = req.params.station;

  const likedShows = await fetch("https://fdnd-agency.directus.app/items/mh_accounts/7?fields=id,name,liked_shows.mh_show_id.*.*.*");
  const likedShowsJSON = await likedShows.json();

  try {
    const response = await fetch("https://fdnd-agency.directus.app/items/mh_radiostations");
    const json = await response.json();
    const allStations = json.data;

    const slugify = (str) =>
      str
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/%/g, "percent")
        .replace(/[^a-z0-9\-]/g, "");

    const stationsWithSlugs = allStations.map((station) => ({
      ...station,
      slug: slugify(station.name),
    }));

    const selectedStation = stationsWithSlugs.find((station) => station.slug === stationSlug);

    if (!selectedStation) {
      return res.status(404).send("404 - Not Found");
    }

    const daysRes = await fetch("https://fdnd-agency.directus.app/items/mh_day?fields=*,shows.mh_shows_id.*.*");
    const daysJson = await daysRes.json();
    const allDays = daysJson.data;

    const selectedDate = req.query.date || new Date().toISOString().split("T")[0];
    console.log("Selected date:", selectedDate);
    console.log("Selected station slug:", stationSlug);

    const selectedDateObj = new Date(selectedDate);
    const formattedDate = selectedDateObj.toLocaleDateString("nl-NL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const dayOfWeek = selectedDateObj.getDay();

    const referenceDayMap = {};
    allDays.forEach((day) => {
      const date = new Date(day.date);
      referenceDayMap[date.getDay()] = day;
    });

    const matchedDay = referenceDayMap[dayOfWeek];
    console.log("Matched day:", matchedDay);

    const showsWithTimes =
      matchedDay?.shows
        ?.filter((entry) => entry?.mh_shows_id?.show?.radiostation === selectedStation.id)
        .map((entry) => {
          const show = entry.mh_shows_id.show;
          return {
            name: show.name,
            body: show.body,
            thumbnail: show.thumbnail,
            start_time: entry.mh_shows_id.from.slice(0, 5),
            end_time: entry.mh_shows_id.until.slice(0, 5),
            id: entry.mh_shows_id.id,
            show_id: show.id,
            weekday: selectedDate
              ? ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(selectedDate).getDay()]
              : null,
            date: selectedDate,
          };
        }) || [];

    console.log("Shows with times:", showsWithTimes);
    showsWithTimes.sort((a, b) => a.start_time.localeCompare(b.start_time));

    function timeToMinutes(time) {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    }

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    showsWithTimes.forEach((show) => {
      show.start_minutes = timeToMinutes(show.start_time);
      show.end_minutes = timeToMinutes(show.end_time);
    });

    res.render("radio-template", {
      page: "radio",
      radiostation: selectedStation.name,
      selected_day: {
        shows: showsWithTimes,
        formatted_date: formattedDate,
        likes: likedShowsJSON.data,
      },
      days: allDays.map((day) => ({
        date: day.date,
        shows: day.shows,
      })),
      currentMinutes,
    });
  } catch (error) {
    console.error("Failed to fetch stations or shows:", error);
    res.status(500).send("Server error");
  }
});

app.get("/", async function (request, response) {
  response.render("index.liquid");
});

app.get("/veronica/likes", async function (request, response) {
  const likedShows = await fetch("https://fdnd-agency.directus.app/items/mh_accounts/7?fields=id,name,liked_shows.mh_show_id.*.*.*");
  const likedShowsJSON = await likedShows.json();

  response.render("veronica-likes.liquid", { algemeen: likedShowsJSON.data });
});

app.post("/veronica/like", async function (request, response) {
  //console.log(request.body)
  const testConsole = await fetch("https://fdnd-agency.directus.app/items/mh_accounts_shows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      mh_accounts_id: 7,
      mh_show_id: request.body.showid,
    }),
  });
  // console.log(testConsole)
  response.redirect(303, "/veronica");
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

// Typing indicator memory object and routes
const typingUsers = {};

app.post("/typing", (req, res) => {
  const { sender, done } = req.body;

  if (!sender) return res.sendStatus(400);

  if (done) {
    delete typingUsers[sender];
  } else {
    typingUsers[sender] = Date.now();
  }

  res.sendStatus(200);
});

app.get("/typing-status", (req, res) => {
  const activeTypers = Object.entries(typingUsers)
    .filter(([_, timestamp]) => Date.now() - timestamp < 3000)
    .map(([sender]) => sender);

  res.json({ typing: activeTypers });
});

//error page
app.use((req, res, next) => {
  res.status(404).render("404page.liquid"); // custom error page
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`Project draait via http://localhost:${app.get("port")}`);
});
