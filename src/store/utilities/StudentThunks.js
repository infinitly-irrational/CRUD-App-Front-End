import axios from 'axios';

//Action Types;
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';
const POST_STUDENT = 'POST_STUDENT';
const FETCH_STUDENT = 'FETCH_STUDENT';
//Action Creators;
const fetchAllStudents = (students) => {
	return {
		type: FETCH_ALL_STUDENTS,
		payload: students,
	};
};
const DeleteStudent = (student) => {
	return {
		type: DELETE_STUDENT,
		payload: student,
	};
};
const PostStudent = (student) => {
	return {
		type: POST_STUDENT,
		payload: student,
	};
};
const FetchStudent = (student) => {
	return {
		type: FETCH_STUDENT,
		payload: student,
	};
};

//Thunk Creators;
export const fetchAllStudentsThunk = () => (dispatch) => {
	return axios
		.get('http://localhost:8080/api/students/')
		.then((res) => res.data)
		.then((students) => dispatch(fetchAllStudents(students)))
		.catch((err) => console.log(err));
};
export const fetchStudentThunk = (id) => (dispatch) => {
	return axios
		.get(`http://localhost:8080/api/students/${id}`)
		.then((res) => res.data)
		.then((student) => dispatch(FetchStudent(student)))
		.catch((err) => console.log(err));
};
export const deleteStudentThunk = (id) => (dispatch) => {
	return axios
		.delete(`http://localhost:8080/api/students/${id}`)
		.then((res) => res.data)
		.then((student) => dispatch(DeleteStudent(student)))
		.catch((err) => console.log(err));
};
export const postStudentThunk = (body) => (dispatch) => {
	return axios
		.post('http://localhost:8080/api/students/', { body })
		.then((res) => res.data)
		.then((student) => dispatch(PostStudent(student)))
		.catch((err) => console.log(err));
};
//Reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case DELETE_STUDENT:
			return state.filter((element) => element.id !== action.payload.id);
		case FETCH_ALL_STUDENTS:
			return action.payload;
		case POST_STUDENT:
			state.unshift(action.payload);
			return state;
		case FETCH_STUDENT:
			return action.payload;
		default:
			return state;
	}
};
export default reducer;
