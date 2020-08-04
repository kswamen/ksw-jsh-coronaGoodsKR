import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Product_option extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell width="20%" align="center"><img src={this.props.src} width="80px" height="80px"/></TableCell>
                <TableCell width="40%" align="center">{this.props.title}</TableCell>
                <TableCell width="25%" align="center">{this.props.price}</TableCell>
                <TableCell width="15%" align="center"><a href={this.props.a}>구매</a></TableCell>
            </TableRow>
        )
    }
}

export default Product_option;