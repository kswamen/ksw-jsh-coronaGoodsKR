import React from "react";
import Slider from "react-slick";
import "./carousel.css";
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      //centerPadding: "px",
      //slidesPerRow: 3,
    };
    return (
      <Slider
        style={{
          marginTop: "10vh",
          marginLeft: "10vw",
          width: "80vw",
          height: "65vh",
        }}
        className="carousel-slider"
        {...settings}
      >
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
