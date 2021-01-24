import React from 'react';
import {deleteCampusThunk} from '../../store/utilities/CampusThunk';

const AllCampusesView = (props) => {
	return (
		<div className="All-Campuses">
			<ul>
				{props.allCampuses !== undefined ? (
					props.allCampuses.map((element, index) => {
						return <li key={index}>
							<div className="Campus">
								<img className='campusImg' src={element.imageUrl} alt="campusPicture"/> 
								<button className={element.id} onclick= {deleteCampusThunk(element.id)}>X</button> <br/>
								Campus: {element.name} <br/>
								Address: {element.address}<br/>
								<p>{element.description}</p>
								
							</div>
						</li>;
					})
				) : (
					<li>No campuses found!</li>
				)}
			</ul>
		</div>
	);
};

export default AllCampusesView;
