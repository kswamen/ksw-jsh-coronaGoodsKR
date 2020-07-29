import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    left: "93%",
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
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
          >
            Total Patients
          </Link>
        </Button>
        <Button>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
          >
            Mask
          </Link>
        </Button>
        <Button>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
          >
            News
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}
