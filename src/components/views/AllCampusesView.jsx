import React from 'react';

const AllCampusesView = (props) => {
	return (
		<div className="All-Campuses">
			<ul>
				{props.allCampuses !== undefined ? (
					props.allCampuses.map((element, index) => {
						return <li key={index}>{element.name}</li>;
					})
				) : (
					<li>No campuses found!</li>
				)}
			</ul>
		</div>
	);
};

export default AllCampusesView;
