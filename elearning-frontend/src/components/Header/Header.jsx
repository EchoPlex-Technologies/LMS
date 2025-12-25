import { Link } from 'react-router';
import './Header.css'
import LogoLight from '../../assets/images/logos/logo-light-Photoroom.png'
import LogoDark from '../../assets/images/logos/logo-dark-Photoroom.png'
import UserTools from './UserTools';


function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <Link to='/' className="logo-section">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet={LogoDark} />
            <img className='logo' src={LogoLight} alt="LMS+" />
          </picture>

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