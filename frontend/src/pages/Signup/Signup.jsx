import React from 'react';
import './Signup.css';

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Signup logic
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
