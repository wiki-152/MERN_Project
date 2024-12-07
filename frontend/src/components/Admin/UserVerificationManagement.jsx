import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const UserVerificationManagement = () => {
  const users = [
    { id: 1, name: 'John Doe', status: 'verified' },
    { id: 2, name: 'Jane Smith', status: 'pending' },
    { id: 3, name: 'Bob Johnson', status: 'rejected' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">User Verification Management</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.status === 'verified' && <CheckCircle className="text-green-500" />}
                  {user.status === 'pending' && <Clock className="text-yellow-500" />}
                  {user.status === 'rejected' && <XCircle className="text-red-500" />}
                  <span className="ml-2 capitalize">{user.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserVerificationManagement;

