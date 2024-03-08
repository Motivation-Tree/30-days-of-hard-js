const getMetaData = require("metadata-scraper");
const cheerio = require("cheerio");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchMetaData = async (req, res, next) => {
  console.log("Fetching meta data", req.body);
  const url = req.body.url;

  const data = await getMetaData(url);
  console.log(data);

  res.status(200).json(data);
};

const getDataFromUrl = async function (req, res, next) {
  const url = req.body.url;

  const data = await fetch(url);
  const body = await data.text();
  const $ = cheerio.load(body);

  var title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text() ||
    $('meta[name="title"]').attr("content");

  var description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content");
  var pageUrl = $('meta[property="og:url"]').attr("content");
  var site_name = $('meta[property="og:site_name"]').attr("content");
  var image =
    $('meta[property="og:image"]').attr("content") ||
    $('meta[property="og:image:url"]').attr("content");
  var icon =
    $('link[rel="icon"]').attr("href") ||
    $('link[rel="shortcut icon"]').attr("href");
  var keywords =
    $('meta[property="og:keywords"]').attr("content") ||
    $('meta[name="keywords"]').attr("content");
  console.log("Page title", { title, description, image, icon, keywords });

  res.json({ title, description, pageUrl, site_name, image, icon, keywords });
};
module.exports = {
  fetchMetaData,
  getDataFromUrl,
};
