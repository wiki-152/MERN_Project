import { useState, useEffect } from 'react';
import {
  Camera,
  Mail,
  Phone,
  Home,
  Package,
  Star,
  Bell,
  Check,
  X,
} from 'lucide-react';
import useUserStore from '../../../stores/userStore';

export default function UpdateProfile() {
  const { user } = useUserStore();

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    profilePicture: 'frontend\src\assets\images\default_profile_image.jpg',
    isHost: false,
    emailNotificationsEnabled: true,
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        profilePicture: user.profilePicture || 'frontend\src\assets\images\default_profile_image.jpg',
        isHost: user.isHost || false,
        emailNotificationsEnabled: user.emailNotificationsEnabled || true,
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <div className="min-h-screen bg-[#1e2837] text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Update Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-400">Update your profile picture</p>
            </div>
          </div>

          {/* Basic Information */}
          <div className="space-y-4 bg-[#2a3441] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="space-y-2">
              <label className="block text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-400">Email</label>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="flex-1 px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-400">Phone Number</label>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="flex-1 px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Password Section */}
      <div className="space-y-4 bg-[#2a3441] p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">Old Password</label>
          <input
            type="password"
            value={profile.oldPassword}
            onChange={(e) =>
              setProfile({ ...profile, oldPassword: e.target.value })
            }
            className="w-full px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">New Password</label>
          <input
            type="password"
            value={profile.newPassword}
            onChange={(e) =>
              setProfile({ ...profile, newPassword: e.target.value })
            }
            className="w-full px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">Confirm New Password</label>
          <input
            type="password"
            value={profile.confirmNewPassword}
            onChange={(e) =>
              setProfile({ ...profile, confirmNewPassword: e.target.value })
            }
            className="w-full px-4 py-2 bg-[#1e2837] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

          {/* Preferences */}
          <div className="space-y-4 bg-[#2a3441] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Host Status</p>
                  <p className="text-sm text-gray-400">
                    Enable hosting capabilities
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  setProfile({ ...profile, isHost: !profile.isHost })
                }
                className={`p-2 rounded-full ${
                  profile.isHost
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-600'
                }`}
              >
                {profile.isHost ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <X className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-400">
                    Receive email updates
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  setProfile({
                    ...profile,
                    emailNotificationsEnabled:
                      !profile.emailNotificationsEnabled,
                  })
                }
                className={`p-2 rounded-full ${
                  profile.emailNotificationsEnabled
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-600'
                }`}
              >
                {profile.emailNotificationsEnabled ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <X className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#2a3441] p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Home className="w-5 h-5 text-blue-500" />
                <h4 className="font-medium">Properties</h4>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="bg-[#2a3441] p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Package className="w-5 h-5 text-green-500" />
                <h4 className="font-medium">Items</h4>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="bg-[#2a3441] p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <h4 className="font-medium">Reviews</h4>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
