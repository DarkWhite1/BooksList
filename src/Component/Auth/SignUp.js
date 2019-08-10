import  React, {Component} from 'react';

class SignUp extends Component {
    state= {
        Email: '',
        Password: '',
        FirstName:'',
        LastName: ''
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
            <div className = "Container">
                <form onSubmit={this.onFormSubmit}>
                    <h5>SignUp</h5>
                    <div className="Input-Field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="Email" onChange={this.onInputChange}/>
                    </div>

                    <div className="Input-Field">
                        <label htmlFor="Password">Password</label>
                        <input type="Password" id="Password" onChange={this.onInputChange}/>
                    </div>

                    
                    <div className="Input-Field">
                        <label htmlFor="text">FirstName</label>
                        <input type="text" id="FirstName" onChange={this.onInputChange}/>
                    </div>

                    
                    <div className="Input-Field">
                        <label htmlFor="text">LastName</label>
                        <input type="text" id="LastName" onChange={this.onInputChange}/>
                    </div>
                    <button>SignUp</button>
                </form>
            </div>  
        )
    }
}

export default SignUp;