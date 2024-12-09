import React, { useEffect, useState } from 'react';
import { MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';
import axios from 'axios';

const FeedbackComplaintsHandling = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('https://mern-projectb.vercel.app/api/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const markAsRead = async (id) => {
    try {
      console.log('Marking feedback as read:', id);
      await axios.put(`https://mern-projectb.vercel.app/api/feedback/${id}`, { markedRead: true });
      // Update local state to reflect the change
      setFeedbacks(feedbacks.map(feedback => 
        feedback.id === id ? { ...feedback, markedRead: true } : feedback
      ));
    } catch (error) {
      console.error('Error marking feedback as read:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Feedback and Complaints Handling</h2>
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-200">
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {feedback.type === 'Feedback' ? (
                    <MessageSquare className="text-blue-500 inline-block mr-2" />
                  ) : (
                    <AlertTriangle className="text-red-500 inline-block mr-2" />
                  )}
                  {feedback.feedbackType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    feedback.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    feedback.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {feedback.markedRead ? 'Read' : 'Unread'}
                  </span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => markAsRead(feedback._id)} className="text-indigo-600 hover:text-indigo-900">Mark as Read</button>
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

