import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCampusThunk } from '../../thunks';
import axios from 'axios'

class AddCampusContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            campusName: "",
            imageUrl: "",
            address: "",
            description: "",
        }
    }

    async componentDidMount() {
        await this.props.fetchCampus();
      }


      handleSubmit = async (event) => {
          event.preventDefault()
          const campus = await this.props.postCampusThunk(this.state)
      }

      handleChange = (event) => {this.setState({[event.target.name]: event.target.value})}

    
    render () { return (<div> 
        <form onSubmit={this.handleSubmit}>
            <label>
                Campus Name: 
                <input type="text" name="campusName" onChange={this.handleChange} value={this.state.firstname}/>
            </label>
            <label>
                Image: 
                <input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.lastname}/>
            </label>
            <label>
                Address: 
                <input type="text" name="adress" onChange={this.handleChange} value={this.state.email}/>
            </label>
            <label>
                Description 
                <input type="textarea" name="description" onChange={this.handleChange} value={this.state.imageUrl}/>
            </label>
            </form>
            </div>) }
}

const mapState = state => {
    return {
      postCampus: state.campus
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
        postCampusThunk: () => dispatch (postCampusThunk())
    }
  }
  
  // Type check props;
  /* AllStudentsContainer.propTypes = {
    allPlayers: PropTypes.array.isRequired,
    fetchStudent: PropTypes.func.isRequired
  } */
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(AddCampusContainer);