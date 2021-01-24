import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStudent } from '../../thunks';
import { postStudentThunk } from '../../thunks'
import axios from 'axios'

class AddStudentsContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            firstname: "",
            lastename: "",
            email: "",
            imageUrl: "",
            gpa: 0,
            campusId: "",
        }
    }

    async componentDidMount() {
        await this.props.fetchStudent();
      }


      handleSubmit = async (event) => {
          event.preventDefault()
          this.props.postStudentThunk(this.state)
      }

      handleChange = (event) => {this.setState({[event.target.name]: event.target.value})}

    
    render () { return (<div> 
        <form onSubmit={this.handleSubmit}>
            <label>
                First Name: 
                <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstname}/>
            </label>
            <label>
                Last Name: 
                <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastname}/>
            </label>
            <label>
                Email: 
                <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
            </label>
            <label>
                Image: 
                <input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl}/>
            </label>
            <label>
                GPA: 
                <input type="number" name="gpa" onChange={this.handleChange} value={this.state.gpa}/>
            </label>
            <label>
                Campus ID: 
                <input type="number" name="campusId" onChange={this.handleChange} value={this.state.campusId}/>
            </label>
            <input type="submit" value="Submit"/>
            </form>
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
  export default connect(mapState, mapDispatch)(AddStudentsContainer);