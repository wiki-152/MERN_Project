import React, { useState } from 'react';
import { Package, MessageCircle, RefreshCw } from 'lucide-react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', status: 'Pending', total: 100 },
    { id: 2, customer: 'Jane Smith', status: 'Shipped', total: 150 },
    { id: 3, customer: 'Bob Johnson', status: 'Delivered', total: 200 },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-800">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">${order.total}</td>
                <td className="p-2">
                  <button
                    onClick={() => updateOrderStatus(order.id, 'Shipped')}
                    className="mr-2 bg-gray-800 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded transition duration-300"
                  >
                    <Package className="inline mr-1" size={16} />
                    Ship
                  </button>
                  <button className="bg-gray-800 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded transition duration-300">
                    <MessageCircle className="inline mr-1" size={16} />
                    Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        <RefreshCw className="inline mr-2" />
        Refresh Orders
      </button>
    </div>
  );
};

export default OrderManagement;

