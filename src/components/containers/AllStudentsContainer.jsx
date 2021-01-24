import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk, deleteStudentThunk, postStudentThunk, fetchAllCampusesThunk } from '../../thunks';
import { AddStudentForm, AllStudentsView } from '../views';

// Smart container;
class AllStudentsContainer extends Component {
	componentDidMount() {
		this.props.fetchAllStudents();
		this.props.fetchAllCampuses();
	}

	render() {
		return (
			<div>
				<AddStudentForm postStudent={this.props.postStudent} avaliableCampuses={this.props.allCampuses} />
				<AllStudentsView allStudents={this.props.allStudents} deleteStudent={this.props.deleteStudent} />;
			</div>
		);
	}
}

// Map state to props;
const mapState = (state) => {
	return {
		allStudents: state.allStudents,
		allCampuses: state.allCampuses,
	};
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
	return {
		fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
		deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
		postStudent: (student) => dispatch(postStudentThunk(student)),
		fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
	};
};

// Type check props;
AllStudentsContainer.propTypes = {
	allStudents: PropTypes.array.isRequired,
	fetchAllStudents: PropTypes.func.isRequired,
	deleteStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(
	mapState,
	mapDispatch
)(AllStudentsContainer);
