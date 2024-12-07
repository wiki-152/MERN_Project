import React from 'react';
import { MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';

const SupportTicketManagement = () => {
  const tickets = [
    { id: 1, user: 'John Doe', subject: 'Login Issue', status: 'Open', priority: 'High' },
    { id: 2, user: 'Jane Smith', subject: 'Payment Problem', status: 'In Progress', priority: 'Medium' },
    { id: 3, user: 'Bob Johnson', subject: 'Account Verification', status: 'Closed', priority: 'Low' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Support Ticket Management</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.status === 'Open' && <MessageCircle className="text-yellow-500 inline-block mr-2" />}
                  {ticket.status === 'In Progress' && <AlertCircle className="text-blue-500 inline-block mr-2" />}
                  {ticket.status === 'Closed' && <CheckCircle className="text-green-500 inline-block mr-2" />}
                  {ticket.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicketManagement;

