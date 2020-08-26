import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AppbarBBS from "../components/AppbarBBS";
import BBSPostCreate from "../components/BBSPostCreate";
import bg1 from "../image/bg1.jpeg";
import BulletinBoardMain from "../components/BulletinBoardMain";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  firstDiv: {
    backgroundImage: "url(" + bg1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh",
    position: "relative",
  },
});

class postPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppbarHeight: 0,
    };
  }

  componentDidMount() {
    this.setState({
      AppbarHeight: document.getElementById("Appbar-bbs").clientHeight,
    });
  }

  render() {
    const { classes } = this.props;
    const { params } = this.props.match;
    return (
      <>
        <AppbarBBS />
        <div className={classes.firstDiv}>
          <Button
            style={{ top: this.state.AppbarHeight, backgroundColor: "#ffffff" }}
          >
            {params.postNum}
          </Button>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(postPage); //withStyles 덕분에 firstDiv가 구별된다.
