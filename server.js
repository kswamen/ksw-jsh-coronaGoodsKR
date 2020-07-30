const express = require("express");
const { getNews, getDay, getDay2, getDay3 } = require("./crawl.js");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cron = require("node-cron");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function handleAsync() {
  const sum = await getNews();
  const day = await getDay();
  const day2 = await getDay2();
  const day3 = await getDay3();

  console.log(sum + "      " + day + "     " + day2, "     ", day3);
  return [sum, day, day2, day3];
}

cron.schedule("*/1 * * * *", async () => {
  console.log("running a task every two minutes");
  await handleAsync();
});

// app.use('/api/crawl',async(req,res) => {
//   const text = await handleAsync();
//   console.log(text);
//   res.json([{text: text},
//             {id : 1}]
//     );
// })

app.get("/api/crawl", async (req, res) => {
  const text = await handleAsync();
  var accumulate = text[0];
  var s_total = text[1][0];
  var Overseas = text[1][1];
  var domestic = text[1][2];
  var get2_accumulate = text[2][0];
  var get2_day = text[2][1];
  var get3_maccumulate = text[3][0];
  var get3_mdeath = text[3][1];
  var get3_mcritical = text[3][2];
  var get3_waccumulate = text[3][3];
  var get3_wdeath = text[3][4];
  var get3_wcritical = text[3][5];
  res.send([
    {
      id: 1,
      accumulate,
      s_total,
      Overseas,
      domestic,
      get2_accumulate,
      get2_day,
      get3_maccumulate,
      get3_mdeath,
      get3_mcritical,
      get3_waccumulate,
      get3_wdeath,
      get3_wcritical,
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
