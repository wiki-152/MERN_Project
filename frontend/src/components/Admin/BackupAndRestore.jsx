import React from 'react';
import { Database, Download, Upload, Clock } from 'lucide-react';

const BackupRestore = () => {
  const backups = [
    { id: 1, name: 'Full Backup', date: '2023-05-01 10:00:00', size: '1.2 GB' },
    { id: 2, name: 'Incremental Backup', date: '2023-05-02 10:00:00', size: '200 MB' },
    { id: 3, name: 'Differential Backup', date: '2023-05-03 10:00:00', size: '500 MB' },
  ];

  return (
    <div className="p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Backup and Restore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Create Backup</h3>
            <Database className="text-blue-500" />
          </div>
          <p className="text-gray-600 mb-4">Create a new backup of your data.</p>
          <button className="bg-blue-500 text-gray-800 px-4 py-2 rounded-lg w-full flex items-center justify-center">
            <Download className="mr-2" /> Create Backup
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Restore Data</h3>
            <Upload className="text-green-500" />
          </div>
          <p className="text-gray-600 mb-4">Restore your data from a previous backup.</p>
          <button className="bg-green-500 text-gray-800 px-4 py-2 rounded-lg w-full flex items-center justify-center">
            <Upload className="mr-2" /> Restore Data
          </button>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="big-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Backup Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-200">
            {backups.map((backup) => (
              <tr key={backup.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    {backup.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{backup.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{backup.size}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">Download</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BackupRestore;

