import  React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/AuthActions';

import './SignUp.css'
class SignUp extends Component {
    state= {
        Email: '',
        Password: '',
        firstName:'',
        lastName: '',
        age: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }    

    
    render(){
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/BooksList' />
        return(
            <div className = "Container">
                <form onSubmit={this.onFormSubmit} className="SignUp_form">
                {authError ? <p className="Error_text">{authError}</p>: null}
                    <div className="SignUp_form_components">
                    <h5>SignUp</h5>
                    <div className="SignUp-Input-Field">
                        <label htmlFor="email">Email : </label>
                        <input type="email" id="Email" onChange={this.onInputChange}/>
                    </div>

                    <div className="SignUp-Input-Field">
                        <label htmlFor="Password">Password : </label>
                        <input type="Password" id="Password" onChange={this.onInputChange}/>
                    </div>

                    
                    <div className="SignUp-Input-Field">
                        <label htmlFor="text">First Name : </label>
                        <input type="text" id="firstName" onChange={this.onInputChange}/>
                    </div>

                    
                    <div className="SignUp-Input-Field">
                        <label htmlFor="text">Last Name : </label>
                        <input type="text" id="lastName" onChange={this.onInputChange}/>
                    </div>

                    <div className="SignUp-Input-Field">
                        <label htmlFor="text">age : </label>
                        <input type="number" id="age" onChange={this.onInputChange}/>
                    </div>
                    <button>SignUp</button>
                    <div>
                    </div>
                    </div>
                </form>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);