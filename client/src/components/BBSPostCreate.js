import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../css/quill.css";

const styles = (theme) => ({
  contentsDiv: {
    backgroundColor: "rgba(238, 230, 196, 0.8)",
    width: "70vw",
    borderRadius: "10px",
    borderColor: "#888888",
    border: 30,
    marginBottom: "10px",
  },
});

class BBSPostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppbarHeight: 0,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          top: this.props.AppbarHeight,
        }}
      >
        <div className={classes.contentsDiv}>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <TextField
              style={{ width: "100%", padding: "10px" }}
              id="standard-basic"
              label="제목을 입력하세요."
            ></TextField>
          </Container>
        </div>
        <div className={classes.contentsDiv}>
          <Container
            style={{
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              //alignItems: "center",
            }}
          >
            <ReactQuill></ReactQuill>
          </Container>
        </div>
        <div className={classes.contentsDiv}>
          <Container
            style={{
              display: "flex",
              height: "10vh",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{ height: "70%", marginRight: "15px" }}
              variant="outlined"
              color="secondary"
            >
              이전 페이지로 이동
            </Button>
            <Button
              style={{ height: "70%" }}
              variant="outlined"
              color="primary"
            >
              게시글 올리기
            </Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BBSPostCreate); //withStyles 덕분에 firstDiv가 구별된다.
