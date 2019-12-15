import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';

// For material-ui
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AdminItem extends Component{

  state = {
    open: false,
    confirm: false,
    id: '',
    checked: false,
    incomingCheck: false
  }

  // Run only on first mount
  componentDidMount(){
    this.setChecks();
  }

  // Run every time component updates
  componentDidUpdate(){
    this.deleteRow();
    this.updateFlag();
  }

  // DELETE route to remove row from database if YES clicked in confirmation dialog
  deleteRow = () => {
    if(this.state.confirm === true){
      let id = this.state.id;
      Axios.delete(`/feedback/delete/${id}`)
    .then(response=>{
      this.props.getFeedback();
    })
    .catch(error=>{
      alert(`error deleting data`);
      console.log('error in DELETE', error);
    })
    this.setConfirmToFalse();
    }
  }

  // Store database ID, store checkbox boolean
  handleChange = (event, id) => {
    this.setState({
      incomingCheck: event.target.checked,
      id: id
    });
  };

  // Store database ID, open confirmation dialog
  handleClickOpen = (id) => {
    this.setState({
      open: true,
      id: id
    });
  };

  // Close confirmation dialog on NO click
  handleCloseNo = () => {
    this.setState({ open: false });
  };

  // Close confirmation dialog, set confirm to true if YES is clicked
  handleCloseYes = () => {
    this.setState({
      open: false,
      confirm: true
    });
  };

  // On mount set checked status based on database FLAGGED column
  setChecks = () => {
    if(this.props.item.flagged === true){
      this.setState({
        checked: true,
        incomingCheck: true
      })
    }
  }

  setConfirmToFalse = () => {
    this.setState({
      confirm: false
    });
  }

  // PUT route to update database FLAGGED status
  updateFlag = () => {
    // Solution to async problem: have a set value and an incoming value compare
    if(this.state.checked !== this.state.incomingCheck){
      let id = this.state.id;
      let flag = this.state.incomingCheck;
      Axios.put(`/feedback/flag/${id}`, {flag})
      .then(response=>{
        this.props.getFeedback();
      })
      .catch(error=>{
        alert(`error updating flag`);
        console.log('error in PUT', error);
      })
      // Update set value to value that came in so next click the incoming
      // value will not match the set value
      this.setState({checked: this.state.incomingCheck});
    }
  }

  render(){
    // For material-ui
    const { classes } = this.props;

    return(
      <>
        <TableRow className={this.props.item.flagged ? 'flag' : 'no-flag'}>
          <TableCell align="center">{this.props.item.feeling}</TableCell>
          <TableCell align="center">{this.props.item.understanding}</TableCell>
          <TableCell align="center">{this.props.item.support}</TableCell>
          <TableCell align="center">{this.props.item.comments}</TableCell>
          <TableCell align="center">
            <Checkbox
              checked={this.state.checked}
              onChange={(event)=>this.handleChange(event, this.props.item.id)}
              value="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </TableCell>
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