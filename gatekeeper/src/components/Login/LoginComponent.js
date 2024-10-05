import React, { useState }  from "react";
import './LoginComponent.css';

const LoginComponent = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin({ username, password })
    }

    return (
            <div id="main-wrapper" class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="card border-0">
                            <div class="card-body p-0">
                                <div class="row no-gutters">
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="mb-5">
                                                <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                            </div>

                                            <h6 class="h5 mb-0">Welcome back!</h6>
                                            <p class="text-muted mt-2 mb-3">Enter your usernameand password to access admin panel.</p>

                                            <form onSubmit={handleLogin}>
                                                <div class="form-group mb-3">
                                                    <label for="username">Username</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                                                </div>
                                                <div class="form-group mb-2">
                                                    <label for="password">Password</label>
                                                    <input type="password" class="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="submit" class="btn btn-theme float-end">Login</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 d-none d-lg-inline-block">
                                        <div class="account-block rounded-right">
                                            <div class="overlay rounded-right"></div>
                                            <div class="account-testimonial">
                                                <h4 class="text-white mb-4">GateKeeper</h4>
                                                <p class="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                                <p>- Admin User</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LoginComponent;