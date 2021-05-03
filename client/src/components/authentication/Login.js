import React, {useState} from 'react';
import Axios from 'axios';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    const login = () => {
        Axios.post('http://localhost:5000/login', {
            username: username,
            password: password,
        }).then((response) => {
           
            if(!response.data.auth){
                setLoginStatus(false);
            } else {
                console.log(response.data);
                localStorage.setItem("token", response.data.token)
                setLoginStatus(true);
            }
        });
    };

    const userAuthenticated = () => {
        Axios.get('http://localhost:5000/isUserAuth', {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
        });
    }

    return(
        <div className="login">
            <div className="login">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" placeholder="Username..." onChange={(e) => {setUsername(e.target.value);}}/>
                <label>Password</label>
                <input type="password" placeholder="Password..." onChange={(e) => {setPassword(e.target.value);}}/>
                <button onClick = {login}> Login </button>
            </div>
            {loginStatus &&
                <button onClick = {userAuthenticated}> Check if Authenticated </button>        
            }
        </div>
    );
}

export default Login