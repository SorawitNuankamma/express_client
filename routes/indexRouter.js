var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello world");
});

router.post("/testAPI", function (req, res, next) {
  res.send(JSON.stringify(req.body));
});

module.exports = router;
