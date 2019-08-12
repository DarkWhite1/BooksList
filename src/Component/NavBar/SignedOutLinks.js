import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/AuthActions';

class SignedOutLinks extends Component{
    state= {
        email:'',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }    


    render() {
        const {authError} = this.props;
        return (
            <div className="Header">
            <nav>
                <div className="signInNav">
            <form onSubmit={this.onFormSubmit} className="signinForm">
            <div className="Input-Field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.onInputChange}/>
            </div>

            <div className="Input-Field">
                <label htmlFor="Password">Password : </label>
                <input type="Password" id="password" onChange={this.onInputChange}/>
            </div>
            <button className="Input-Field">Sign In</button>
            <div>
                {authError ? <p>{authError}</p> : null}
            </div>
        </form> 
        </div>
                    <p className="left-navBar" >LOGO</p>
            </nav>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks)
