import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/SettingsPages/Profile'
import SecurityPage from '../components/SettingsPages/SecurityPage'

const SettingOverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-white-300'>
      <Header tittle='Settings' />
      <main className='max-w-4xl max-auto py-6 px-4 lg:px-8'>
        <Profile />
        <SecurityPage />
      </main>
    </div>
  )
}

export default SettingOverviewPage
