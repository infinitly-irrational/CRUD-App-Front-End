import React from 'react';
import {Link} from 'react-router-dom';
import {SingleStudent} from './SingleStudentView'

const AllStudentsView = (props) => {
	return (
		<div className="student">
			<table className="studentTable">
				<tbody>
					{props.allStudents !== undefined ? (
						props.allStudents.map((element, index) => {
							return (
								<tr key={element.firstName + element.lastName}>
									<td>
										<img className="studentImg" src={element.imageUrl} alt="student portrait" />
									</td>
									<td>
										<Link to= "api/student/id" component = {SingleStudent (props.allStudents, index)}>
											{element.lastName}, {element.firstName}
										</Link>
									</td>
									<td>Gpa: {element.gpa}</td>
									<td>
										<a className="email" href={element.email}>
											{element.email}
										</a>{' '}
										<br />
									</td>
									<td>University: {universityName(props.allCampuses, element.campusId)}</td>
									<td>
										<button className={element.id} onClick={() => props.deleteStudent(element.id)}>
											Remove student
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>No Students found</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
export const universityName = (allCampuses, campusId) => {
	let foundCampus = allCampuses.find((campus) => campus.id === campusId);
	return foundCampus !== undefined ? foundCampus.name : 'No campus found';
};
export default AllStudentsView;
