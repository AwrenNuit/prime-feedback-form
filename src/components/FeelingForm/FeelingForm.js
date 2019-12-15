import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class FeelingForm extends Component{
  state = {
    open: false,
    feeling: ''
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event)=>{
    this.setState({feeling: event.target.value});
  }

  lastPage = ()=>{
    this.props.dispatch({type: `UNDO_LAST`});
    this.props.history.push(`/`);
  }

  nextPage = ()=>{
    if(this.state.feeling){
      this.props.dispatch({type: `SEND_FEEDBACK`, payload: this.state.feeling});
      this.props.history.push(`/understanding`);
    }
    else{
      this.handleClickOpen();
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <>
        <div className="main-div">
          <h2 className="headings">How are you feeling today?</h2>
          <p><span className="left-scale">Stressed</span> <span>Calm</span></p>
          <div className="radio-div">
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="feeling" id="1" value="1" checked={this.state.feeling === '1'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="feeling" id="2" value="2" checked={this.state.feeling === '2'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="feeling" id="3" value="3" checked={this.state.feeling === '3'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="feeling" id="4" value="4" checked={this.state.feeling === '4'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="feeling" id="5" value="5" checked={this.state.feeling === '5'} onChange={(event)=>this.handleChange(event)} />
          </div>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.lastPage}>
            BACK
          </Button>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
            NEXT
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"You forgot to select a value!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please choose how you're feeling today before continuing.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} variant="outlined" color="secondary" autoFocus>
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(connect()(FeelingForm));