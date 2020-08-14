import React from "react";
import io from "socket.io-client";
import { TableContainer, Table, TableCell, colors } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Clock from "react-live-clock";

const StyledTableContainer = withStyles((theme) => ({
  root: {
    opacity: "80%",
    width: "80%",
    height: "500px",
    backgroundColor: "seashell",
    marginBottom: "2%",
    marginTop: "5%",
  },
}))(TableContainer);

const StyleText = withStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "15%",
    height: "auto",
    marginRight: "10px",
    marginBottom: "3%",
  },
}))(TextField);

const StyleText2 = withStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "60%",
    height: "auto",
    marginRight: "10px",
    marginBottom: "3%",
  },
}))(TextField);

let today = new Date();

let hours = today.getHours(); // 시
let minutes = today.getMinutes(); // 분
let seconds = today.getSeconds(); // 초

class Chat extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초
    this.state = {
      // username: '',
      message: "",
      messages: [],
      time: hours + ":" + minutes + ":" + seconds,
    };

    this.socket = io("http://localhost:5000");

    this.socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });

    const addMessage = (data) => {
      // console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      //     console.log(this.state.messages);
    };

    this.sendMessage = (ev) => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message,
        time: this.state.time,
      });
      this.setState({ message: "" });
    };
  }

  getDate = () => {
    let today = new Date();
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초
    this.setState({
      time: hours + ":" + minutes + ":" + seconds,
    });
  };

  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 600);
  }

  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }

  render() {
    const { time } = this.state;

    const divStyle = {
      marginLeft: "0%",
    };
    const divChat = {
      textAlign: "-webkit-center",
    };

    return (
      <div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className="container" style={divChat}>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <StyledTableContainer>
                  <Table>
                    <TableBody>
                      <TableCell>
                        <div className="card-body">
                          Chatting &nbsp; &nbsp;&nbsp;&nbsp;{" "}
                          <div className="messages">
                            {this.state.messages.map((message) => {
                              return (
                                <TableRow>
                                  <TableCell>{message.author}</TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{message.message}</TableCell>
                                  <TableCell>{message.time}</TableCell>
                                </TableRow>
                              );
                            })}
                          </div>
                        </div>
                      </TableCell>
                    </TableBody>
                  </Table>
                </StyledTableContainer>
                <div style={divStyle} className="card-footer">
                  <StyleText
                    label="UserName"
                    value={this.state.username}
                    onChange={(ev) =>
                      this.setState({ username: ev.target.value })
                    }
                    className="form-control"
                  />
                  {/* <br/> */}
                  {/* <textarea rows="2" cols="40" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/> */}
                  <StyleText2
                    label="Message"
                    className="form-control"
                    value={this.state.message}
                    onChange={(ev) =>
                      this.setState({ message: ev.target.value })
                    }
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.sendMessage}
                    className="btn btn-primary form-control"
                  >
                    전송
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
