const express = require("express");
const fs = require("fs");
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");
const multer = require("multer");
const upload = multer({ dest: "./upload" });

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
const cron = require("node-cron");
const socket = require("socket.io");
const newsJSON = fs.readFileSync("./newestNewsData.json");
const ProudctJSON = fs.readFileSync("./product.json");

const { getNews, getDay, getDay2, getDay3, getDay4 } = require("./crawl.js");
const { getNewestNews } = require("./crawlNewestNews.js");
const { getProduct1 } = require("./crawlProduct.js");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

app.get("/api/customers", (req, res) => {
  connection.query(
    "Select * From posts where isDeleted = 0 order by date desc",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.get("/api/getPost/:postNum", (req, res) => {
  let sql = "Select * from posts where num = ?";
  let params = [req.params.postNum];

  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.delete("/api/deletePost/:postNum", (req, res) => {
  let sql = "update posts set isDeleted = 1 where num = ?";
  let params = [req.params.postNum];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.use("/image", express.static("./upload"));

app.post("/api/posts", upload.single("image"), (req, res) => {
  let sql =
    "insert into posts(image, title, contents, writer, ID, userImage) values (?, ?, ?, ?, ?, ?)";
  let image = req.body.image;
  let title = req.body.title;
  let contents = req.body.contents;
  let writer = req.body.writer;
  let ID = req.body.ID;
  let userImage = req.body.userImage;
  let params = [image, title, contents, writer, ID, userImage];

  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

async function getNewsAsync() {
  const data = await getNewestNews();
}
async function getProductAsync() {
  const Product_data = await getProduct1();
}

cron.schedule("*/10 * * * *", async () => {
  console.log("running a task every one minutes");
  await getProductAsync();
  await getNewsAsync();
});

app.get("/api/product", async (req, res) => {
  res.send(ProudctJSON);
});

app.get("/api/news", async (req, res) => {
  res.send(newsJSON);
});

async function handleAsync() {
  const sum = await getNews();
  const day = await getDay();
  const day2 = await getDay2();
  const day3 = await getDay3();
  const day4 = await getDay4();

  return [sum, day, day2, day3, day4];
}
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
  var get4_80_sick = text[4][0];
  var get4_80_death = text[4][1];
  var get4_80_critical = text[4][2];
  var get4_70_sick = text[4][3];
  var get4_70_death = text[4][4];
  var get4_70_critical = text[4][5];
  var get4_60_sick = text[4][6];
  var get4_60_death = text[4][7];
  var get4_60_critical = text[4][8];
  var get4_50_sick = text[4][9];
  var get4_50_death = text[4][10];
  var get4_50_critical = text[4][11];
  var get4_40_sick = text[4][12];
  var get4_40_death = text[4][13];
  var get4_40_critical = text[4][14];
  var get4_30_sick = text[4][15];
  var get4_30_death = text[4][16];
  var get4_30_critical = text[4][17];
  var get4_20_sick = text[4][18];
  var get4_20_death = text[4][19];
  var get4_20_critical = text[4][20];
  var get4_10_sick = text[4][21];
  var get4_10_death = text[4][22];
  var get4_10_critical = text[4][23];
  var get4_0_sick = text[4][24];
  var get4_0_death = text[4][25];
  var get4_0_critical = text[4][26];

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
      get4_80_sick,
      get4_80_death,
      get4_80_critical,
      get4_70_sick,
      get4_70_death,
      get4_70_critical,
      get4_60_sick,
      get4_60_death,
      get4_60_critical,
      get4_50_sick,
      get4_50_death,
      get4_50_critical,
      get4_40_sick,
      get4_40_death,
      get4_40_critical,
      get4_30_sick,
      get4_30_death,
      get4_30_critical,
      get4_20_sick,
      get4_20_death,
      get4_20_critical,
      get4_10_sick,
      get4_10_death,
      get4_10_critical,
      get4_0_sick,
      get4_0_death,
      get4_0_critical,
    },
  ]);
});

server = app.listen(5000, function () {
  console.log("server is running on port 5000");
});

io = socket(server);

io.on("connection", (socket) => {
  socket.on("SEND_MESSAGE", function (data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
