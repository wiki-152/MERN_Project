'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Benefits } from '../../components/Benefits/Benefits'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Login Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Login to your account</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="mt-1 text-right">
                  <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-gray-600"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign in
              </button>
            </form>
          </div>

          {/* Partition */}
          <div className="hidden md:block">
            <div className="h-full w-px bg-gray-700"></div>
          </div>

          {/* Register Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">I don't have an account</h2>
            <p className="text-gray-400">
              Create an account now and enjoy exclusive benefits with your first order.
            </p>
            <div className="flex h-full flex-col justify-end">
              <button
                type="button"
                className="w-full rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Register now
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <Benefits />
      </div>
    </div>
  )
}



// Logic with Zustand for both User and Listing Owner
// import React, { useState } from 'react';
// import useUserStore from '../../stores/userStore';
// import useListingOwnerStore from '../../stores/listingOwnerStore';
// import './Login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: '',
//     });

//     // Zustand stores for customers and listing owners
//     const {
//         login: loginCustomer,
//         loading: loadingCustomer,
//         error: errorCustomer,
//         clearError: clearCustomerError, // Add a method to clear errors
//     } = useUserStore();

//     const {
//         login: loginSeller,
//         loading: loadingSeller,
//         error: errorSeller,
//         clearError: clearSellerError, // Add a method to clear errors
//     } = useListingOwnerStore();

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials({ ...credentials, [name]: value });
//     };

//     // Handle login as customer
//     const handleCustomerLogin = (e) => {
//         e.preventDefault();
//         clearSellerError(); // Clear seller error before customer login
//         loginCustomer(credentials);
//     };

//     // Handle login as seller
//     const handleSellerLogin = (e) => {
//         e.preventDefault();
//         clearCustomerError(); // Clear customer error before seller login
//         loginSeller(credentials);
//     };

//     return (
//         <div className="login-page">
//             <h2>Login</h2>

           
//             {/* Display errors or loading states */}
//             {loadingCustomer && <p>Loading Customer Login...</p>}
//             {errorCustomer && <p className="error-message">{errorCustomer}</p>}
//             {loadingSeller && <p>Loading Seller Login...</p>}
//             {errorSeller && <p className="error-message">{errorSeller}</p>}
            
//             <form>
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

//                 {/* Two separate login buttons */}
//                 <button type="button" onClick={handleCustomerLogin} disabled={loadingCustomer}>
//                     {loadingCustomer ? 'Logging In as Customer...' : 'Login as Customer'}
//                 </button>
//                 <button type="button" onClick={handleSellerLogin} disabled={loadingSeller}>
//                     {loadingSeller ? 'Logging In as Seller...' : 'Login as Seller'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;




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
