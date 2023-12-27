var express = require("express");
var router = express.Router();
const userFiles = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res, next) {
  const createduser = await userFiles.create({
    username: "meet",
    age: 21,
    name: "meetkhetani",
  });
  res.send(createduser);
});

module.exports = router;
