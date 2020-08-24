import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginContext } from "./LoginContext";

import "../css/quill.css";

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

class BBSPostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      isLoggedIn: false,
      userID: "",
      userName: "",
      userImageSrc: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = () => {
    this.setPosts();
    if (
      this.state.title == "" ||
      this.state.content == "<p><br></p>" || //컨텐트의 기본 폼(아무것도 없을 때)
      this.state.isLoggedIn == false
    ) {
      console.log("something wrong!");
    } else {
      console.log("everything is fine.");
    }
  };

  setPosts = () => {
    this.state.title = document.getElementById("title").value;
    this.state.content = document.getElementsByClassName(
      "ql-editor"
    )[0].innerHTML;
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
          top: this.props.AppbarHeight + 30,
        }}
      >
        <div className={classes.contentsDiv}>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <TextField
              style={{ width: "100%", padding: "10px" }}
              id="title"
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
            <ReactQuill id="content"></ReactQuill>
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
              href="/BBS"
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
              onClick={this.handleFormSubmit}
            >
              게시글 올리기
            </Button>
          </Container>
          <LoginContext.Consumer>
            {({
              isLoggedIn,
              userName,
              userImageSrc,
              userID,
              setLogin,
              setLogout,
            }) => (
              <div style={{ display: "none" }}>
                {
                  ((this.state.isLoggedIn = isLoggedIn),
                  (this.state.userName = userName),
                  (this.state.userID = userID),
                  (this.state.userImageSrc = userImageSrc))
                }
              </div>
            )}
          </LoginContext.Consumer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BBSPostCreate); //withStyles 덕분에 firstDiv가 구별된다.
