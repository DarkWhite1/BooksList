import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><Link className="Link" to ='/Booklist'>Book List</Link></li>
                    <li><Link className="Link" to ='/Profile'>Profile</Link></li>
                    <li><Link className="Link" to ='/'>Login</Link></li>
                    <li><Link className="Link" to ='/SignUp'>SignUp</Link></li>
                    <li><Link className="Link" to ='/Logout'>Logout</Link></li>
                    <li><Link className="Link dropDownIcon" to="">&#9776;</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;