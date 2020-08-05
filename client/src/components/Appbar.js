import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import imgMask from "../image/CoronaIcon.png";
import Typing from "react-typing-animation";
import { Link, animateScroll as scroll } from "react-scroll";

import Login from "./Login";

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
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

          <Typography variant="h4" color="#ffffff">
            CoronaGoodsKR
          </Typography>

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
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Typography
                  style={{ color: "#ffffff", padding: "15px" }}
                  variant="h5"
                >
                  Total Patients
                </Typography>
              </Link>
            </Button>
            <Button color="default">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Typography
                  style={{ color: "#ffffff", padding: "15px" }}
                  variant="h5"
                >
                  Products
                </Typography>
              </Link>
            </Button>
            <Button color="default">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                duration={500}
              >
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
              </Link>
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
              color="default"
              style={{ borderColor: "#ffffff", height: "30%" }}
            >
              <Typography style={{ color: "#ffffff" }} variant="h5">
                Login
              </Typography>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Login />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
