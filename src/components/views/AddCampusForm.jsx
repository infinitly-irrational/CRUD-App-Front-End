import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCampusThunk } from '../../thunks';
import axios from 'axios';

class AddCampusForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			imageUrl: '',
			address: '',
			description: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.postCampus(this.state);
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Campus Name:
						<input type="text" name="name" onChange={this.handleChange} value={this.state.firstname} />
					</label>
					<label>
						Image:
						<input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.lastname} />
					</label>
					<label>
						Address:
						<input type="text" name="address" onChange={this.handleChange} value={this.state.email} />
					</label>
					<label>
						Description
						<input
							type="textarea"
							name="description"
							onChange={this.handleChange}
							value={this.state.description}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
// Type check props;
/* AllStudentsContainer.propTypes = {
    allPlayers: PropTypes.array.isRequired,
    fetchStudent: PropTypes.func.isRequired
  } */

// Export our store-connected container by default;
export default AddCampusForm;
