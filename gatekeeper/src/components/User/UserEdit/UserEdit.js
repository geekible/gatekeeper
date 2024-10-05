import React, { useState } from "react";
import { Breadcrumb } from 'rsuite';
import axios from "axios";
import Cookies from 'js-cookie';

function UserEdit() {
    const [username, setUsername] = useState(''); 
    const [user, setUser] = useState(null);

    function handleUsernameSearch() {
        const url = 'http://localhost:8080/user/get-by-username?username=' + username;
        const token = Cookies.get('user');

        axios.get(url, {
            headers: { 
                'access_token': token
            }
        }).then(resp => {
            setUser(resp.data);
            console.log(resp.data);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>User Edit</Breadcrumb.Item>
            </Breadcrumb>
            <h1>User Edit</h1>

            <div class="input-group mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Username" 
                    aria-describedby="button-user-search"
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
                <button 
                    class="btn btn-outline-secondary" 
                    type="button" 
                    id="button-user-search"
                    onClick={handleUsernameSearch}>Search</button>
            </div>

            <div className="row">
                <p>{user.Username}</p>
                <label className="form-label" for="username">Username</label>
                <input id="username" className="form-control" value={user.Username}/>
            </div>
        </div>
    )
}

export default UserEdit;