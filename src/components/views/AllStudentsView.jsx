import React from 'react';

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
										{element.lastName}, {element.firstName}
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
const universityName = (allCampuses, campusId) => {
	let foundCampus = allCampuses.find((campus) => campus.id === campusId);
	return foundCampus !== undefined ? foundCampus.name : 'No campus found';
};
export default AllStudentsView;
