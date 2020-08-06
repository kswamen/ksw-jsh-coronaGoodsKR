import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import NewsCarousel from "../components/NewsCarousel";
import Posts from "../components/Posts";
import bg1 from "../image/bg1.jpeg";
import AppbarBBS from "../components/AppbarBBS";

const styles = (theme) => ({
  firstDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
  },
});

class bulletinBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <AppbarBBS />
        <div id="section1" className={classes.firstDiv}></div>
      </>
    );
  }
}

export default withStyles(styles)(bulletinBoard); //withStyles 덕분에 firstDiv가 구별된다.
