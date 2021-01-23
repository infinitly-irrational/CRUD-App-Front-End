import React from 'react';

const AllStudentsView = (props) => {
	return (
		<div className="AllStudents">
			{props.allStudents !== undefined ? (
				props.allStudents.map((element, index) => {
					return (
						<li key={index}>
							{element.lastName}, {element.firstName}
						</li>
					);
				})
			) : (
				<li>No students found!</li>
			)}
		</div>
	);
};

export default AllStudentsView;
