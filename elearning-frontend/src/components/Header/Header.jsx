import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import './Header.css'
import LogoLight from '../../assets/images/logos/logo-light-Photoroom.png'
import LogoDark from '../../assets/images/logos/logo-dark-Photoroom.png'
import UserTools from './UserTools';


function Header() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  }
  )

  useEffect(() => {
    const root = document.documentElement;

    const obs = new MutationObserver(() => {
      const t = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
      setTheme(t)
    })

    obs.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    const onStorage = (e) => {
      if (e.key === 'theme') {
        setTheme(e.newValue === 'dark' ? 'dark' : 'light')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      obs.disconnect()
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return (
    <header className="header">
      <div className="left-section">
        <Link to='/' className="logo-section">
          <img className='logo' src={theme === 'dark' ? LogoDark : LogoLight} alt="LMS+" />
        </Link>
      </div>
      <div className="middle-section"></div>
      <div className="right-section">
        <UserTools />
      </div>
    </header>
  )
}

export default Header;