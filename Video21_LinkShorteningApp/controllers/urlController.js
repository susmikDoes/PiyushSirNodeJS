// controllers/urlController.js
const shortid = require('shortid');
const Url = require('../models/urlModel'); //so here Url becomes the model

const baseUrl = `${req.protocol}://${req.get('host')}`;


exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = baseUrl + '/' + shortid.generate();
  try {
    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();
    res.json({ shortUrl });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.redirectUrl = async (req, res) => {
  const { short } = req.params;
  const fullShortUrl = baseUrl + '/' + short;
  try {

    // Find ONE document where the field shortUrl equals fullShortUrl
    const url = await Url.findOne({ shortUrl: fullShortUrl });

    if (url) {
      url.clicks += 1;
      await url.save();
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: "Short URL not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ _id: -1 });
    res.json(urls);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
