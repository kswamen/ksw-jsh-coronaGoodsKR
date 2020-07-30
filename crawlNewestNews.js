const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let html = "";

async function getHtml() {
  try {
    return await axios.get("http://comic.naver.com/webtoon/weekday.nhn");
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

  const lastLen = $(".col").eq(6).find("img").length;
  $(".col").each(async function (day, item) {
    var index = 0;
    $(item)
      .find("img")
      .each(function (num, item) {
        var src = $(item).attr("src");
        if (src.substr(src.length - 3, 3) == "jpg") {
          console.log(day + ", " + index);
          var data = {
            day: day,
            num: getNumberInformat(index),
            title: "No Title yet",
            src: src,
          };
          index++;
          dataArr.push(data);
        }
        if (day == 6 && num == lastLen - 1) {
          fs.writeFileSync(dataPath, JSON.stringify(dataArr));
          console.log("wrote json file!");
        }
      });
  });
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
