import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/AuthActions'

const SignedInLinks = (props) => {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><Link className="Link" to ='/BooksList'>Book List</Link></li>
                    <li><Link className="Link" to ='/Profile'>Profile</Link></li>
                    <li><Link className="Link" onClick={props.signOut} to='/'>Logout</Link></li>
                    <li><Link className="Link dropDownIcon" to="">&#9776;</Link></li>
                    <p className="left-navBar" >LOGO</p>
                </ul>
            </nav>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);