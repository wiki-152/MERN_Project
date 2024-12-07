import { User, Lock, Eye, Shield, BarChart2, Users, Bell } from 'lucide-react'

const menuItems = [
  { id: 'profile', label: 'Account preferences', icon: User },
  { id: 'security', label: 'Sign in & security', icon: Lock },
  { id: 'visibility', label: 'Visibility', icon: Eye },
  { id: 'privacy', label: 'Data privacy', icon: Shield },
  { id: 'advertising', label: 'Advertising data', icon: BarChart2 },
  { id: 'services', label: 'Services', icon: Users },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export default function SettingsSidebar({ activeSection, onSectionChange }) {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
