import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import UserInfo from './ProfileUserDetail';

class Profile extends Component {
    render() {
        const {auth, profile} = this.props;
        console.log(this.props)
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div >
                <UserInfo profile={profile} key={auth.uid}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
    }
}
export default connect(mapStateToProps)(Profile);