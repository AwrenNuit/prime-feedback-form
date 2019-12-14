import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

class AdminItem extends Component{

  deleteRow = (id)=>{
    Axios.delete(`/feedback/${id}`)
    .then(response=>{
      this.props.getFeedback();
    })
    .catch(error=>{
      alert(`error deleting data`);
      console.log('error in DELETE', error);
    })
  }
  render(){
    return(
      <>
        <TableRow key={this.props.i}>
          <TableCell align="center">{this.props.item.feeling}</TableCell>
          <TableCell align="center">{this.props.item.understanding}</TableCell>
          <TableCell align="center">{this.props.item.support}</TableCell>
          <TableCell align="center">{this.props.item.comments}</TableCell>
          {/* <TableCell align="center">{this.props.item.flagged}</TableCell> */}
          <TableCell align="center"><button onClick={()=>this.deleteRow(this.props.item.id)}>Delete</button></TableCell>
        </TableRow>
      </>
    )
  }
}

export default AdminItem;