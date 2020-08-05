import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import imgMask from "../image/CoronaIcon.png";
import { Link, animateScroll as scroll } from "react-scroll";

import Login from "./Login";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
});

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      isLoggedIn: false,
    };
  }

  render() {
    const { classes } = this.props;

    const handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleClose = () => {
      this.setState({ anchorEl: null });
    };
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "rgba( 52, 52, 52, 0.8)", display: "flex" }}
        >
          <Toolbar>
            <div
              style={{
                width: "100vw",
                display: "flex",
                position: "relative",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "30vw",
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  style={{ alignSelf: "flex-start" }}
                >
                  <img style={{ width: 80, height: 70 }} src={imgMask} />
                </IconButton>
                <Typography variant="h4" color="#ffffff">
                  CoronaGoodsKR
                </Typography>
              </div>
              <div
                style={{
                  width: "50vw",
                  display: "flex",
                  position: "relative",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  marginLeft: "auto",
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
              </div>
              <Login />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);
