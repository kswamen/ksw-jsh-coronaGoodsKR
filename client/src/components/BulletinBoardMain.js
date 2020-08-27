import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import { LoginContext } from "./LoginContext";

import "../css/postTablePage.css";

const styles = (theme) => ({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgba(0,0,0,1)",
    color: theme.palette.common.white,
    fontSize: 20,
    position: "sticky",
  },
  body: {
    fontSize: 25,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(152, 152, 152, 0.6)",
    },
    "&:hover": {
      backgroundColor: "rgba(100, 0, 0, 0.3) !important",
    },
  },
}))(TableRow);

class BulletinBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({
          posts: res,
        });
      })
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            top: this.props.AppbarHeight + 15,
            height: "auto",
            position: "relative",
            width: "90vw",
            left: "5vw",
            borderRadius: "15px",
            border: 30,
            borderColor: "#ffffff",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            maxHeight: "85vh",
          }}
        >
          <TableContainer
            style={{
              maxHeight: "80vh",
            }}
          >
            <Table
              stickyHeader
              className={classes.table}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">No.</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="right">Writer</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.posts.map((row) => (
                  <StyledTableRow
                    key={row.num}
                    hover
                    component={Link}
                    to={"/postPage/" + row.num}
                  >
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.num}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <img
                        style={{
                          maxWidth: "200px",
                          height: "auto",
                          maxHeight: "500px",
                        }}
                        src={row.image}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.writer}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "15%", fontSize: 15 }}
                      align="right"
                    >
                      <Moment
                        style={{ whiteSpace: "pre" }}
                        format="YYYY-MMM-D HH:MM"
                        withTitle
                      >
                        {row.date}
                      </Moment>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ display: "flex" }}>
            <LoginContext.Consumer>
              {({ isLoggedIn }) => (
                <>
                  {!isLoggedIn ? (
                    ""
                  ) : (
                    <Button
                      href="/createPostPage"
                      style={{
                        backgroundColor: "rgba(100,0,100,0.6)",
                        position: "relative",
                        width: "10vw",
                        marginRight: "20px",
                      }}
                    >
                      <h3 style={{ margin: "5px" }}>신규 게시글 작성</h3>
                    </Button>
                  )}
                </>
              )}
            </LoginContext.Consumer>
            <TablePagination
              component="div"
              labelRowsPerPage="페이지 당 게시물 수"
              style={{
                backgroundColor: "rgba(255, 215, 0, 0.6)",
                borderRadius: "7px",
              }}
            />
          </div>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(BulletinBoardMain);
