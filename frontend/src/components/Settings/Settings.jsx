'use client'

import { useState } from 'react'
import SettingsSidebar from './SettingsSidebar'
import ProfileSettings from './Profile/Profile' // Or ProfileSettings.jsx
import DisplaySettings from './DisplaySettings'
import GeneralSettings from './GeneralSettings'
import SecuritySettings from './SecuritySettings'

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile')

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSettings />
      case 'security':
        return <div>Security Settings</div>
      case 'visibility':
        return <div>Visibility Settings</div>
      case 'privacy':
        return <div>Privacy Settings</div>
      case 'advertising':
        return <div>Advertising Settings</div>
      case 'services':
        return <div>Services Settings</div>
      case 'notifications':
        return <div>Notifications Settings</div>
      case 'general':
        return <GeneralSettings />
      default:
        return <ProfileSettings />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8">{renderContent()}</main>
    </div>
  )
}

