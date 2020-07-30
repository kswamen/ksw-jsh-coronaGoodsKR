import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Scroller from "./components/Scroller";
import { withStyles } from "@material-ui/core/styles";
import NewsCarousel from "./components/NewsCarousel";
import Posts from "./components/Posts";
import bg1 from "./image/bg1.jpg";

const styles = (theme) => ({
  firstDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  secondDiv: {
    backgroundColor: "#1176a7",
    width: "100vw",
    height: "100vh",
  },
  thirdDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div id="section1" className={classes.firstDiv}>
          <Appbar />
          <Scroller />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div id="section2" className={classes.secondDiv}></div>
        <div id="section3" className={classes.thirdDiv}>
          <NewsCarousel />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App); //withStyles 덕분에 firstDiv가 구별된다.
