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
import ChatAssistance from './components/ChatAssistance/Chat';
import NotificationsAlerts from './components/Notifications/Notifications';
import ReviewSystem from './components/ReviewCard/ReviewCard';
import UserDashboard from './components/Dashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminListingManagement from './components/Admin/AdminListingManagement';
import FeedbackComplaintsHandling from './components/Admin/FeedbackComplaintsHandling';
import ContentManagementSystem from './components/Admin/ContentManagementSystem';
import BackupAndRestore from './components/Admin/BackupAndRestore';
import MarketingTools from './components/Admin/MarketingTools';
import SecuritySettings from './components/Admin/SecuritySettings';
import SiteAnalytics from './components/Admin/SiteAnalytics';
import SupportTicketManagement from './components/Admin/SupportTicketManagement';
import UserRoleManagement from './components/Admin/UserRoleManagement';
import UserVerificationManagement from './components/Admin/UserVerificationManagement';

// Seller
import SellerHome from './pages/Seller/SellerHome';
import FeedbackOverview from './components/Seller/FeedbackOverview';
import ListingManagement from './components/Seller/ListingManagement';
import OrderManagement from './components/Seller/OrderManagement';
import PromotionsDiscounts from './components/Seller/PromotionsDiscounts';
import SalesDashboard from './components/Seller/SalesDashboard';
import Seller from './components/Seller/Seller';
import PropertiesSeller from './components/Seller/PropertiesSeller';
import MarketplaceSeller from './components/Seller/MarketplaceSeller';

// ------------------------------------------------------------------------------------------------ Routing to be done propertly for now direct access to check 

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
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/property-card" element={<PropertyCard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/properties/results" element={<PropertyResult />} />
        <Route path="/seller-panel" element={<SellerPanel />} />
        <Route path="/chat" element={<ChatAssistance />} />
        <Route path="/notifications" element={<NotificationsAlerts />} />
        <Route path="/review" element={<ReviewSystem />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-listing-management" element={<AdminListingManagement />} />
        <Route path="/feedback-complaints-handling" element={<FeedbackComplaintsHandling />} />
        <Route path="/content-management-system" element={<ContentManagementSystem />} />
        <Route path="/backup-and-restore" element={<BackupAndRestore />} />
        <Route path="/marketing-tools" element={<MarketingTools />} />
        <Route path="/security-settings" element={<SecuritySettings />} />
        <Route path="/site-analytics" element={<SiteAnalytics />} />
        <Route path="/support-ticket-management" element={<SupportTicketManagement />} />
        <Route path="/user-role-management" element={<UserRoleManagement />} />
        <Route path="/user-verification-management" element={<UserVerificationManagement />} />


        {/* Seller Home */}
        <Route path="/seller-home" element={<SellerHome />} />
        <Route path="/properties-seller" element={<PropertiesSeller />} />
        <Route path="/marketplace-seller" element={<MarketplaceSeller />} />

        <Route path="/feedback-overview" element={<FeedbackOverview />} />
        <Route path="/listing-management" element={<ListingManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/promotions-discounts" element={<PromotionsDiscounts />} />
        <Route path="/sales-dashboard" element={<SalesDashboard />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
