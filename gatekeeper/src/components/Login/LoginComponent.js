import React, {Component}  from "react";
import { doLogin } from "../../services/login-service";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            Password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        // button handlers
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ Username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ Password: event.target.value });
    }

    handleLoginClick() {
        let response = doLogin(this.state.Username, this.state.Password);
        console.log(response);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input id="username" className="form-control" value={this.state.Username} onChange={this.handleUsernameChange}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                id="password" 
                                className="form-control" 
                                value={this.state.Password} 
                                onChange={this.handlePasswordChange}
                                type="password"/>
                        </div>

                        <button 
                            className="btn btn-success float-end"
                            onClick={this.handleLoginClick}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;