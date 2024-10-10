import React, { useState } from "react";
import { Breadcrumb } from 'rsuite';
import axios from "axios";
import Cookies from 'js-cookie';

function UserEdit() {
    const [usernameSearch, setUsernameSearch] = useState(''); 

    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');

    function handleUsernameSearch() {
        const url = 'http://localhost:8080/user/get-by-username?username=' + usernameSearch;
        const token = Cookies.get('user');

        axios.get(url, {
            headers: { 
                'access_token': token
            }
        }).then(resp => {
            setUsername(resp.data.Username);
            setEmailAddress(resp.data.EmailAddress);
            setUserId(resp.data.UserId);
            setFirstName(resp.data.FirstName);
            setSurname(resp.data.Surname);
        }).catch(err => console.log(err));
    }

    function handleUpdateUser() {
        const url = 'http://localhost:8080/user/update-user';
        const token = Cookies.get('user');

        axios.put(url, {
            UserId: userId,
            Username: username,
            EmailAddress: emailAddress,
            FirstName: firstName,
            Surname: surname
        }, {
            headers: { 'access_token': token }
        }).then(res => {

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

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <div class="input-group mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Username" 
                        aria-describedby="button-user-search"
                        value={usernameSearch}
                        onChange={e => setUsernameSearch(e.target.value)}/>
                    <button 
                        class="btn btn-outline-secondary" 
                        type="button" 
                        id="button-user-search"
                        onClick={handleUsernameSearch}>Search</button>
                </div>
            </div>

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label" for="username">Username</label>
                        <input id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label className="form-label" for="email-address">Email</label>
                        <input id="email-address" type="email" className="form-control" value={emailAddress} onChange={e => setEmailAddress(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <label className="form-label" for="firstname">First Name</label>
                        <input id="first-name" type="text" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label className="form-label" for="surname">Surname</label>
                        <input id="surname" type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)}/>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <button className="btn btn-success float-end" onClick={handleUpdateUser}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserEdit;