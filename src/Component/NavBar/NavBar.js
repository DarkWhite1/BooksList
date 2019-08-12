import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux';
import './NavBar.css'


const NavBar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
    <nav>
        <div className="Header">
                <ul>
                    { links }
                </ul>
        </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);