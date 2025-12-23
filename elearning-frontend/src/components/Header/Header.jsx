import './Header.css'
import LogoLight from '../../assets/images/logos/logo-light.png'
import UserTools from './UserTools';


function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <a href="teacher-home.html" className="logo-section">
          <img className='logo' src={LogoLight} alt="LMS+" />
        </a>
      </div>
      <div className="middle-section"></div>
      <div className="right-section">
        <UserTools />
      </div>
    </header>
  )
}

export default Header;