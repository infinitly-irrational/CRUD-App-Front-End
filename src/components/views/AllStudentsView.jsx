import React from 'react';


const AllStudentsView = (props) => {
	return (
		<div className="student">
			{/* An example of how each student will look can be changed*/}
			<table>
				<tr>
					<td>
						<img
							className="studentImg"
							src="https://images.generated.photos/PasmNYj9u6Xfag77ggwPkcBcqOGkBG1SZJ4B2_ybeAw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTY2MTVfMDY5/NTQ0OF8wNDI1Mzkx/LmpwZw.jpg"
							alt="student portrait"
						/>
					</td>
					<td>
						Turner, Timmy <br />
					</td>
					<td>
						Gpa: 2.7 <br />
					</td>
					<td>
						<a className="email" href="google.com">
							Hello@gmail.com
						</a>{' '}
						<br />
					</td>
					<td>
						<button className="a" onClick={console.log('Hello World')}>
							Remove Student
						</button>
					</td>
				</tr>

				<tr>
					<td>
						<img
							className="studentImg"
							src="https://images.generated.photos/PasmNYj9u6Xfag77ggwPkcBcqOGkBG1SZJ4B2_ybeAw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTY2MTVfMDY5/NTQ0OF8wNDI1Mzkx/LmpwZw.jpg"
							alt="student portrait"
						/>
					</td>
					<td>
						Scott, Michael <br />
					</td>
					<td>
						Gpa: 4.0 <br />
					</td>
					<td>
						<a className="email" href="google.com">
							Michael@gmail.com
						</a>{' '}
						<br />
					</td>
					<td>
						<button className="a" onClick={console.log('Hello World')}>
							Remove Student
						</button>
					</td>
				</tr>
			</table>

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
										<a href={element.email}>{element.email}</a> <br />
									</td>
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

export default AllStudentsView;
