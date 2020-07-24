const express = require("express");
const { getNews } = require("./crawl.js");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cron = require("node-cron");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function handleAsync() {
  const sum = await getNews();

  console.log("sum", sum);
}

cron.schedule("*/2 * * * *", async () => {
  console.log("running a task every two minutes");
  await handleAsync();
});
