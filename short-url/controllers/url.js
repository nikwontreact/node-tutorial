const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = shortid();
  URL.create({
    shortId: shortId,
    redirectURL: body.url,
    vistiHistory: [],
  });
  return res.render("home", { id: shortId });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
module.exports = { handleGenerateNewShortUrl, handleGetAnalytics };
