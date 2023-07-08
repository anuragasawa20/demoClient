import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
    const [userType, setUserType] = useState('admin');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here based on userType, username, and password
        console.log('User Type:', userType);
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form className="login-form" onSubmit={handleFormSubmit}>
                <div className="login-option">
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="admin"
                            checked={userType === 'admin'}
                            onChange={handleUserTypeChange}
                            style={{
                                margin: "2px"
                            }}
                        />
                        Admin
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="student"
                            checked={userType === 'student'}
                            onChange={handleUserTypeChange}
                            style={{
                                margin: "3px"
                            }}
                        />
                        Student
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <input type="submit" value="Login" className="submit-button" />
            </form>
        </div>
    );
};

export default Login;
