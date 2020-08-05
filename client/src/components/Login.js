import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }

  responseGoogle = (res) => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
    console.log(res);
    console.log(this.state.id);
    console.log(this.state.name);
  };

  render() {
    return (
      <GoogleLogin
        clientId={
          "310814871301-d992m2477iodmeta9hlpo9jnthjv1gfj.apps.googleusercontent.com"
        }
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin>
    );
  }
}
