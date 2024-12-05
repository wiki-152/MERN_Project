import React from 'react';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Login logic
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
