import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { blue } from "@material-ui/core/colors";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableContainer = withStyles((theme) => ({
  root: {
    opacity: "80%",
    width: "auto%",
    marginLeft: "8%",
    marginRight: "20%",
  },
}))(TableContainer);

const StyledTableContainer2 = withStyles((theme) => ({
  root: {
    opacity: "80%",
    width: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    height: "250px",
  },
}))(TableContainer);

const StyledTableContainer3 = withStyles((theme) => ({
  root: {
    opacity: "80%",
    width: "auto",
    marginLeft: "20%",
    marginRight: "12%",
  },
}))(TableContainer);

class Posts extends Component {
  /* 컴포넌트 생성시 */
  /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
  constructor(props) {
    super(props);
    this.state = {
      crawl: [],
    };
  }
  componentWillMount() {
    fetch("api/crawl")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          crawl: data,
        })
      );
  }
  render() {
    const { crawl } = this.state;
    const crawllist = crawl.map((post) => (
      <div>
        <StyledTableContainer component={Paper}>
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
        </StyledTableContainer>
      </div>
    ));

    const agelist = crawl.map((post) => (
      <div>
        <StyledTableContainer3 component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">구분</StyledTableCell>
                <StyledTableCell align="center">확진자</StyledTableCell>
                <StyledTableCell align="center">사망자</StyledTableCell>
                <StyledTableCell align="center">치명률(%)</StyledTableCell>
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
        </StyledTableContainer3>
      </div>
    ));

    const agelist2 = crawl.map((post) => (
      <div>
        <StyledTableContainer2 component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">구분</StyledTableCell>
                <StyledTableCell align="center">확진자</StyledTableCell>
                <StyledTableCell align="center">사망자</StyledTableCell>
                <StyledTableCell align="center">치명률(%)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell align="center">80 이상</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_80_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_80_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_80_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">70 - 79</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_70_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_70_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_70_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">60 - 69</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_60_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_60_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_60_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">50 - 59</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_50_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_50_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_50_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">40 - 49</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_40_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_40_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_40_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">30 - 39</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_30_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_30_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_30_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">20 - 29</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_20_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_20_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_20_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">10 - 19</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_10_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_10_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_10_critical}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">0 - 9</StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_0_sick}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_0_death}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.get4_0_critical}
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer2>
      </div>
    ));

    return (
      <div>
        <br></br><br></br><br></br><br></br>
        <table
          style={{ textAlignLast: "center", width: "-webkit-fill-available" }}
        >
          <tr>
            <td>
              <h2 style={{ color: "white", textAlignLast: "center" }}>
                ※ 국내 발생 현황
              </h2>
            </td>
            <td>
              <h2 style={{ color: "white", textAlignLast: "center" }}>
                ※ 확진자 성별 현황
              </h2>
            </td>
          </tr>
          <tr>
            <td>{crawllist}</td>
            <td>{agelist}</td>
          </tr>
        </table>

        <br></br>
        <br></br>
        <h2 style={{ color: "white", textAlignLast: "center" }}>
          ※ 확진자 연령별 현황
        </h2>
        {agelist2}
      </div>
    );
  }
}
export default Posts;
