import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// ------------------------------------------------------------------------------------------------ Navbar and ChatAssistance appears on all pages
import Navbar from './components/Navbar/Navabar';
import ChatAssistance from './components/ChatAssistance/Chat';

// ------------------------------------------------------------------------------------------------ Footer appears on all pages
import Footer from './components/Footer/Footer'; // Import the Footer component

// ------------------------------------------------------------------------------------------------ Pages for User and Guest Common
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Properties from './components/Properties/PropertiesHome';
import PropertyDetails from './pages/Property/PropertyDetails';
import PropertyResult from './pages/Property/PropertyResult';

// ------------------------------------------------------------------------------------------------ User and Guest Marketplace
import Marketplace from './components/Marketplace/Marrketplace'; // Marketplace------------------------------------

// ------------------------------------------------------------------------------------------------ User and Seller Settings
import Settings from './components/Settings/Settings';
import NotificationsAlerts from './components/Notifications/Notifications';

// ------------------------------------------------------------------------------------------------ User
import UserDashboard from './components/Dashboard/UserDashboard';
import ReviewSystem from './components/ReviewCard/ReviewCard';

// ------------------------------------------------------------------------------------------------ Seller
import SellerHome from './pages/Seller/SellerHome';
import PropertiesSeller from './components/Seller/PropertiesSeller';
import MarketplaceSeller from './components/Seller/MarketplaceSeller';
import FeedbackOverview from './components/Seller/FeedbackOverview';
import OrderManagement from './components/Seller/OrderManagement';

// ------------------------------------------------------------------------------------------------ Admin Dashboard
import AdminHome from './components/Admin/AdminHome';
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

// ------------------------------------------------------------------------------------------------ Other Components
import PropertyCard from './components/PropertyCard/PropertyCard'; // Dummy components
import VirtualTour from './components/VirtualTour/VirtualTour';

// ------------------------------------------------------------------------------------------------ Footer Components
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUsCompany from './components/ContactUsCompany/ContactUsCompany';
import Careers from './components/Careers/Careers';
import Consulting from './components/Consulting/Consulting';
import FAQsComponent from './components/FAQs/FAQsComponent';
import NewsArticles from './components/NewsAndArticles/NewsAndArticles';
import Support from './components/Feedback/Feedback';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar and ChatAssistance appears on all pages */}
      <Navbar />
      <ChatAssistance />


      {/* Define routes for each page */}
      <Routes>
        {/* User and Guest Common*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/properties/results" element={<PropertyResult />} />
        
        <Route path="/virtual-tour" element={<VirtualTour />} />

        {/* User and Guest Properties */}
        
        {/* <Route path="/property-details" element={<PropertyDetails />} /> */} {/* Property Details Dummy */}
        {/* <Route path="/property-card" element={<PropertyCard />} /> */} {/* Property Card Dummy */}


        {/* User and Guest Marketplace */}
        <Route path="/marketplace" element={<Marketplace />} /> {/* Marketplace------------------------------------ */}

        {/* User and Seller Settings */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<NotificationsAlerts />} />
        {/* <Route path="/profile" element={<Profile />} /> */} {/* Profile Dummy */}

        {/* User */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/review" element={<ReviewSystem />} />

        {/*Seller */}
        <Route path="/seller-home" element={<SellerHome />} />
        <Route path="/properties-seller" element={<PropertiesSeller />} />
        <Route path="/marketplace-seller" element={<MarketplaceSeller />} />
        <Route path="/feedback-overview" element={<FeedbackOverview />} />
        <Route path="/order-management" element={<OrderManagement />} />
        {/* <Route path="/seller-panel" element={<SellerPanel />} /> */} {/* Seller Panel Dummy */}
        {/* <Route path="/listing-management" element={<ListingManagement />} /> */} {/* Listing Management Dummy */}
        {/* <Route path="/promotions-discounts" element={<PromotionsDiscounts />} /> */} {/* Promotions Discounts Dummy */}
        {/* <Route path="/sales-dashboard" element={<SalesDashboard />} /> */} {/* Sales Dashboard Dummy */}


        {/* TBD*/}


        {/* Admin Dashboard */}
        <Route path="/admin-home" element={<AdminHome />} />
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




        {/* Footer Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUsCompany />} /> 
        <Route path="/careers" element={<Careers />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/faqs" element={<FAQsComponent />} />
        <Route path="/news" element={<NewsArticles />} />
        <Route path="/support" element={<Support />} />



      </Routes>
      

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
