import axios from 'axios';

//Action Types;
const FETCH_ALL_CAMPUSES = 'FETCH_ALL_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';
const FETCH_CAMPUS = 'FETCH_CAMPUS';
//Action Creators;
const fetchAllCampuses = (campuses) => {
	return {
		type: FETCH_ALL_CAMPUSES,
		payload: campuses,
	};
};
const DeleteCampus = (campus) => {
	return {
		type: DELETE_CAMPUS,
		payload: campus,
	};
};
const PostCampus = (campus) => {
	return {
		type: POST_CAMPUS,
		payload: campus,
	};
};
const FetchCampus = (campus) => {
	return {
		type: FETCH_CAMPUS,
		payload: campus,
	};
};

//Thunk Creators;
export const fetchAllCampusesThunk = () => (dispatch) => {
	return axios
		.get('http://localhost:8080/api/campuses/')
		.then((res) => res.data)
		.then((campuses) => dispatch(fetchAllCampuses(campuses)))
		.catch((err) => console.log(err));
};
export const fetchCampusThunk = (id) => (dispatch) => {
	return axios
		.get(`http://localhost:8080/api/campuses/${id}`)
		.then((res) => res.data)
		.then((campus) => dispatch(FetchCampus(campus)))
		.catch((err) => console.log(err));
};
export const deleteCampusThunk = (id) => (dispatch) => {
	return axios
		.delete(`http://localhost:8080/api/campuses/${id}`)
		.then((res) => res.data)
		.then((campus) => dispatch(DeleteCampus(campus)))
		.catch((err) => console.log(err));
};
export const postCampusThunk = (body) => (dispatch) => {
	return axios
		.post('http://localhost:8080/api/campuses/', { body })
		.then((res) => res.data)
		.then((campus) => dispatch(PostCampus(campus)))
		.catch((err) => console.log(err));
};
//Reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case DELETE_CAMPUS:
			state.pop(action.payload);
			return state;
		case FETCH_ALL_CAMPUSES:
			return action.payload;
		case POST_CAMPUS:
			state.unshift(action.payload);
			return state;
		case FETCH_CAMPUS:
			return action.payload;
		default:
			return state;
	}
};
export default reducer;
