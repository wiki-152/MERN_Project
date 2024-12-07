import React from 'react';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
            <Shield className="text-green-500" />
          </div>
          <p className="text-gray-600 mb-4">Add an extra layer of security to your account.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Enable 2FA</button>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Password Settings</h3>
            <Lock className="text-yellow-500" />
          </div>
          <p className="text-gray-600 mb-4">Manage your password and security preferences.</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Change Password</button>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Privacy Controls</h3>
            <Eye className="text-purple-500" />
          </div>
          <p className="text-gray-600 mb-4">Manage your data privacy settings.</p>
          <div className="flex items-center">
            <input type="checkbox" id="dataSharing" className="mr-2" />
            <label htmlFor="dataSharing">Allow data sharing for improved services</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;

