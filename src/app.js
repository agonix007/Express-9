const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const PORT = 8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("views", templatePath);
app.set("view engine", "hbs");

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    signIn: "Bikram Pal",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
