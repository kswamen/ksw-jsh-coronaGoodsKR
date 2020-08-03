import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFail = this.responseFail.bind(this);
  }

  responseGoogle = (res) => {
    console.log(res.accessToken);
  };

  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={
            "310814871301-d992m2477iodmeta9hlpo9jnthjv1gfj.apps.googleusercontent.com"
          }
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

export default Login;
