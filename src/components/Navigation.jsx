import React from 'react'

export default function Navigation() {
  return (
    <div className="navigation">
      <img 
        src={require('../../public/images/icons/events.svg')} 
        alt="Plans" 
      />
      <img
        src={require('../../public/images/icons/add.svg')}
        alt="Create plan"
      />
      <img
        src={require('../../public/images/icons/profile.svg')}
        alt="Profile"
      />
      <img
        src={require('../../public/images/icons/settings.svg')}
        alt="Settings"
      />
    </div>
  )
}
