import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

const NotificationsAlerts = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your booking for 'Seaside Villa' has been confirmed!", type: 'booking' },
    { id: 2, message: "New listing in your favorite area: 'Mountain Retreat'", type: 'listing' },
    { id: 3, message: "Limited time offer: 20% off on weekend bookings!", type: 'promotion' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'booking':
        return '🏠';
      case 'listing':
        return '🆕';
      case 'promotion':
        return '🎉';
      default:
        return '📢';
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Bell className="mr-2" size={28} />
          Notifications and Alerts
        </h1>
        
        {notifications.length === 0 ? (
          <p className="text-gray-400">No new notifications.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li key={notif.id} className="bg-gray-800 rounded-lg p-4 flex items-start justify-between shadow-lg">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{getIcon(notif.type)}</span>
                  <p>{notif.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notif.id)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
        
        <button className="mt-8 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors w-full">
          Mark All as Read
        </button>
      </div>
    </div>
  );
};

export default NotificationsAlerts;

