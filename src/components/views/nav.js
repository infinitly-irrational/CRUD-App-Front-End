import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    

    return (
        <div className = "nav-bar">
            <h2>Campus/Student Lookup</h2>
            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/students">
                    <li>Students</li>
                </Link>

                <Link to="/campuses">
                    <li>Campuses</li>
                </Link>

            </ul>
        </div>
    )
}

export default Nav;