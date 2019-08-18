import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
class BooksList extends Component {

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <h1>This is BooksList Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(BooksList);