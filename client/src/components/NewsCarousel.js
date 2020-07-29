import React from "react";
import Slider from "react-slick";
import "../css/carousel.css";
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";
import img6 from "../image/6.jpeg";

class NewsCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      centerMode: false,
      centerPadding: 0,
      autoplay: false,
      rows: 2,
      slidesPerRow: 1,
      //initialSlide: 1,
      //centerPadding: "px",
      //slidesPerRow: 3,
    };
    return (
      <Slider
        style={{
          top: "10vh",
          marginLeft: "15vw",
          width: "70vw",
          height: "85vh",
        }}
        className="carousel-slider"
        {...settings}
      >
        <div className="div-slider">
          <img
            src={
              "//img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_P2.jpg"
            }
          />
          <div>
            <h2>
              <text>title</text>
            </h2>
          </div>
          <text>
            articlearticlearticlearticle/img5.yna/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_
          </text>
        </div>
        <div className="div-slider">
          <img src={img2} />
          <h2>
            <text>title</text>
          </h2>
          <text>
            {" "}
            articlearticlearticlearticle/img5.yna/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_
          </text>
        </div>
        <div className="div-slider">
          <img src={img3} />
          <h2>
            <text>title</text>
          </h2>
          <text>
            {" "}
            articlearticlearticlearticle/img5.yna/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_
          </text>
        </div>
        <div className="div-slider">
          <img src={img4} />
          <h2>
            <text>title</text>
          </h2>
          <text>
            {" "}
            articlearticlearticlearticle/img5.yna/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_/img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_
          </text>
        </div>
        <div className="div-slider">
          <img src={img5} />{" "}
        </div>
        <div className="div-slider">
          <img src={img6} />{" "}
        </div>
        <div className="div-slider">
          <img src={img1} />
        </div>
        <div className="div-slider">
          <img src={img2} />
        </div>
        <div className="div-slider">
          <img src={img3} />
        </div>
        <div className="div-slider">
          <img src={img4} />{" "}
        </div>
        <div className="div-slider">
          <img src={img5} />{" "}
        </div>
        <div className="div-slider">
          <img src={img6} />{" "}
        </div>
        <div className="div-slider">
          <img src={img1} />
        </div>
        <div className="div-slider">
          <img src={img2} />
        </div>
        <div className="div-slider">
          <img src={img3} />
        </div>
        <div className="div-slider">
          <img src={img4} />{" "}
        </div>
        <div className="div-slider">
          <img src={img5} />{" "}
        </div>
        <div className="div-slider">
          <img src={img6} />{" "}
        </div>
        <div className="div-slider">
          <img src={img1} />
        </div>
        <div className="div-slider">
          <img src={img2} />
        </div>
        <div className="div-slider">
          <img src={img3} />
        </div>
        <div className="div-slider">
          <img src={img4} />{" "}
        </div>
        <div className="div-slider">
          <img src={img5} />{" "}
        </div>
        <div className="div-slider">
          <img src={img6} />{" "}
        </div>
      </Slider>
    );
  }
}

export default NewsCarousel;
