import React from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../../stores/userStore';
import useListingOwnerStore from '../../stores/listingOwnerStore';
import './Navbar.css';

const Navbar = () => {
    const { user, isAuthenticated: isCustomerAuthenticated, logout: logoutCustomer } = useUserStore();
    const { listingOwner, isAuthenticated: isSellerAuthenticated, logout: logoutSeller } = useListingOwnerStore();

    const isLoggedIn = isCustomerAuthenticated || isSellerAuthenticated;

    const handleLogout = () => {
        if (isCustomerAuthenticated) {
            logoutCustomer();
        } else if (isSellerAuthenticated) {
            logoutSeller();
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">MyApp</Link>
            </div>
            <ul className="nav-links">
                {!isLoggedIn ? (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                ) : (
                    <li className="dropdown">
                        <button className="dropdown-btn">
                            {/* Use optional chaining or fallback */}
                            {isCustomerAuthenticated ? user?.name || 'Customer' : listingOwner?.name || 'Seller'} <span>▼</span>
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/profile">Account</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
