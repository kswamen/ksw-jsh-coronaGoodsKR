// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: 'name', numeric: false, disablePadding: true, label: '제품 이름' },
//   { id: 'calories', numeric: true, disablePadding: false, label: '가격' },
//   { id: 'fat', numeric: true, disablePadding: false, label: '사진' },
//   { id: 'carbs', numeric: true, disablePadding: false, label: '구매하러 가기' },
// ];

// function EnhancedTableHead(props) {
//   const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           ※ 면역력 증진 식품
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin:'auto',
//     width: '80%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         Product_Data: [],
//     };
//   }

//   componentWillMount() {
//     this.callApi().then((res) => {
//       this.setState({
//         Product_Data: res,
//       });
//     });
//   }

//   callApi = async () => {
//     const response = await fetch("/api/product");
//     const body = await response.json();
//     return body;
//   };
  
//   render() {

//   const {classes} = this.props;
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
  
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };



//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

 



//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       <Paper className={classes.paper}>
      
//         <EnhancedTableToolbar />
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <EnhancedTableHead
//               classes={classes}
              
//               order={order}
//               orderBy={orderBy}
              
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
                  
                  

//                   return (
//                     <TableRow
//                       hover
                      
//                       role="checkbox"
                      
//                       tabIndex={-1}
//                       key={row.name}
                    
//                     >
//                       <TableCell padding="checkbox">
//                       </TableCell>
//                       <TableCell component="th" scope="row" padding="none">
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 8, 10]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
      
//     </div>
//   );
// }
// }
// export default Product


import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Product_option from './Product_option'
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);

  const StyledTableContainer2 = withStyles((theme)=> ({
    root: {
      opacity:'80%',
      width:'auto',
      marginLeft:'5%',
      marginRight:'5%',
      height:'500px',
    }
  }))(TableContainer)

  const StyledTableContainer1 = withStyles((theme)=> ({
    root: {
      opacity:'80%',
      width:'auto',
      marginLeft:'5%',
      marginRight:'5%',
      height:'auto',
    }
  }))(TableContainer)
  

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
        this.setState({Product_Data : arrayCopy});
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
        this.setState({Product_Data : arrayCopy});
      }
      
      render() {
        const { Product_Data } = this.state; 
        return (
            
            <div>
                <br></br>
                <br></br><br></br>
                <h2 style={{ color: "white", textAlignLast: "center" }}>
                ※ 면역력 증가 상품 (쿠팡 , 휴럼샾)
              </h2>
              <br></br>
              <div>
              <StyledTableContainer1 component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" width="20%">상품</StyledTableCell>
                        <StyledTableCell align="center" width="40%">제목</StyledTableCell>
                        <StyledTableCell align="right" width="26%">가격</StyledTableCell>
                        <StyledTableCell>  
                          <Button color="secondary"onClick={()=>this.sortBy_ASC('price')}>▲
                          </Button>
                          <Button color="secondary"onClick={()=>this.sortBy_DESC('price')}>▼
                          </Button>
                        </StyledTableCell>
                        
                        <StyledTableCell align="center" width="23%">구매</StyledTableCell>
                    </TableRow>
                    </TableHead>
                </Table>
                </StyledTableContainer1>
                
              </div>
                <StyledTableContainer2 component={Paper}>
                <Table>
                    
                    <TableBody>
                        
                        {Product_Data.map(post=> {
                            return <Product_option src ={post.src} title={post.title} price={post.price} a={post.a}/>
                        })
                    }
                    
                    </TableBody>
                </Table>
                </StyledTableContainer2>
                
            </div>
           
        );
    }
}

export default Product
