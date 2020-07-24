import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    left: "90%",
    top: "40%",
  },
}));

export default function Scroller() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>News</Button>
        <Button>Mask</Button>
        <Button>Products</Button>
      </ButtonGroup>
    </div>
  );
}
