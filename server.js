// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());
app.set("view engine", "liquid");

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");

app.get("/:station", async (req, res) => {
  const stationSlug = req.params.station;

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

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(`Project draait via http://localhost:${app.get("port")}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`);
});
