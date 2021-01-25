import React, {Component} from 'react'

export const SingleStudent = (props, index) => {

    return <div className="student">
        <table>
          <tr>
            <td>
              <img className="studentImg" src={props.allStudents[index].imageUrl} alt="student portrait" />
            </td>
            <td>
                {props.allStudents[index].firstName}, {props.allStudents[index].lastName}
            </td>
            <td>Gpa: {props.allStudents[index].gpa}</td>
            <td>
              <a className="email" href={props.allStudents[index].email}>
                {props.allStudents[index].email}
              </a> <br />
            </td>
            <td>
              University:{" "}
              {(props.allCampuses[index], props.campusId)}
            </td>
            <td>
              <button className={props.id} onClick={() => props.deleteStudent(props.id)}>
                Remove student
              </button>
            </td>
          </tr>
        </table>
      </div>;
}

export default SingleStudent