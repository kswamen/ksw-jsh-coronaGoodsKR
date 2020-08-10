

import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Product_option from "./Product_option";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableContainer2 = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba( 255, 255, 255,0.8)",
    //opacity:'80%',
    width: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    height: "500px",
  },
}))(TableContainer);

const StyledTableContainer1 = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba( 255, 255, 255,0.8)",
    //opacity:'80%',
    width: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    height: "auto",
  },
}))(TableContainer);

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product_Data: [],
    };
    this.compareBy_ASC.bind(this);
    this.sortBy_ASC.bind(this);
    this.compareBy_DESC.bind(this);
    this.sortBy_DESC.bind(this);
  }

  componentWillMount() {
    this.callApi().then((res) => {
      this.setState({
        Product_Data: res,
      });
    });
  }

  callApi = async () => {
    const response = await fetch("/api/product");
    const body = await response.json();
    return body;
  };

  compareBy_ASC(key) {
    return function (a, b) {
      var x = parseInt(a[key]);
      var y = parseInt(b[key]);

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };
  }

  sortBy_ASC(key) {
    let arrayCopy = [...this.state.Product_Data];
    arrayCopy.sort(this.compareBy_ASC(key));
    this.setState({ Product_Data: arrayCopy });
  }

  compareBy_DESC(key) {
    return function (a, b) {
      var x = parseInt(a[key]);
      var y = parseInt(b[key]);

      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    };
  }

  sortBy_DESC(key) {
    let arrayCopy = [...this.state.Product_Data];
    arrayCopy.sort(this.compareBy_DESC(key));
    this.setState({ Product_Data: arrayCopy });
  }

  render() {
    const { Product_Data } = this.state;
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h2 style={{ color: "white", textAlignLast: "center" }}>
          ※ 면역력 증가 상품 (쿠팡 , 휴럼샾 , 이스더포뮬라)
        </h2>
        <br></br>
        <div>
          <StyledTableContainer1 component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" width="20%">
                    상품
                  </StyledTableCell>
                  <StyledTableCell align="center" width="10%">
                    상표
                  </StyledTableCell>
                  <StyledTableCell align="center" width="30%">
                    제목
                  </StyledTableCell>
                  <StyledTableCell align="center" width="26%">
                    가격
                    <Button
                      color="secondary"
                      onClick={() => this.sortBy_ASC("price")}
                    >
                      ▲
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => this.sortBy_DESC("price")}
                    >
                      ▼
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center" width="23%">
                    구매
                  </StyledTableCell>
                </TableRow>
              </TableHead>
            </Table>
          </StyledTableContainer1>
        </div>
        <StyledTableContainer2 component={Paper}>
          <Table>
            <TableBody>
              {Product_Data.map((post) => {
                return (
                  <Product_option
                    src={post.src}
                    brand={post.brand}
                    title={post.title}
                    price={post.price}
                    a={post.a}
                  />
                );
              })}
            </TableBody>
          </Table>
        </StyledTableContainer2>
      </div>
    );
  }
}

export default Product;
