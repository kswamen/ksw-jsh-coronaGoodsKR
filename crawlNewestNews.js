const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let html = "";

async function getHtml() {
  try {
    return await axios.get("https://www.yna.co.kr/coronavirus/news");
  } catch (error) {
    console.error(error);
  }
}

async function getNewestNews() {
  if (!html) {
    html = await getHtml();
  }

  const dataArr = [];
  const dataPath = "./newestNewsData.json";
  const $ = cheerio.load(html.data);

  $(".container .contents .content01 .headline-zone li article").each(
    async function (index, item) {
      var src = "http:" + $(item).find("img").attr("src");
      var title = $(item).find("img").attr("alt");
      var subtitle = $(item).find(".lead").text();
      var a = $(item).find(".tit-news").find("a").attr("href");

      var data = {
        title: title,
        subtitle: subtitle,
        src: src,
        a: a.replace("//", "https://"),
      };

      dataArr.push(data);

      if (index > 20) {
        fs.writeFileSync(dataPath, JSON.stringify(dataArr));
        //console.log("data written on json file");
      }
    }
  );
}

function getNumberInformat(num) {
  var min = 0,
    max = 99;
  if (min <= num && num <= max) {
    if (0 <= num && num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }
}

module.exports = { getNewestNews };
