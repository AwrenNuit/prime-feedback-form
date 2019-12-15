import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  row: {
    backgroundColor: 'rgb(255, 251, 247)',
  },
});

class AdminItem extends Component{

  state = {
    open: false,
    confirm: false,
    id: ''
  }

  componentDidUpdate(){
    this.deleteRow();
  }

  deleteRow = ()=>{
    if(this.state.confirm === true){
      let id = this.state.id;
      Axios.delete(`/feedback/${id}`)
    .then(response=>{
      this.props.getFeedback();
    })
    .catch(error=>{
      alert(`error deleting data`);
      console.log('error in DELETE', error);
    })
    this.setState({
      confirm: false
    });
    }
  }

  handleClickOpen = (id) => {
    this.setState({
      open: true,
      id: id
    });
  };

  handleCloseNo = () => {
    this.setState({ open: false });
  };

  handleCloseYes = () => {
    this.setState({
      open: false,
      confirm: true
    });
  };

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
            <Button variant="contained" color="secondary" size="small" className={classes.button} onClick={()=>this.handleClickOpen(this.props.item.id)}>
            DELETE
            </Button>
          </TableCell>
        </TableRow>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">{"Permanently delete this row?"}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleCloseNo} color="default">
              No
            </Button>
            <Button onClick={this.handleCloseYes} color="secondary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default withStyles(styles)(AdminItem);