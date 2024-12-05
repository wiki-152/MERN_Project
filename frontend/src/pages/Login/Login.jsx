// Logic with Zustand for both User and Listing Owner
import React, { useState } from 'react';
import useUserStore from '../../stores/userStore';
import useListingOwnerStore from '../../stores/listingOwnerStore';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    // Zustand stores for customers and listing owners
    const {
        login: loginCustomer,
        loading: loadingCustomer,
        error: errorCustomer,
        clearError: clearCustomerError, // Add a method to clear errors
    } = useUserStore();

    const {
        login: loginSeller,
        loading: loadingSeller,
        error: errorSeller,
        clearError: clearSellerError, // Add a method to clear errors
    } = useListingOwnerStore();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    // Handle login as customer
    const handleCustomerLogin = (e) => {
        e.preventDefault();
        clearSellerError(); // Clear seller error before customer login
        loginCustomer(credentials);
    };

    // Handle login as seller
    const handleSellerLogin = (e) => {
        e.preventDefault();
        clearCustomerError(); // Clear customer error before seller login
        loginSeller(credentials);
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            
            {/* Display errors or loading states */}
            {loadingCustomer && <p>Loading Customer Login...</p>}
            {errorCustomer && <p className="error-message">{errorCustomer}</p>}
            {loadingSeller && <p>Loading Seller Login...</p>}
            {errorSeller && <p className="error-message">{errorSeller}</p>}

            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />

                {/* Two separate login buttons */}
                <button type="button" onClick={handleCustomerLogin} disabled={loadingCustomer}>
                    {loadingCustomer ? 'Logging In as Customer...' : 'Login as Customer'}
                </button>
                <button type="button" onClick={handleSellerLogin} disabled={loadingSeller}>
                    {loadingSeller ? 'Logging In as Seller...' : 'Login as Seller'}
                </button>
            </form>
        </div>
    );
};

export default Login;




// Logic with Zustand only for User
// import React, { useState } from 'react';
// import useUserStore from '../../stores/userStore';
// import './Login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: '',
//     });

//     const { login, loading, error } = useUserStore();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials({ ...credentials, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         login(credentials);
//     };

//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={credentials.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Logging In...' : 'Log In'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;





// Old Orignal 

// import React from 'react';
// import './Login.css';

// const Login = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Login logic
//     };

//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" required />
//                 <input type="password" placeholder="Password" required />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
