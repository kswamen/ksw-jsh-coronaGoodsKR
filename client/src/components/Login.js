import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
      anchorEl: null,
      isLoggedIn: false,
    };
  }

  render() {
    const handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleClose = () => {
      this.setState({ anchorEl: null });
    };

    const responseGoogleOnSuccess = (res) => {
      this.setState({
        id: res.googleId,
        name: res.profileObj.name,
        provider: "google",
        img: res.profileObj.imageUrl,
        isLoggedIn: true,
      });
      console.log(res);
      console.log(this.state.id);
      console.log(this.state.name);
    };

    const responseGoogleOnFailure = (res) => {
      console.log(res);
    };

    const logoutPressed = () => {
      this.setState({ isLoggedIn: false });
      console.log(this.state.isLoggedIn);
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
        {!this.state.isLoggedIn ? (
          ""
        ) : (
          <Button
            style={{
              width: "50px",
              height: "50px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "auto",
              }}
              src={this.state.img}
            />
          </Button>
        )}
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="outlined"
          color="default"
          style={{ borderColor: "#ffffff", height: "30%" }}
        >
          <Typography style={{ color: "#ffffff" }} variant="h5">
            {!this.state.isLoggedIn ? "Login" : "Logout"}
          </Typography>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={handleClose}
        >
          {!this.state.isLoggedIn ? (
            <MenuItem onClick={handleClose}>
              <GoogleLogin
                clientId={
                  "310814871301-d992m2477iodmeta9hlpo9jnthjv1gfj.apps.googleusercontent.com"
                }
                onSuccess={responseGoogleOnSuccess}
                onFailure={responseGoogleOnFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              ></GoogleLogin>
            </MenuItem>
          ) : (
            <MenuItem onClick={handleClose}>
              <GoogleLogout
                buttonText="로그아웃하시겠습니까?"
                onLogoutSuccess={logoutPressed}
              ></GoogleLogout>
            </MenuItem>
          )}
        </Menu>
      </div>
    );
  }
}
