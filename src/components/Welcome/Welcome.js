import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Welcome extends Component{
  nextPage = ()=>{
    this.props.history.push(`/feeling`);
  }

  render(){
    const { classes } = this.props;
    return(
      <>
        <h2>Take a moment to pause and think about how the day went.</h2>
        <p>When you're ready to continue press NEXT.</p>
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
          NEXT
        </Button>
      </>
    )
  }
}

export default withStyles(styles)(Welcome);