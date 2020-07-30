import React from "react";
import Slider from "react-slick";
import { post } from "axios";
import "../css/carousel.css";
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";
import img6 from "../image/6.jpeg";

class NewsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }

  componentWillMount() {
    this.callApi().then((res) => {
      this.setState({
        newsData: res,
      });
    });
  }

  callApi = async () => {
    const response = await fetch("/api/news");
    const body = await response.json();
    return body;
  };

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

    const newsComponent = (data) => {
      return data.map((news, i) => {
        return (
          <div className="div-slider">
            <img src={news.src} />
            <div>
              <h2>
                <text>{news.title}</text>
              </h2>
            </div>
            <text>{news.subtitle}</text>
          </div>
        );
      });
    };

    return (
      <Slider
        style={{
          top: "5vh",
          marginLeft: "15vw",
          width: "70vw",
          height: "85vh",
        }}
        className="carousel-slider"
        {...settings}
      >
        {newsComponent(this.state.newsData)}
      </Slider>
    );
  }
}

export default NewsCarousel;
