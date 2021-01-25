import React from 'react';
import { deleteCampusThunk } from '../../store/utilities/CampusThunk';
import { Link } from 'react-router-dom'
import { SingleCampus} from './SingleCampusView'

const AllCampusesView = (props) => {
	return (
		<div className="All-Campuses">
				{props.allCampuses !== undefined ? (
					props.allCampuses.map((element, index) => {
						return (
							<table>
							<li key={element.name + element.id}>
								<div className="Campus">
									<tr>
									<img className="campusImg" src={element.imageUrl} alt="campusPicture" />
									<button className={element.id} onclick={deleteCampusThunk(element.id)}>
										X
									</button>{' '}
									</tr>
									<br />
								<tr>
									<td>
									<Link to=  "api/campus/id" component = {SingleCampus (props.allCampuses, index)}>
									Campus: {element.name} <br />
									</Link>
									Address: {element.address}
									<br />
									<p>{element.description}</p>
									</td>
								</tr>
							</div>
						</li>
					</table>
						);
					})
				) : (
					<li>No campuses found!</li>
				)}
		</div>
	);
};

export default AllCampusesView;
