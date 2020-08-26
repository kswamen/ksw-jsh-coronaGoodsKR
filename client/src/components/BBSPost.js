import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { post } from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AppbarBBS from "../components/AppbarBBS";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import bg1 from "../image/bg1.jpeg";
import Button from "@material-ui/core/Button";

import "../css/BBSPost.css";

const styles = (theme) => ({
  contentsDiv: {
    backgroundColor: "rgba(238, 230, 196, 0.7)",
    width: "70vw",
    borderRadius: "10px",
    borderColor: "#888888",
    border: 30,
    marginBottom: "10px",
  },
});

class postPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppbarHeight: 0,
      post: "",
    };
  }

  componentDidMount() {
    this.setState({
      AppbarHeight: document.getElementById("Appbar-bbs").clientHeight,
    });
    this.getPosts()
      .then((res) => {
        console.log(res[0]);
        this.setState({
          post: res[0],
        });
      })
      .catch((err) => console.log(err));
  }

  getPosts = async () => {
    const response = await fetch("/api/getPost/" + this.props.postNum);
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          top: this.state.AppbarHeight + 30,
        }}
      >
        <div className={classes.contentsDiv}>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <TextField
              style={{ width: "100%", padding: "10px" }}
              label="Title"
              defaultValue="asdf"
              InputProps={{
                readOnly: true,
              }}
              id="standard-read-only-input"
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(postPage); //withStyles 덕분에 firstDiv가 구별된다.
