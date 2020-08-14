import React from "react";

export const LoginContext = React.createContext({
  isLoggedin: false,
  userName: "",
  userImageSrc: "",

  setLogin: () => {},
  setLogout: () => {},
});
