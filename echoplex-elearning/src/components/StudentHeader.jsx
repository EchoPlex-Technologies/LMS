

function StudentHeader() {
  return (
    <>
      <header>
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
        <section className="sidebar-base js-sidebar-base close">
          <div className="sidebar student-sidebar js-sidebar close">
            <!--This is our sidebar, where we put all of our links to the different website pages-->

            <div className="toggle-button-container
        ">
              <button className="toggle-button js-toggle-button">
                <div className="menu-icon-container">
                  <img src="../Images/icons/menu.svg" alt="" className="menu-icon">Menu
                </div>
                <img src="../Images/icons/close.svg" alt="" className="close-icon">
              </button>
            </div>

            <div className="links-group link-list-item current-page">
              <img src="../Images/icons/home1.svg" alt="" className="icon">
                <a href="teacher-home.html" className="link">Home</a>
            </div>
            <div className="links-group">
              <div className="link-group-title">Class</div>
              <ul className="link-list">
                <li className="link-list-item">
                  <img src="../Images/icons/calendar-date-2.svg" alt="" className="icon">
                    <a href="Today's-class.html" className="link">Today's Classes</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/schedule-is-successful.svg" alt="" className="icon">
                    <a href="Weekly-classes.html" className="link">Classes this week</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/bookshelf.svg" alt="" className="icon">
                    <a href="Courses.html" className="link">Courses</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/write.svg" alt="" className="icon">
                    <a href="Assignments.html" className="link">Assignments</a>
                </li>
                <li className="link-list-item my-apps">
                  <img src="../Images/icons/squares.svg" alt="" className="icon">
                    <a href="Apps.html" className="link">My Apps<span className="arrow"> &#8599;</span></a>
                </li>
              </ul>
            </div>
            <div className="links-group">
              <div className="link-group-title">My Details</div>
              <ul className="link-list">
                <li className="link-list-item">
                  <img src="../Images/icons/exam-result.svg" alt="" className="icon">
                    <a href="Results.html" className="link">Results</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/wallet.svg" alt="" className="icon">
                    <a href="Finances.html" className="link">Finances</a>
                </li>

                <li className="link-list-item">
                  <img src="../Images/icons/filled-graph.svg" alt="" className="icon">
                    <a href="Records.html" className="link">Attendance Record</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="floating-action-base">
          <button className="floating-action-button">+</button>
        </section>
      </header>
    </>
  );
}

export default StudentHeader;