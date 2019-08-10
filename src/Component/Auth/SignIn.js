import React , {Component} from 'react';


class SignIn extends Component {
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
        console.log(this.state)
    }    


    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <h5>Sign In</h5>
            <div className="Input-Field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.onInputChange}/>
            </div>

            <div className="Input-Field">
                <label htmlFor="Password">Password</label>
                <input type="Password" id="password" onChange={this.onInputChange}/>
            </div>
            <button>Sign In</button>
        </form> 
        </div>
        )
    }
}

export default SignIn;