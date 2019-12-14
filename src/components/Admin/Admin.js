import React, {Component} from 'react';
import Axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '60%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto'
  },
  table: {
    minWidth: 500,
  },
  thead: {
    backgroundColor: 'rgb(255, 251, 247)',
  },
});

class Admin extends Component{

  state = {
    feedbackList: []
  }

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = ()=>{
    Axios.get(`/feedback`)
    .then(response=>{
      console.log('response:', response.data);
      this.setState({
        feedbackList: response.data
      })
    })
    .catch(error=>{
      alert(`something went wrong`);
      console.log('error in GET', error);
    })
  }

  render(){
    const { classes } = this.props;

    return(
      <>
        <div className="admin-div">
          <Paper className={classes.root}>
            <Table className={classes.table}> 
              <TableHead className={classes.thead}>
                <TableRow>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Comprehension</TableCell>
                <TableCell align="center">Support</TableCell>
                <TableCell align="center">Comments</TableCell>
                {/* <TableCell align="center">Flagged?</TableCell> */}
                <TableCell align="center">Delete?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.feedbackList.map((item, i)=>
                  <AdminItem item={item} i={i} getFeedback={this.getFeedback} />
                )}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Admin);