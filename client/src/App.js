import React, { Component } from "react";
import Appbar from "./components/Appbar";
import { withStyles } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import bulletinBoard from "./pages/bulletinBoard";
import createPostPage from "./pages/createPostPage";
import history from "./components/History";

import { LoginContext } from "./components/LoginContext";

const styles = (theme) => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.setLogin = (res) => {
      this.setState({
        isLoggedIn: true,
        userName: res.profileObj.name,
        userImageSrc: res.profileObj.imageUrl,
        userID: res.googleId,
      });
    };
    this.setLogout = (res) => {
      this.setState({
        isLoggedIn: false,
        userName: "",
        userImageSrc: "",
        userID: "",
      });
    };
    this.state = {
      isLoggedIn: false,
      userName: "",
      userImageSrc: "",
      userID: "",
      setLogin: this.setLogin,
      setLogout: this.setLogout,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/*원래 위에 Router 들어가 있었음*/}
        <LoginContext.Provider value={this.state}>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/BBS" exact component={bulletinBoard} />
            <Route path="/createPostPage" exact component={createPostPage} />
          </Switch>
        </LoginContext.Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App); //withStyles 덕분에 firstDiv가 구별된다.
