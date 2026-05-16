const shortid = require("shortid");
const Url = require("../models/urlModel");

const baseUrl = "http://localhost:3000";

// Render Home Page
exports.renderHome = async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.render("home", { urls, shortUrl: null });
};

// Create Short URL
exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  //const short = shortid.generate();
  //const shortUrl = `${baseUrl}/${short}`;

  //await Url.create({ originalUrl, shortUrl });

  //const urls = await Url.find().sort({ createdAt: -1 });
  //res.render("home", { urls, shortUrl });

  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const short = shortid.generate();
  const shortUrl = `${baseUrl}/${short}`;

  await Url.create({ originalUrl, shortUrl });

  const urls = await Url.find().sort({ createdAt: -1 });
  res.render("home", { urls, shortUrl });
};

// Redirect
exports.redirectUrl = async (req, res) => {
  const fullShortUrl = `${baseUrl}/${req.params.short}`;
  const url = await Url.findOne({ shortUrl: fullShortUrl });

  if (!url) return res.status(404).send("URL not found");

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
};
