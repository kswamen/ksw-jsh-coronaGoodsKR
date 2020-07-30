const axios = require("axios");
const cheerio = require("cheerio");

let html = "";

async function getHtml() {
  try {
    return await axios.get(
      "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="
    );
  } catch (error) {
    console.error(error);
  }
}

async function getNews() {
  if (!html) {
    html = await getHtml();
  }

  const $ = cheerio.load(html.data);
  let accumulate = {};
  $("#content .caseTable .ca_body li")
    .first("dl")
    .each(function (index, elem) {
      switch ($(this).find("dt").text().trim()) {
        case "누적":
          accumulate = $(this).find("dd").text();
          // .replace(/([\t|\n|\s])/gi, "");
          break;
      }
    });
  return accumulate;
}

async function getDay() {
  if (!html) {
    html = await getHtml();
  }

  const $ = cheerio.load(html.data);
  var s_total;
  var Overseas;
  var domestic;
  $("#content .caseTable .ca_body li .ca_value li")
    // .first("dl")
    .each(function (index, elem) {
      switch ($(this).find("strong").text().trim()) {
        case "소계":
          s_total = $(this).find("p").text();
          // .replace(/([\t|\n|\s])/gi, "");
          break;
        case "해외유입":
          Overseas = $(this).find("p").text();
        // .replace(/([\t|\n|\s])/gi, "");
        case "국내발생":
          domestic = $(this).find("p").text();
      }
    });
  return [s_total, Overseas, domestic];
}

async function getDay2() {
  if (!html) {
    html = await getHtml();
  }
  const $ = cheerio.load(html.data);
  var get2_accumulate;
  var get2_day;
  $("#content .caseTable .ca_body li").each(function (index, elem) {
    switch ($(this).find("dt").text().trim()) {
      case "누적":
        get2_accumulate = $(this).find("dd").text().trim();
      case "전일대비":
        get2_day = $(this).find("dd").text().trim();
    }
  });
  return [get2_accumulate, get2_day];
}

async function getDay3() {
  if (!html) {
    html = await getHtml();
  }
  const $ = cheerio.load(html.data);
  var get3_maccumulate;
  var get3_mdeath;
  var get3_mcritical;
  var get3_waccumulate;
  var get3_wdeath;
  var get3_wcritical;
  $("#content .data_table .num tr").each(function (index, elem) {
    switch ($(this).find("th").text().trim()) {
      case "남성":
        get3_maccumulate = $(this).find("td > span").eq(0).text().trim();
        get3_mdeath = $(this).find("td > span").eq(2).text().trim();
        get3_mcritical = $(this).find("td > span").eq(4).text().trim();
      case "여성":
        get3_waccumulate = $(this).find("td > span").eq(0).text().trim();
        get3_wdeath = $(this).find("td > span").eq(2).text().trim();
        get3_wcritical = $(this).find("td > span").eq(4).text().trim();
    }
  });
  return [
    get3_maccumulate,
    get3_mdeath,
    get3_mcritical,
    get3_waccumulate,
    get3_wdeath,
    get3_wcritical,
  ];
}

async function getDay4() {
  if (!html) {
    html = await getHtml();
  }
  const $ = cheerio.load(html.data);
  var get3_maccumulate;
  var get3_mdeath;
  var get3_mcritical;
  var get3_waccumulate;
  var get3_wdeath;
  var get3_wcritical;
  $("#content .data_table .num tr").each(function (index, elem) {
    switch ($(this).find("th").text().trim()) {
      case "남성":
        get3_maccumulate = $(this).find("td > span").eq(0).text().trim();
        get3_mdeath = $(this).find("td > span").eq(2).text().trim();
        get3_mcritical = $(this).find("td > span").eq(4).text().trim();
      case "여성":
        get3_waccumulate = $(this).find("td > span").eq(0).text().trim();
        get3_wdeath = $(this).find("td > span").eq(2).text().trim();
        get3_wcritical = $(this).find("td > span").eq(4).text().trim();
    }
  });
  return [
    get3_maccumulate,
    get3_mdeath,
    get3_mcritical,
    get3_waccumulate,
    get3_wdeath,
    get3_wcritical,
  ];
}

module.exports = { getNews, getDay, getDay2, getDay3 };
