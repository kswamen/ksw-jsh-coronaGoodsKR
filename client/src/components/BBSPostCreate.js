import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginContext } from "./LoginContext";
import ImageUploader from "quill-image-uploader";

import "../css/quill.css";

Quill.register("modules/imageUploader", ImageUploader);

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
      thumbnail: "",
      isLoggedIn: false,
      userID: "",
      userName: "",
      userImageSrc: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  modules = {
    // #3 Add "image" to the toolbar
    toolbar: [["bold", "italic", "image"]],
    // # 4 Add module and upload function
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      },
    },
  };

  handleFormSubmit = () => {
    this.setPosts();
    if (this.state.title == "" || this.state.isLoggedIn == false) {
    }
    console.log(this.state.content);
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
            <ReactQuill id="content" modules={this.modules}></ReactQuill>
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
            {({ isLoggedIn, userName, userImageSrc, userID }) => (
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
