import './TeacherHeader.css';

function TeacherHeader() {
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
          <div className="sidebar js-sidebar close">
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
              <div className="link-group-title">Me</div>
              <ul className="link-list">
                <li className="link-list-item">
                  <img src="../Images/icons/calendar-date-2.svg" alt="" className="icon">
                    <a href="#" className="link">Today's Classes</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/schedule-is-successful.svg" alt="" className="icon">
                    <a href="#" className="link">Classes this week</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/notebook.svg" alt="" className="icon">
                    <a href="#" className="link">Lesson Plan</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/filled-graph.svg" alt="" className="icon">
                    <a href="#" className="link">Attendance record</a>
                </li>
                <li className="link-list-item my-apps">
                  <img src="../Images/icons/squares.svg" alt="" className="icon">
                    <a href="#" className="link">My Apps<span className="arrow"> &#8599;</span></a>
                </li>
              </ul>
            </div>
            <div className="links-group">
              <div className="link-group-title">My Students</div>
              <ul className="link-list">
                <li className="link-list-item">
                  <img src="../Images/icons/certificate.svg" alt="" className="icon">
                    <a href="#" className="link">Assessments</a>
                </li>
                <li className="link-list-item">
                  <img src="../Images/icons/male-student.svg" alt="" className="icon">
                    <a href="#" className="link">Manage Students</a>
                </li>

                <li className="link-list-item">
                  <img src="../Images/icons/graph.svg" alt="" className="icon">
                    <a href="#" className="link">Student Attendance</a>
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

export default TeacherHeader;