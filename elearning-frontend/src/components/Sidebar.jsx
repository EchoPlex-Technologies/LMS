import './Sidebar.css'
import MenuIcon from '../assets/images/icons/menu.svg'
import CloseIcon from '../assets/images/icons/close.svg'
import HomeIcon from '../assets/images/icons/home1.svg'
import CalendarIcon from '../assets/images/icons/calendar-date-2.svg'
import ScheduleIcon from '../assets/images/icons/schedule-is-successful.svg'
import NotebookIcon from '../assets/images/icons/notebook.svg'
import GraphIcon from '../assets/images/icons/filled-graph.svg'
import SquaresIcon from '../assets/images/icons/squares.svg'
import CertificateIcon from '../assets/images/icons/certificate.svg'
import StudentIcon from '../assets/images/icons/male-student.svg'
import AttendanceIcon from '../assets/images/icons/graph.svg'


function Sidebar() {
  let isVisible = true;
  function toggleSidebar() {
    if (isVisible) {
      isVisible = false;
    } else if (!isVisible) {
      isVisible = true;
    }
  }

  function displaySidebar() {
    if (isVisible) {
      return <VisibleSidebar />
    } else {
      return <HiddenSidebar />
    }

  }

  function VisibleSidebar() {
    return (
      <div className="sidebar-base js-sidebar-base"  >
        <div className="sidebar js-sidebar">

          <div className="toggle-button-container">
            <button className="toggle-button js-toggle-button" onClick={toggleSidebar()}>
              <div className="menu-icon-container">
                <img src={MenuIcon} alt="" className="menu-icon" />Menu
              </div>
              <img src={CloseIcon} alt="" className="close-icon" />
            </button>
          </div>

          <div className="links-group link-list-item current-page">
            <img src={HomeIcon} alt="" className="icon" />
            <a href="teacher-home.html" className="link" >Home</a>
          </div>

          <div className="links-group">
            <div className="link-group-title">Me</div>
            <ul className="link-list">
              <li className="link-list-item">
                <img src={CalendarIcon} alt="" className="icon" />
                <a href="#" className="link">Today's Classes</a>
              </li>
              <li className="link-list-item">
                <img src={ScheduleIcon} alt="" className="icon" />
                <a href="#" className="link">Classes this week</a>
              </li>
              <li className="link-list-item">
                <img src={NotebookIcon} alt="" className="icon" />
                <a href="#" className="link">Lesson Plan</a>
              </li>
              <li className="link-list-item">
                <img src={GraphIcon} alt="" className="icon" />
                <a href="#" className="link">Attendance record</a>
              </li>
              <li className="link-list-item my-apps">
                <img src={SquaresIcon} alt="" className="icon" />
                <a href="#" className="link">My Apps<span className="arrow"> &#8599;</span></a>
              </li>
            </ul>
          </div>
          <div className="links-group">
            <div className="link-group-title">My Students</div>
            <ul className="link-list">
              <li className="link-list-item">
                <img src={CertificateIcon} alt="" className="icon" />
                <a href="#" className="link">Assessments</a>
              </li>
              <li className="link-list-item">
                <img src={StudentIcon} alt="" className="icon" />
                <a href="#" className="link">Manage Students</a>
              </li>

              <li className="link-list-item">
                <img src={AttendanceIcon} alt="" className="icon" />
                <a href="#" className="link">Student Attendance</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function HiddenSidebar() {
    return (
      <div className="sidebar-base js-sidebar-base close"  >
        <div className="sidebar js-sidebar close">

          <div className="toggle-button-container">
            <button className="toggle-button js-toggle-button" onClick={toggleSidebar()}>
              <div className="menu-icon-container">
                <img src="../Images/icons/menu.svg" alt="" className="menu-icon" />Menu
              </div>
              <img src="../Images/icons/close.svg" alt="" className="close-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    displaySidebar()
  );
}

export default Sidebar;