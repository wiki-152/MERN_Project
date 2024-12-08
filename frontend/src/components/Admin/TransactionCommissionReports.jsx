import React from 'react';
import { DollarSign, TrendingUp, Download } from 'lucide-react';

const TransactionCommissionReports = () => {
  const transactions = [
    { id: 1, date: '2023-05-01', amount: 1000, commission: 50 },
    { id: 2, date: '2023-05-02', amount: 1500, commission: 75 },
    { id: 3, date: '2023-05-03', amount: 2000, commission: 100 },
  ];

  return (
    <div className="p-6 bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Transaction and Commission Reports</h2>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-emerald-600">
          <Download className="mr-2" /> Export Report
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total Transactions</span>
            <DollarSign className="text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">$4,500</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total Commissions</span>
            <TrendingUp className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">$225</p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Commission</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">${transaction.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionCommissionReports;

