import React from "react";
import Appbar from "./components/Appbar";
import Scroller from "./components/Scroller";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  firstDiv: {
    backgroundColor: "#81c147",
    width: "100vw",
    height: "100vh",
  },
  secondDiv: {
    backgroundColor: "#1176a7",
    width: "100vw",
    height: "100vh",
  },
  thirdDiv: {
    backgroundColor: "#228f76",
    width: "100vw",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.firstDiv}>
        <Appbar />
        <Scroller />
      </div>
      <div className={classes.secondDiv}></div>
      <div className={classes.thirdDiv}></div>
    </div>
  );
}

export default App;
