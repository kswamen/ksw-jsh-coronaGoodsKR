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
  var get4_80_sick, get4_80_death, get4_80_critical;
  var get4_70_sick, get4_70_death, get4_70_critical;
  var get4_60_sick, get4_60_death, get4_60_critical;
  var get4_50_sick, get4_50_death, get4_50_critical;
  var get4_40_sick, get4_40_death, get4_40_critical;
  var get4_30_sick, get4_30_death, get4_30_critical;
  var get4_20_sick, get4_20_death, get4_20_critical;
  var get4_10_sick, get4_10_death, get4_10_critical;
  var get4_0_sick, get4_0_death, get4_0_critical;

  $("#content .data_table .num tr").each(function (index, elem) {
    switch ($(this).find("th").text().trim()) {
      case "80 이상":
        get4_80_sick = $(this).find("td > span").eq(0).text().trim();
        get4_80_death = $(this).find("td > span").eq(2).text().trim();
        get4_80_critical = $(this).find("td > span").eq(4).text().trim();
      case "70-79":
        get4_70_sick = $(this).find("td > span").eq(0).text().trim();
        get4_70_death = $(this).find("td > span").eq(2).text().trim();
        get4_70_critical = $(this).find("td > span").eq(4).text().trim();
      case "60-69":
        get4_60_sick = $(this).find("td > span").eq(0).text().trim();
        get4_60_death = $(this).find("td > span").eq(2).text().trim();
        get4_60_critical = $(this).find("td > span").eq(4).text().trim();
      case "50-59":
        get4_50_sick = $(this).find("td > span").eq(0).text().trim();
        get4_50_death = $(this).find("td > span").eq(2).text().trim();
        get4_50_critical = $(this).find("td > span").eq(4).text().trim();
      case "40-49":
        get4_40_sick = $(this).find("td > span").eq(0).text().trim();
        get4_40_death = $(this).find("td > span").eq(2).text().trim();
        get4_40_critical = $(this).find("td > span").eq(4).text().trim();
      case "30-39":
        get4_30_sick = $(this).find("td > span").eq(0).text().trim();
        get4_30_death = $(this).find("td > span").eq(2).text().trim();
        get4_30_critical = $(this).find("td > span").eq(4).text().trim();
      case "20-29":
        get4_20_sick = $(this).find("td > span").eq(0).text().trim();
        get4_20_death = $(this).find("td > span").eq(2).text().trim();
        get4_20_critical = $(this).find("td > span").eq(4).text().trim();
      case "10-19":
        get4_10_sick = $(this).find("td > span").eq(0).text().trim();
        get4_10_death = $(this).find("td > span").eq(2).text().trim();
        get4_10_critical = $(this).find("td > span").eq(4).text().trim();
      case "0-9":
        get4_0_sick = $(this).find("td > span").eq(0).text().trim();
        get4_0_death = $(this).find("td > span").eq(2).text().trim();
        get4_0_critical = $(this).find("td > span").eq(4).text().trim();
    }
  });
  return [
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
  ];
}

module.exports = { getNews, getDay, getDay2, getDay3, getDay4 };
