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
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba( 52, 52, 52, 0.8)" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img style={{ width: 80, height: 70 }} src={imgMask} />
          </IconButton>
          <Typing speed={10}>
            <Typography variant="h4" color="#ffffff">
              CoronaGoodsKR
            </Typography>
          </Typing>

          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button color="default">
              <Typography
                style={{ color: "#ffffff", padding: "15px" }}
                variant="h5"
              >
                Total Patients
              </Typography>
            </Button>
            <Button color="default">
              <Typography
                style={{ color: "#ffffff", padding: "15px" }}
                variant="h5"
              >
                Products
              </Typography>
            </Button>
            <Button color="default">
              <Typography
                style={{
                  color: "#ffffff",
                  padding: "15px",
                  marginRight: "15px",
                }}
                variant="h5"
              >
                News
              </Typography>
            </Button>
            <Button
              variant="outlined"
              color="default"
              style={{ borderColor: "#ffffff", height: "30%" }}
            >
              <Typography style={{ color: "#ffffff" }} variant="h5">
                Login
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
