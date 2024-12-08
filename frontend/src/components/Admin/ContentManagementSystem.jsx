import React from 'react';
import { FileText, Edit, Trash2, Plus } from 'lucide-react';

const ContentManagementSystem = () => {
  const articles = [
    { id: 1, title: 'New Feature Announcement', author: 'John Doe', date: '2023-05-01', status: 'Published' },
    { id: 2, title: 'Tips for Better User Experience', author: 'Jane Smith', date: '2023-05-05', status: 'Draft' },
    { id: 3, title: 'Upcoming Maintenance Schedule', author: 'Bob Johnson', date: '2023-05-10', status: 'Scheduled' },
  ];

  return (
    <div className="p-6 bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Content Management System</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="mr-2" /> New Article
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    {article.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{article.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{article.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    article.status === 'Published' ? 'bg-green-900 text-green-100' :
                    article.status === 'Draft' ? 'bg-yellow-900 text-yellow-100' :
                    'bg-blue-900 text-blue-100'
                  }`}>
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentManagementSystem;

