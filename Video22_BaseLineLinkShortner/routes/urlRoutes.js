const express = require("express");
const router = express.Router();
const controller = require("../controllers/urlController");

router.get("/", controller.renderHome);
router.post("/shorten", controller.shortenUrl);
router.get("/:short", controller.redirectUrl);

module.exports = router;
