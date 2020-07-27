import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Scroller from "./components/Scroller";
import { Link, animateScroll as scroll } from "react-scroll";
import { withStyles } from "@material-ui/core/styles";

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
        </div>
        <div id="section2" className={classes.secondDiv}></div>
        <div id="section3" className={classes.thirdDiv}></div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
