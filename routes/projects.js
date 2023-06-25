var data = require("../data-store");
var projects = data.getProjects();
var router = require("express").Router();

router.get("/", function (req, res) {
  res.json(projects.sort((a, b) => a.id - b.id));
});

router.get("/active", function (req, res) {
  var activeProjects = projects.filter((p) => p.isActive == true);
  res.status(200).json(activeProjects);
});

router.get("/:id", function (req, res) {
  var project = projects.find((p) => p.id == req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "No Project Found" });
  }
});

module.exports = router;
