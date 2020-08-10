import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import mask from "../image/mask.png";

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
    fontSize: 14,
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
  },
}))(TableRow);

function createData(name, img, calories, fat, carbs, protein) {
  return { name, img, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
  createData("Frozen yoghurt", mask, 159, 6.0, 24, 4.0),
];

class BulletinBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <TableContainer
        style={{
          top: this.props.AppbarHeight + 15,
          height: "auto",
          position: "relative",
          width: "90vw",
          left: "5vw",
          borderRadius: "15px",
          border: 30,
          borderColor: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          maxHeight: "80vh",
        }}
        component={Paper}
      >
        <Table
          stickyHeader
          className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={row.img}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(BulletinBoardMain);
