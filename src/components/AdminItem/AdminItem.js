import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  row: {
    backgroundColor: 'rgb(255, 251, 247)',
  },
});

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
    const { classes } = this.props;

    return(
      <>
        <TableRow className={classes.row}>
          <TableCell align="center">{this.props.item.feeling}</TableCell>
          <TableCell align="center">{this.props.item.understanding}</TableCell>
          <TableCell align="center">{this.props.item.support}</TableCell>
          <TableCell align="center">{this.props.item.comments}</TableCell>
          {/* <TableCell align="center">{this.props.item.flagged}</TableCell> */}
          <TableCell align="center">
            <Button variant="contained" color="secondary" size="small" className={classes.button} onClick={()=>this.deleteRow(this.props.item.id)}>
            DELETE
            </Button>
          </TableCell>
        </TableRow>
      </>
    )
  }
}

export default withStyles(styles)(AdminItem);