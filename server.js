// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

const app = express();
app.use(express.static('public'))

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));


// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");

app.get("/", async function (request, response) {
  response.render("index.liquid");
});




app.get("/veronica/likes", async function (request, response) {
  const likedShows = await fetch("https://fdnd-agency.directus.app/items/mh_accounts/7?fields=id,name,liked_shows.mh_show_id.*.*.*");
  const likedShowsJSON = await likedShows.json();

  response.render("veronica-likes.liquid", { algemeen: likedShowsJSON.data }); // hierdoor geef je de opgevraagde data mee in de naam algemeen
});

//error page
app.use((req, res, next) => {
  res.status(404).render("404page.liquid"); // custom error page
});


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(`Project draait via http://localhost:${app.get("port")}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`);
});

