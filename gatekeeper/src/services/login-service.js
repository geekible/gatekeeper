import axios from "axios";

export function doLogin(username, password) {
        axios.post('http://localhost:8080/user/login/', {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        });
}