import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import imgMask from "../image/CoronaIcon.png";
import Typing from "react-typing-animation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#ff69b4", opacity: 1.0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img style={{ width: 80, height: 70 }} src={imgMask} />
          </IconButton>
          <Typing speed={150}>
            <Typography
              variant="h4"
              className={classes.title}
              color="textPrimary"
            >
              CoronaGoodsKR
            </Typography>
          </Typing>
        </Toolbar>
      </AppBar>
    </div>
  );
}
