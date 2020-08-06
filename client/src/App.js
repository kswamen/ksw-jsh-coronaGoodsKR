import React, { Component } from "react";
import Appbar from "./components/Appbar";
import { withStyles } from "@material-ui/core/styles";
import MainPage from "./pages/mainPage";

const styles = (theme) => ({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Appbar />
        <div>
          <MainPage />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App); //withStyles 덕분에 firstDiv가 구별된다.
