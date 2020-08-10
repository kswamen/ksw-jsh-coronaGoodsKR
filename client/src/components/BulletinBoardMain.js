import React from "react";
import Button from "@material-ui/core/Button";
import "../css/carousel.css";

class BulletinBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }

  componentDidMount() {
    console.log(this.props.AppbarHeight);
  }

  render() {
    return (
      <Button
        style={{
          top: this.props.AppbarHeight,
          color: "#ffffff",
          width: "500px",
          height: "500px",
        }}
      >
        <h1>abcde</h1>
      </Button>
    );
  }
}

export default BulletinBoardMain;
