import './Header.css'


function Header() {
  return (
    <>
      <div className="top-header">
        <div className="left-section">
          <a href="teacher-home.html" className="logo-section">
            <img className='logo' src={LogoLight} alt="LMS+" />
          </a>
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <div className="nav-base">
            <nav className="nav">
              <img src="../Images/icons/apps.svg" alt="" className="nav-icon" />
              <img src="../Images/icons/notifications.svg" alt="" className="notifications-icon nav-icon" />
              <div className="user-image-base">
                <img src="../Images/icons/teacher-male.svg" alt="" className="user-image" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;