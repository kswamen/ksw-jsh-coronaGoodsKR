const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let html = "";
let html2 = "";
let html3 = "";
var sortJSON = async function (sort_data, key, type) {
  if (type == undefined) {
    type = "asc";
  }
  return await sort_data.sort(function (a, b) {
    var x = parseInt(a[key]);
    var y = parseInt(b[key]);
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });
};

async function getHtml1() {
  try {
    return await axios.get(
      "https://www.coupang.com/np/categories/306749?channel=plp_C2"
    );
  } catch (error) {
    console.error(error);
  }
}

async function getHtml2() {
  try {
    return await axios.get(
      "http://www.hurumshop.com/goods/goods_list.php?cateCd=038006"
    );
  } catch (error) {
    console.error(error);
  }
}

async function getHtml3() {
  try {
    return await axios.get(
      "https://www.esthermall.co.kr/front/product_list.php?ct_id=001001016"
    );
  } catch (error) {
    console.error(error);
  }
}

async function getProduct1() {
  if (!html) {
    html = await getHtml1();
  }

  const dataArr = [];
  const dataPath = "./product.json";
  const $ = cheerio.load(html.data);

  $(".newcx-container .newcx-body .newcx-main .newcx-list ul li").each(
    async function (index, item) {
      var src = "http:" + $(item).find("dl").find("img").attr("src");
      var title = $(item).find("dl").find("img").attr("alt");
      var price = $(item)
        .find("dl")
        .find("dd")
        .find(".sale")
        .find(".price-value")
        .first()
        .text();
      var a = "https://www.coupang.com/" + $(item).find("a").attr("href");
      var data = {
        src: src,
        brand:
          "http://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png",
        title: title,
        price: price,
        a: a,
      };
      if (index > 7) {
        dataArr.push(data);
        //  sortJSON(dataArr,"price","asc");
        // fs.writeFileSync(dataPath, JSON.stringify(dataArr));
      }
    }
  );

  if (!html2) {
    html2 = await getHtml2();
  }

  const $2 = cheerio.load(html2.data);
  $2("#contents .goods_list_item .goods_list .goods_list_cont ul li").each(
    async function (index, item) {
      var src = "http://www.hurumshop.com" + $(item).find("img").attr("src");
      var title = $(item).find("img").attr("alt");
      var price = $(item)
        .find(".item_money_box")
        .find("span")
        .first()
        .text()
        .trim();
      var a = $(item).find("a").attr("href");
      var data = {
        src: src,
        brand:
          "http://www.hurumshop.com/data/skin/front/moment_wib_C/img/banner/63a4166288d354972728984236833236_84861.png",
        title: title,
        price: price.replace("원", ""),
        a: a.replace("..", "http://www.hurumshop.com"),
      };

      if (index >= 0) {
        dataArr.push(data);

        //   sortJSON(dataArr,"price","asc");
      }
    }
  );

  if (!html3) {
    html3 = await getHtml3();
  }
  const $3 = cheerio.load(html3.data);
  $3("#fullContent #content .productList ul li").each(async function (
    index,
    item
  ) {
    var src =
      "https://www.esthermall.co.kr" +
      $(item).find(".imgArea").find("img").attr("src");
    var title = $(item).find(".tit").text();
    var price = $(item).find(".price").text().substring(0, 7);

    var a =
      "https://www.esthermall.co.kr" +
      $(item).find(".hideBox").find("a").eq(1).attr("href");
    var data = {
      src: src,
      brand:
        "https://www.esthermall.co.kr/skin/default/images/img/img_h1_logo_renew.gif",
      title: title,
      price: price.replace("원", ""),
      a: a,
    };

    if (index >= 0) {
      dataArr.push(data);
      fs.writeFileSync(dataPath, JSON.stringify(dataArr));

      //  sortJSON(dataArr,"price","asc");
    }
  });
  // sortJSON(dataArr,"price","asc");
  fs.writeFileSync(dataPath, JSON.stringify(dataArr));
}

// async function getProduct1() {
//   if (!html) {
//     html = await getHtml1();
//   }

//   const dataArr = [];
//   const dataPath = "./product.json";
//   const $ = cheerio.load(html.data);

//   $("#fullContent #content .productList ul li")
//   .each(async function (index, item) {
//     var src = 'https://www.esthermall.co.kr'+ $(item).find(".imgArea").find("img").attr("src");
//     var title = $(item).find(".tit").text();
//     var price = $(item).find(".price").text().substring(0,7);

//     var a = 'https://www.esthermall.co.kr'+$(item).find(".hideBox").find("a").eq(1).attr("href");
//     var data = {
//         src: src,
//         brand:'https://www.esthermall.co.kr/skin/default/images/img/img_h1_logo_renew.gif',
//         title: title,
//         price: price.replace('원',""),
//         a:a
//       };

//       if (index >= 0) {
//         dataArr.push(data);
//         fs.writeFileSync(dataPath, JSON.stringify(dataArr));
//         console.log("Product2222");
//       //  sortJSON(dataArr,"price","asc");

//       }
//     }
//   );
// }

module.exports = { getProduct1 };
