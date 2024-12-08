import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Tag, ShoppingCart, MessageSquare, Calendar, PenToolIcon as Tool, CreditCard, FileText, TrendingUp, BarChart2, FileBarChart, Menu, X } from 'lucide-react';
import HomeComponent from './SellerDashboard';
import ListingManagementComponent from './ListingManagement';
import SalesDashboardComponent from './SalesDashboard';
import PromotionsComponent from './PromotionsDiscounts';
import OrderManagementComponent from './OrderManagement';
import FeedbackComponent from './FeedbackOverview';
import ReservationComponent from './ReservationManagement';
import MaintenanceComponent from './Maintenance';
import PropertyPaymentComponent from './PropertyPayment';
import ComplianceComponent from './Compliance';
import MarketTrendsComponent from './MarketTrends';
import PerformanceMetricsComponent from './PerformanceMetrics';
import CustomReportsComponent from './CustomReports';


const PropertiesSeller = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { icon: <Home size={20} />, text: 'Home', link: 'HomeComponent' },
    { icon: <Home size={20} />, text: 'Listing Management', link: 'ListingManagementComponent' },
    { icon: <DollarSign size={20} />, text: 'Sales Dashboard', link: 'SalesDashboardComponent' },
    { icon: <Tag size={20} />, text: 'Promotions and Discounts', link: 'PromotionsComponent' },
    { icon: <ShoppingCart size={20} />, text: 'Order Management', link: 'OrderManagementComponent' },
    { icon: <MessageSquare size={20} />, text: 'Feedback Overview', link: 'FeedbackComponent' },
    { icon: <Calendar size={20} />, text: 'Reservation Management', link: 'ReservationComponent' },
    { icon: <Tool size={20} />, text: 'Maintenance Requests', link: 'MaintenanceComponent' },
    { icon: <CreditCard size={20} />, text: 'Payment Management', link: 'PaymentComponent' },
    { icon: <FileText size={20} />, text: 'Regulatory Compliance', link: 'ComplianceComponent' },
    { icon: <TrendingUp size={20} />, text: 'Market Trends', link: 'MarketTrendsComponent' },
    { icon: <BarChart2 size={20} />, text: 'Performance Metrics', link: 'PerformanceMetricsComponent' },
    { icon: <FileBarChart size={20} />, text: 'Custom Reports', link: 'CustomReportsComponent' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="mt-2 ml-1 text-2xl font-bold">Seller Panel</h1>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-5">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a 
                  href="#" 
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                  onClick={() => setSelectedComponent(item.link)}
                >
                  {item.icon}
                  <span className="ml-3">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          {selectedComponent === 'HomeComponent' && <HomeComponent />}
          {selectedComponent === 'ListingManagementComponent' && <ListingManagementComponent />}
          {selectedComponent === 'SalesDashboardComponent' && <SalesDashboardComponent />}
          {selectedComponent === 'PromotionsComponent' && <PromotionsComponent />}
          {selectedComponent === 'OrderManagementComponent' && <OrderManagementComponent />}
          {selectedComponent === 'FeedbackComponent' && <FeedbackComponent />}
          {selectedComponent === 'ReservationComponent' && <ReservationComponent />}
          {selectedComponent === 'MaintenanceComponent' && <MaintenanceComponent />}
          {selectedComponent === 'PropertyPaymentComponent' && <PropertyPaymentComponent />}
          {selectedComponent === 'ComplianceComponent' && <ComplianceComponent />}
          {selectedComponent === 'MarketTrendsComponent' && <MarketTrendsComponent />}
          {selectedComponent === 'PerformanceMetricsComponent' && <PerformanceMetricsComponent />}
          {selectedComponent === 'CustomReportsComponent' && <CustomReportsComponent />}
        </main>
      </div>
    </div>
  );
};

export default PropertiesSeller;

