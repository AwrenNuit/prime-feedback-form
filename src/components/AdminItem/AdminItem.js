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

  componentDidMount(){
    this.setChecks();
  }

  componentDidUpdate(){
    this.deleteRow();
    this.updateFlag();
  }

  deleteRow = ()=>{
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
    this.setState({
      confirm: false
    });
    }
  }

  handleChange = (event, id) => {
    this.setState({
      incomingCheck: event.target.checked,
      id: id
    });
  };

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

  setChecks = () =>{
    if(this.props.item.flagged === true){
      this.setState({
        checked: true,
        incomingCheck: true
      })
    }
  }

  updateFlag = () => {
    if(this.state.checked !== this.state.incomingCheck){
      let id = this.state.id;
      let flag = this.state.incomingCheck;
      console.log('checked:', flag);
      Axios.put(`/feedback/flag/${id}`, {flag})
      .then(response=>{
        console.log('response:', response.data);
        this.props.getFeedback();
      })
      .catch(error=>{
        alert(`error updating flag`);
        console.log('error in PUT', error);
      })
      this.setState({checked: this.state.incomingCheck});
    }
  }

  render(){
    const { classes } = this.props;


    return(
      <>
      {JSON.stringify(this.props.item.flagged)}
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