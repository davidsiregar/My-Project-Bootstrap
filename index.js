const express = require("express");

const app = express();
const PORT = 4000;

const isLogin = true;

let projects = [];

app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.get("/", function (req, res) {
//   res.render("my-project");
// });

app.get("/", function (req, res) {
  let dataProject = projects.map(function (data) {
    return {
      ...data,
      isLogin,
    };
  });
  console.log(projects);
  res.render("index", { isLogin, projects:dataProject});
  
});

app.get("/my-project-add", function (req, res) {
  res.render("my-project-add");
});

app.post("/my-project-add", function (req, res) {
  let data = req.body;
  console.log(data);
  data.post_at = new Date();
  data.author = "boys";
  projects.push(data);
  res.redirect("/");
});

app.get("/my-project-detail/:index", function (req, res) {
  let index = req.params.index;
  let project = projects[index];
  project = {
    ...project,
  };
  res.render("my-project-detail", { project });
});

app.get("/contact-me", function (req, res) {
  res.render("contact-me");
});

app.get("/edit-project", function (req, res) {
  res.render("edit-project");
});

app.get("/delete-project/:index", function (req, res) {
  let index = req.params.index;
  projects.splice(index, 1);
  res.redirect("/");
});

app.listen(PORT, function () {
  console.log(`Server starting on PORT: ${PORT}`);
});
