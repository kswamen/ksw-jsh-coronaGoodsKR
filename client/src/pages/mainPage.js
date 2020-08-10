import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import NewsCarousel from "../components/NewsCarousel";
import Posts from "../components/Posts";
import bg1 from "../image/bg1.jpeg";
import bg2 from "../image/bg2.jpg";
import bg3 from "../image/bg3.jpg";
import Product from "../components/Product";
import Appbar from "../components/Appbar";
import Chat from "../components/Chat";

const styles = (theme) => ({
  firstDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
  },
  secondDiv: {
    backgroundImage: "url(" + bg2 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
  },
  thirdDiv: {
    backgroundImage: "url(" + bg3 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
  },
  fourthDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
    
  },
});

class mainPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Appbar />
        <div id="section1" className={classes.firstDiv}>
          <Posts />
        </div>
        <div id="section2" className={classes.secondDiv}>
          <Product />
        </div>
        <div id="section3" className={classes.thirdDiv}>
          <NewsCarousel />
        </div>
        <div id="section4" className={classes.fourthDiv}>
          <Chat/>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(mainPage); //withStyles 덕분에 firstDiv가 구별된다.
