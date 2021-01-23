import AllStudentsView from '../views/AllStudentsView';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStudent } from '../../thunks';

class AllStudentsContainer extends Component {

    async componentDidMount() {
        await this.props.fetchStudent();
      }


      handleSubmit = () => {}

    
    render () { return (<div>
        <AllStudentsView AllStudents = {this.props.getStudents}/> 
        </div>) }
}

const mapState = state => {
    return {
      getStudents: state.student
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
      fetchStudent: () => dispatch (fetchStudent())
    }
  }
  
  // Type check props;
  /* AllStudentsContainer.propTypes = {
    allPlayers: PropTypes.array.isRequired,
    fetchStudent: PropTypes.func.isRequired
  } */
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(AllStudentsContainer);