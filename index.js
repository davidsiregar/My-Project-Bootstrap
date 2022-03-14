const express = require("express");

const app = express();
const PORT = 4000;

const isLogin = true;

app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/my-project", function (req, res) {
  res.render("my-project");
});
app.get("/my-project-add", function (req, res) {
  res.render("my-project-add");
});
app.post("/my-project-add", function (req, res) {
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.start);
  console.log(req.body.end);
  console.log(req.body.desc);
  console.log(req.body.option);
  console.log(req, body.image);
  console.log(req);
  res.redirect("/");
});
app.get("/my-project-detail/:id", function (req, res) {
  let id = req.params.idBlog;
  res.render("my-project-detail", { id });
});
app.get("/contact-me", function (req, res) {
  res.render("contact-me");
});

app.listen(PORT, function () {
  console.log(`Server starting on PORT: ${PORT}`);
});
