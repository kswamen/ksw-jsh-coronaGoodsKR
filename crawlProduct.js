const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let html = "";
let html2 = "";
var sortJSON = async function(sort_data, key, type) {
  if (type == undefined) {
    type = "asc";
  }
  return await sort_data.sort(function(a, b) {
    var x = parseInt(a[key]);
    var y = parseInt(b[key]);
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } 
    else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });
};

async function getHtml1() {
  try {
    return await axios.get("https://www.coupang.com/np/categories/306749?channel=plp_C2");
  } catch (error) {
    console.error(error);
  }
}

async function getHtml2() {
  try {
    return await axios.get("http://www.hurumshop.com/goods/goods_list.php?cateCd=038006");
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

  $(".newcx-container .newcx-body .newcx-main .newcx-list ul li")
  .each(async function (index, item) {
    var src ='http:'+ $(item).find("dl").find("img").attr("src");
    var title = $(item).find("dl").find("img").attr("alt");
    var price = $(item).find("dl").find("dd").find(".sale")
    .find(".price-value").first().text();
    var a ='https://www.coupang.com/'+$(item).find("a").attr("href");
      var data = {
        src: src,
        title: title,
        price: price,
        a:a
      };
      if (index > 7) {
        dataArr.push(data);
      //  sortJSON(dataArr,"price","asc");
       // fs.writeFileSync(dataPath, JSON.stringify(dataArr));
        console.log("product on json file");
      } 
    }
  );

  if (!html2) {
      html2 = await getHtml2();
    }
    
  const $2 = cheerio.load(html2.data);
  $2("#contents .goods_list_item .goods_list .goods_list_cont ul li")
  .each(async function (index, item) {
    var src = 'http://www.hurumshop.com'+$(item).find("img").attr("src");
    var title = $(item).find("img").attr("alt");
    var price = $(item).find(".item_money_box").find("span").first()
    .text().trim();
    var a = $(item).find("a").attr("href");
      var data = {
        src: src,
        title: title,
        price: price.replace("원",""),
        a:a.replace("..","http://www.hurumshop.com")
      };
      
      if (index >= 0) {
        dataArr.push(data);
        
        console.log("Product2222");
     //   sortJSON(dataArr,"price","asc");
        
      } 
    }
  );

 // sortJSON(dataArr,"price","asc");
  fs.writeFileSync(dataPath, JSON.stringify(dataArr));

}



// async function getProduct2() {
//   if (!html) {
//     html = await getHtml2();
//   }

//   const dataArr = [];
//   const dataPath = "./product.json";
//   const $ = cheerio.load(html.data);

//   $("#contents .goods_list_item .goods_list .goods_list_cont ul li")
//   .each(async function (index, item) {
//     var src = 'http://www.hurumshop.com'+$(item).find("img").attr("src");
//     var title = $(item).find("img").attr("alt");
//     var price = $(item).find(".item_money_box").find("span").first()
//     .text().trim();
//     var a = $(item).find("a").attr("href");
//       var data = {
//         src: src,
//         title: title,
//         price: price.replace("원",""),
//         a:a.replace("..","http://www.hurumshop.com")
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

module.exports = {  getProduct1};
