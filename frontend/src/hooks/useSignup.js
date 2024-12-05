// Logic with Hooks
import { useState } from 'react';
import axios from 'axios';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (formData) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post('http://localhost:2469/api/user/register', formData);
            setLoading(false);
            return response.data; // Return user data on success
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;
