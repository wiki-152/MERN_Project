// Logic with Zustand for both User and Listing Owner
import React, { useState } from 'react';
import useUserStore from '../../stores/userStore';
import useListingOwnerStore from '../../stores/listingOwnerStore';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // Zustand stores for customers and listing owners
    const {
        signup: signupCustomer,
        loading: loadingCustomer,
        error: errorCustomer,
        clearError: clearCustomerError, // Add a method to clear errors
    } = useUserStore();

    const {
        signup: signupSeller,
        loading: loadingSeller,
        error: errorSeller,
        clearError: clearSellerError, // Add a method to clear errors
    } = useListingOwnerStore();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle signup as customer
    const handleCustomerSignup = (e) => {
        e.preventDefault();
        clearSellerError(); // Clear seller error before customer signup
        signupCustomer(formData);
    };

    // Handle signup as seller
    const handleSellerSignup = (e) => {
        e.preventDefault();
        clearCustomerError(); // Clear customer error before seller signup
        signupSeller(formData);
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            
            {/* Display errors or loading states */}
            {loadingCustomer && <p>Loading Customer Signup...</p>}
            {errorCustomer && <p className="error-message">{errorCustomer}</p>}
            {loadingSeller && <p>Loading Seller Signup...</p>}
            {errorSeller && <p className="error-message">{errorSeller}</p>}

            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {/* Two separate signup buttons */}
                <button type="button" onClick={handleCustomerSignup} disabled={loadingCustomer}>
                    {loadingCustomer ? 'Signing Up as Customer...' : 'Signup as Customer'}
                </button>
                <button type="button" onClick={handleSellerSignup} disabled={loadingSeller}>
                    {loadingSeller ? 'Signing Up as Seller...' : 'Signup as Seller'}
                </button>
            </form>
        </div>
    );
};

export default Signup;


// // Logic with Zustand
// import React, { useState } from 'react';
// import useUserStore from '../../stores/userStore';
// import './Signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });

//     const { signup, loading, error } = useUserStore();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         signup(formData);
//     };

//     return (
//         <div className="signup-page">
//             <h2>Sign Up</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Signing Up...' : 'Sign Up'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Signup;


// All in One 

// import React, { useState } from 'react';
// import axios from 'axios'; // For making HTTP requests
// import './Signup.css';

// const Signup = () => {
//   // State to hold form input values
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   // State to display success or error messages
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     try {
//       // Send POST request to the backend
//       const response = await axios.post('http://localhost:2469/api/user/register', formData);

//       // If successful, display a success message
//       setMessage('Registration successful! You can now log in.');
//       setError(''); // Clear any previous error
//     } catch (err) {
//       // Handle errors (e.g., validation issues, server errors)
//       setError(err.response?.data?.message || 'An error occurred during registration.');
//       setMessage(''); // Clear any success message
//     }
//   };

//   return (
//     <div className="signup-page">
//       <h2>Sign Up</h2>

//       {message && <p className="success-message">{message}</p>}
//       {error && <p className="error-message">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;




// Logic with Hooks

// import React, { useState } from 'react';
// import useSignup from '../../hooks/useSignup';
// import './Signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });

//     const { signup, loading, error } = useSignup();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const result = await signup(formData);
//         if (result) {
//             console.log('Signup successful:', result);
//         }
//     };

//     return (
//         <div className="signup-page">
//             <h2>Sign Up</h2>

//             {loading && <p>Loading...</p>}
//             {error && <p className="error-message">{error}</p>}

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Signing Up...' : 'Sign Up'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Signup;




// Old Orignal 

// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Signup logic
//     };

//     return (
//         <div className="signup-page">
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Full Name" required />
//                 <input type="email" placeholder="Email" required />
//                 <input type="password" placeholder="Password" required />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;
