import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Tag, ShoppingCart, MessageSquare, Calendar, PenToolIcon as Tool, CreditCard, FileText, TrendingUp, BarChart2, FileBarChart, Menu, X } from 'lucide-react';
import AdminListingsManagement from './AdminListingManagement';
import FeedbackComplaintsHandling from './FeedbackComplaintsHandling';
import ContentManagementSystem from './ContentManagementSystem';
import BackupAndRestore from './BackupAndRestore';
import MarketingTools from './MarketingTools';
import SecuritySettings from './SecuritySettings';
import SiteAnalytics from './SiteAnalytics';
import SupportTicketManagement from './SupportTicketManagement';
import TransactionCommissionReports from './TransactionCommissionReports';
import UserRoleManagement from './UserRoleManagement';
import UserVerificationManagement from './UserVerificationManagement';

const AdminHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('FeedbackComplaintsHandling');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { icon: <Home size={20} />, text: 'Home', link: 'FeedbackComplaintsHandling' },
    { icon: <Tag size={20} />, text: 'Content Management', link: 'ContentManagementSystem' },
    { icon: <DollarSign size={20} />, text: 'Backup & Restore', link: 'BackupAndRestore' },
    { icon: <Tool size={20} />, text: 'Marketing Tools', link: 'MarketingTools' },
    { icon: <SecuritySettings size={20} />, text: 'Security Settings', link: 'SecuritySettings' },
    { icon: <FileText size={20} />, text: 'Site Analytics', link: 'SiteAnalytics' },
    { icon: <MessageSquare size={20} />, text: 'Support Ticket Management', link: 'SupportTicketManagement' },
    { icon: <UserRoleManagement size={20} />, text: 'User Role Management', link: 'UserRoleManagement' },
    { icon: <UserVerificationManagement size={20} />, text: 'User Verification', link: 'UserVerificationManagement' },
    { icon: <TransactionCommissionReports size={20} />, text: 'Transaction Commission Reports', link: 'TransactionCommissionReports' },
    { icon: <AdminListingsManagement size={20} />, text: 'Listings Management', link: 'AdminListingsManagement' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="mt-2 ml-1 text-2xl font-bold">Admin Panel</h1>
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
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          {selectedComponent === 'FeedbackComplaintsHandling' && <FeedbackComplaintsHandling />}
          {selectedComponent === 'ContentManagementSystem' && <ContentManagementSystem />}
          {selectedComponent === 'BackupAndRestore' && <BackupAndRestore />}
          {selectedComponent === 'MarketingTools' && <MarketingTools />}
          {selectedComponent === 'SecuritySettings' && <SecuritySettings />}
          {selectedComponent === 'SiteAnalytics' && <SiteAnalytics />}
          {selectedComponent === 'SupportTicketManagement' && <SupportTicketManagement />}
          {selectedComponent === 'UserRoleManagement' && <UserRoleManagement />}
          {selectedComponent === 'UserVerificationManagement' && <UserVerificationManagement />}
        </main>
      </div>
    </div>
  );
};

export default AdminHome;

