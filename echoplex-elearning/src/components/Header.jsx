import './Header.css'

function Header() {
  return (
    <>
      <section className="top-header">
        <div className="left-section">
          <a href="teacher-home.html" className="logo-section">
            <img src="../Images/logos/LMS+ Light bg removed.png" alt="LMS+">
          </a>
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <div className="nav-base">
            <nav className="nav">
              <img src="../Images/icons/apps.svg" alt="" className="nav-icon">
                <img src="../Images/icons/notifications.svg" alt="" className="notifications-icon nav-icon">
                  <div className="user-image-base">
                    <img src="../Images/icons/teacher-male.svg" alt="" className="user-image">
                  </div>
                </nav>
              </div>
          </div>
      </section>
    </>
  );
}

export default Header;