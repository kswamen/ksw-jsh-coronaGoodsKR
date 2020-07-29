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
      slidesToScroll: 1,
      arrows: true,
      centerMode: false,
      centerPadding: 0,
      autoplay: true,
      rows: 2,
      slidesPerRow: 1,
      //initialSlide: 1,
      //centerPadding: "px",
      //slidesPerRow: 3,
    };
    return (
      <Slider
        style={{
          top: "13vh",
          marginLeft: "15vw",
          paddingTop: "10px",
          width: "70vw",
          height: "65vh",
        }}
        className="carousel-slider"
        {...settings}
      >
        <div>
          <img
            src={
              "//img5.yna.co.kr/photo/yna/YH/2020/07/14/PYH2020071405170005400_P2.jpg"
            }
          />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />{" "}
        </div>
        <div>
          <img src={img5} />{" "}
        </div>
        <div>
          <img src={img6} />{" "}
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />{" "}
        </div>
        <div>
          <img src={img5} />{" "}
        </div>
        <div>
          <img src={img6} />{" "}
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />{" "}
        </div>
        <div>
          <img src={img5} />{" "}
        </div>
        <div>
          <img src={img6} />{" "}
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />{" "}
        </div>
        <div>
          <img src={img5} />{" "}
        </div>
        <div>
          <img src={img6} />{" "}
        </div>
      </Slider>
    );
  }
}

export default NewsCarousel;
