import { element } from 'prop-types';
import React, { Component } from 'react';

class AddStudentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { firstName: '', lastName: '', email: '', imageUrl: '', gpa: 2.0, campusId: 1 };
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.postStudent(this.state);
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						First name:
						<input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
					</label>
					<label>
						Last name:
						<input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastname} />
					</label>
					<label>
						Email:
						<input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
					</label>

					<label>
						imageUrl:
						<input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl} />
					</label>

					<label>
						GPA {this.state.gpa}:
						<input
							type="range"
							min="0.0"
							max="4.0"
							name="gpa"
							step=".01"
							onChange={this.handleChange}
							value={this.state.gpa}
						/>
					</label>
					<label>
						Select Campus:
						<select name="campusId" onChange={this.handleChange}>
							{this.props.avaliableCampuses !== undefined ? (
								this.props.avaliableCampuses.map((element) => {
									return (
										<option key={element.name + element.id} value={element.id}>
											{element.name}
										</option>
									);
								})
							) : (
								<option value={-1}>No Campus</option>
							)}
						</select>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
export default AddStudentForm;
