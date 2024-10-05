import axios from "axios";

export async function doLogin(username, password) {
    await axios.post('http://localhost:8080/user/login/', 
        { username: username, password: password },
        { headers: { 'Content-Type': 'application/json' }}
    );
}