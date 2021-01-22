import axios from 'axios';

// ACTION TYPES;
const GET_STUDENT = "GET_STUDENT";
const GET_CAMPUS = "GET_CAMPUS"

const initialState = {
  student: [],
  campus: []
}

// ACTION CREATORS;
const getStudent = payload => ({
  type: GET_STUDENT,
  payload

})

const getCampus = payload => ({
  type: GET_CAMPUS,
  payload
})

// THUNK CREATORS;
export const fetchStudent = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:8080/student/1`)
            dispatch (getStudent(response.data))
            console.log (response)
        } catch (error) {
            console.error(error)
        }
    }
}

export const fetchCampus = () => dispatch => {
  return axios
    .get ('http://localhost:8080/')
    .then(res => res.data)
    .then(campus => dispatch(getCampus(campus)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUS:
      return {...state, campus: action.payload}
    case GET_STUDENT:
      return {...state, student: action.payload}
    default:
      return state;
  }
}

export default reducer;
