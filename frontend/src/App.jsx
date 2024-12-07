import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navabar'; // Import the Navbar component
import Footer from './components/Footer/Footer'; // Import the Footer component
import Properties from './components/Properties/PropertiesHome';
import Marketplace from './components/Marketplace/Marrketplace';
import PropertyDetails from './pages/Property/PropertyDetails';
import PropertyCard from './components/PropertyCard/PropertyCard';
import Profile from './components/Settings/Profile/Profile';
import PropertyResult from './pages/Property/PropertyResult';
import Settings from './components/Settings/Settings';
import SellerPanel from './components/Seller/Seller';

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/marketplace" element={<Marketplace />} />

        {/* Property Details Update -----------------------------------------*/}
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/property-card" element={<PropertyCard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/properties/results" element={<PropertyResult />} />
        <Route path="/seller-panel" element={<SellerPanel />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
