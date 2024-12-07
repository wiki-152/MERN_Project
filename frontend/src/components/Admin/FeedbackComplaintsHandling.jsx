import React from 'react';
import { MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';

const FeedbackComplaintsHandling = () => {
  const feedbacks = [
    { id: 1, type: 'Feedback', user: 'John Doe', message: 'Great service!', status: 'Resolved' },
    { id: 2, type: 'Complaint', user: 'Jane Smith', message: 'Issue with payment', status: 'In Progress' },
    { id: 3, type: 'Feedback', user: 'Bob Johnson', message: 'Suggestion for improvement', status: 'New' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Feedback and Complaints Handling</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {feedback.type === 'Feedback' ? (
                    <MessageSquare className="text-blue-500 inline-block mr-2" />
                  ) : (
                    <AlertTriangle className="text-red-500 inline-block mr-2" />
                  )}
                  {feedback.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    feedback.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    feedback.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {feedback.status}
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

export default FeedbackComplaintsHandling;

