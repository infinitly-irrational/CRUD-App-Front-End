import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk, postCampusThunk } from '../../thunks';
import { AllCampusesView, AddCampusForm } from '../views';

// Smart container;
class AllCampusesContainer extends Component {
	componentDidMount() {
		this.props.fetchAllCampuses();
	}

	render() {
		return (
			<div>
				<AddCampusForm postCampus={this.props.postCampus} />
				<AllCampusesView allCampuses={this.props.allCampuses} />
			</div>
		);
	}
}

// Map state to props;
const mapState = (state) => {
	return {
		allCampuses: state.allCampuses,
	};
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
	return {
		fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
		postCampus: (campus) => dispatch(postCampusThunk(campus)),
	};
};

// Type check props;
AllCampusesContainer.propTypes = {
	allCampuses: PropTypes.array.isRequired,
	fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(
	mapState,
	mapDispatch
)(AllCampusesContainer);
