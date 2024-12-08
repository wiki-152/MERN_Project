import React from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../../stores/userStore';
import useListingOwnerStore from '../../stores/listingOwnerStore';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { user, isAuthenticated: isCustomerAuthenticated, logout: logoutCustomer } = useUserStore();
    const { listingOwner, isAuthenticated: isSellerAuthenticated, logout: logoutSeller } = useListingOwnerStore();

    const isLoggedIn = isCustomerAuthenticated || isSellerAuthenticated;

    const navigate = useNavigate();
    const handleLogout = () => {
        if (isCustomerAuthenticated) {
            logoutCustomer();
            navigate('/');
        } else if (isSellerAuthenticated) {
            logoutSeller();
            navigate('/');
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                {/* managed according to customer or seller */}
                {isSellerAuthenticated ? <Link to="/seller-home">MyApp</Link> : <Link to="/">MyApp</Link>}
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
                            {isCustomerAuthenticated ? user?.name || 'Customer' : listingOwner?.name || 'Seller'} <span>▼</span>
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/settings">Account</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
