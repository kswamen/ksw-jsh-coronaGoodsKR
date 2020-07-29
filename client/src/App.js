import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Scroller from "./components/Scroller";
import { withStyles } from "@material-ui/core/styles";
import NewsCarousel from "./components/NewsCarousel";
import Posts from "./components/Posts";
const styles = (theme) => ({
  firstDiv: {
    backgroundColor: "#81c147",
    width: "100vw",
    height: "100vh",
  },
  secondDiv: {
    backgroundColor: "#1176a7",
    width: "100vw",
    height: "100vh",
  },
  thirdDiv: {
    backgroundColor: "#228f76",
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
