import React, {useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import './Login.css';

const initialCredentials = {
    username: '',
    password: ''
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialCredentials);
    const history = useHistory();

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const login = (event) => {
        event.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(response => {
            console.log(response)
            localStorage.setItem('loginToken', response.data.payload);
            history.push("/friends");
        })
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>
                    Username
                    <input 
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button>Log in</button>
            </form>
        </div>
    );
}
 
export default Login;