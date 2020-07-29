import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class Posts extends Component {
  /* 컴포넌트 생성시 */
  /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
  constructor(props) {
    super(props);
    this.state = {
      crwal: [],
    };
  }
  componentWillMount() {
    fetch("api/crwal")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          crwal: data,
        })
      );
  }
  render() {
    const { crwal } = this.state;
    const crwallist = crwal.map((post) => (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell colSpan="4" align="center">
                  확진환자
                </StyledTableCell>
                <StyledTableCell colSpan="2" align="center">
                  사망자
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell align="center">누적</StyledTableCell>
                <StyledTableCell colSpan="3" align="center">
                  전일대비
                </StyledTableCell>
                <StyledTableCell align="center">누적</StyledTableCell>
                <StyledTableCell align="center">전일대비</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">누적확진자</StyledTableCell>
                <StyledTableCell align="center">소계</StyledTableCell>
                <StyledTableCell align="center">해외유입</StyledTableCell>
                <StyledTableCell align="center">국내발생</StyledTableCell>
                <StyledTableCell align="center" rowSpan="2">
                  {post.get2_accumulate}
                </StyledTableCell>
                <StyledTableCell align="center" rowSpan="2">
                  {post.get2_day}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">
                  {post.accumulate}
                </StyledTableCell>
                <StyledTableCell align="center">{post.s_total}</StyledTableCell>
                <StyledTableCell align="center">
                  {post.Overseas}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.domestic}
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    ));

    const agelist = crwal.map((post) => (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">구분</StyledTableCell>
                <StyledTableCell align="center">확진자</StyledTableCell>
                <StyledTableCell align="center">사망자</StyledTableCell>
                <StyledTableCell align="center">치명률</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell align="center">남성</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_maccumulate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_mdeath}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_mcritical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">여성</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_waccumulate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_wdeath}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get3_wcritical}
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    ));

    return (
      <div>
        <h2>※ 국내 발생 현황</h2>
        {crwallist}
        <p></p>
        <h2>※ 확진자 성별 현황</h2>
        {agelist}
      </div>
    );
  }
}
export default Posts;
