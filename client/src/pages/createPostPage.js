import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppbarBBS from "../components/AppbarBBS";
import TextField from "@material-ui/core/TextField";
import img1 from "../image/bg3.jpg";

const styles = (theme) => ({
  firstDiv: {
    backgroundColor: "#ffffff",
    width: "auto",
    height: "100vh",
  },
});

class bulletinBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppbarHeight: 0,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div id="section1" className={classes.firstDiv}></div>
      </>
    );
  }
}

export default withStyles(styles)(bulletinBoard); //withStyles 덕분에 firstDiv가 구별된다.
