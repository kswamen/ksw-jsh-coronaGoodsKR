import React from "react";
import io from "socket.io-client";
import { TableContainer, Table, TableCell, colors } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { withStyles} from "@material-ui/core/styles";

const StyledTableContainer = withStyles((theme) => ({
    root: {
      opacity: "80%",
      width: "50%",
      height:"500px",
      backgroundColor:"seashell"
    },
  }))(TableContainer);

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: 'jung',
            message: '',
            messages: []
        };

        this.socket = io('http://localhost:5000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
           // console.log(data);
            this.setState({messages: [...this.state.messages, data]});
       //     console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }

        const onKeyPress = (e) => {
            if(e.key =='Enter') {
                onclick();
            }
        }
    }
    render(){
        return (
            <div>
                <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card" >
                            <StyledTableContainer >
                                <Table>
                                    <TableBody>
                                        <TableCell>
                                            <div className="card-body">
                                                <div className="messages">
                                                    {this.state.messages.map(message => {
                                                        return (
                                                            <TableRow>
                                                            <TableCell>{message.author}</TableCell> 
                                                            <TableCell>:</TableCell>
                                                            <TableCell>{message.message}</TableCell>
                                                            </TableRow>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </StyledTableContainer>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username}  className="form-control"/>
                                <br/>
                                <textarea rows="2" cols="40" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
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