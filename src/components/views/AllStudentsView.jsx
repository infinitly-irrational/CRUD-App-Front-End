import React from 'react';
import {deleteStudentThunk} from '../../store/utilities/StudentThunks';

const AllStudentsView = (props) => {
	return (
		<div className="student">
			{/* An example of how each student will look can definetly be changed*/}
						<table>
							<tr>
								<td>
							<img className="studentImg" src='https://images.generated.photos/PasmNYj9u6Xfag77ggwPkcBcqOGkBG1SZJ4B2_ybeAw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTY2MTVfMDY5/NTQ0OF8wNDI1Mzkx/LmpwZw.jpg'
							alt="student portrait"/> 
							<button className='a' onclick= {console.log("Hello World")}>X</button>
							</td>
							<td>
							Turner, Timmy <br/>
							Gpa: 2.7 <br/>
							<a className="email" href='google.com'>Hello@gmail.com</a> <br/>
							</td>
							</tr>

							<tr>
								<td>
							<img className="studentImg" src='https://images.generated.photos/PasmNYj9u6Xfag77ggwPkcBcqOGkBG1SZJ4B2_ybeAw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTY2MTVfMDY5/NTQ0OF8wNDI1Mzkx/LmpwZw.jpg'
							alt="student portrait"/> 
							<button className='a' onclick= {console.log("Hello World")}>X</button>
							</td>
							<td>
							Scott, Michael <br/>
							Gpa: 4.0 <br/>
							<a className="email" href='google.com'>Michael@gmail.com</a> <br/>
							</td>
							</tr>
						</table>


			<table className = "studentTable">
				<tbody>
					{props.allStudents !== undefined ? (
						props.allStudents.map((element, index) => {
							return (
									<tr>
										<td>
											<img className = "studentImg" src={element.imageUrl} alt="student portrait"/> 
											<button className={element.id} onclick= {deleteStudentThunk(element.id)}>X</button><br/>
										</td>
										<td>
											{element.lastName}, {element.firstName} <br/>
											Gpa: {element.gpa}
											<a href={element.email}>{element.email}</a> <br/>
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
