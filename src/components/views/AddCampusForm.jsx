import React, { Component } from 'react';

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
						<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
					</label>
					<label>
						Image:
						<input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl} />
					</label>
					<label>
						Address:
						<input type="text" name="address" onChange={this.handleChange} value={this.state.address} />
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
export default AddCampusForm;
