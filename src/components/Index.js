import React, {Component}  from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { readTasks } from '../actions';



class Index extends Component {
  componentDidMount() {
    this.props.readTasks()
  }
  renderTasks(){
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/task/${event.id}`}>
            {event.title}
          </Link>
        </TableCell>
      </TableRow>
    ))
  }



  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom:12
    }
    return (

      <React.Fragment>
        <Fab color="primary" aria-label="add" href='/task/new' style={style}>
          <AddIcon />
        </Fab>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTasks()}
          </TableBody>
        </Table>


      </React.Fragment>
    )
  }
}



const mapStateToProps = state => ({ events :state.tasks})
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readTasks })

export default connect(mapStateToProps, mapDispatchToProps)(Index)

