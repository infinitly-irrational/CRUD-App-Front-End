import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_PLAYERS = "FETCH_ALL_PLAYERS";
const GET_STUDENT = "GET_STUDENT";
const GET_CAMPUS = "GET_CAMPUS"

const initialState = {
  student: [],
  campus: []
}

// ACTION CREATORS;
const getStudent = student => ({
  type: GET_STUDENT,
  student

})

const getCampus = campus => ({
  type: GET_CAMPUS,
  campus
})


const fetchAllPlayers = players => {
  return {
    type: FETCH_ALL_PLAYERS,
    payload: players
  }
}

// THUNK CREATORS;
export const fetchStudent = () => dispatch => {
  return axios
    .get (`http://localhost:8080/student/1`)
    .then(res => res.data)
    .then(student => dispatch(getStudent(student)))
    .catch(err => console.log(err))
}

export const fetchCampus = () => dispatch => {
  return axios
    .get ('')
    .then(res => res.data)
    .then(campus => dispatch(getCampus(campus)))
    .catch(err => console.log(err))
}

export const fetchAllPlayersThunk = () => dispatch => {
  return axios
    .get('http://localhost:8080')
    .then(res => res.data)
    .then(players => dispatch(fetchAllPlayers(players)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUS:
      return action.payload
    case GET_STUDENT:
      return action.payload
    case FETCH_ALL_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
