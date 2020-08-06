import React, { Component } from "react";
import Appbar from "./components/Appbar";
import { withStyles } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import bulletinBoard from "./pages/bulletinBoard";
import history from "./components/History";

const styles = (theme) => ({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/BBS" exact component={bulletinBoard} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App); //withStyles 덕분에 firstDiv가 구별된다.
