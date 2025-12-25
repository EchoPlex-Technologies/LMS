import { Link, NavLink } from 'react-router'
import './Sidebar.css'
import HomeIcon from '../assets/images/icons/home1.svg'
import ClockIcon from '../assets/images/icons/time.svg'
import AppsIcon from '../assets/images/icons/apps.svg'
import AttendanceIcon from '../assets/images/icons/icons8-attendance-96.png'
import ScheduleIcon from '../assets/images/icons/icons8-schedule-100.png'
import WriteIcon from '../assets/images/icons/write.svg'
import AssessmentsIcon from '../assets/images/icons/icons8-graph-100.png'
import FinancesIcon from '../assets/images/icons/wallet.svg'
import UserIcon from '../assets/images/icons/icons8-user-100.png'


function Sidebar() {
  function toggleSidebar() {
    const sidebarBase = document.querySelector('.js-sidebar-base');
    sidebarBase.classList.toggle('closed');
  }


  return (
    <div className="sidebar-base js-sidebar-base">
      <div className="toggle-button-container">
        <div className="toggle-button js-toggle-button" onClick={toggleSidebar}>Menu
        </div>
      </div>

      <StudentSidebar />
    </div>
  );
}

function StudentSidebar() {
  return (
    <div className="sidebar js-sidebar">
      <NavLink to='/' className="links-group link link-list-item">
        <img src={HomeIcon} alt="" className="icon" />
        <div className='link'>Home</div>
      </NavLink>

      <div className="links-group">
        <div className="link-group-title">My Classes</div>
        <ul className="link-list">
          <NavLink to="/today" className="link-list-item">
            <img src={ClockIcon} alt="" className="icon" />
            <div className="link">Today</div>
          </NavLink>
          <NavLink to="/schedule" className="link-list-item">
            <img src={ScheduleIcon} alt="" className="icon" />
            <div className="link">Schedule</div>
          </NavLink>
          <NavLink to="/assignments" className="link-list-item">
            <img src={WriteIcon} alt="" className="icon" />
            <div className="link">Assignments</div>
          </NavLink>
        </ul>
      </div>

      <div className="links-group">
        <div className="link-group-title">Analytics</div>
        <ul className="link-list">
          <NavLink to="/attendance" className="link-list-item">
            <img src={AttendanceIcon} alt="" className="icon" />
            <div className="link">Attendance</div>
          </NavLink>
          <NavLink to="/assessments" className="link-list-item">
            <img src={AssessmentsIcon} alt="" className="icon" />
            <div className="link">Assessments</div>
          </NavLink>

          <NavLink to="/finances" className="link-list-item">
            <img src={FinancesIcon} alt="" className="icon" />
            <div className="link">Finances</div>
          </NavLink>
        </ul>
      </div>

      <div className="links-group">
        <div className="link-group-title">Extras</div>
        <ul className="link-list">
          <NavLink to='/apps' className="link-list-item my-apps">
            <img src={AppsIcon} alt="" className="icon" />
            <div className="link">My Apps<span className="arrow"> &#8599;</span></div>
          </NavLink>
          <NavLink to='/profile' className="link-list-item">
            <img src={UserIcon} alt="" className="icon" />
            <div className="link">Profile</div>
          </NavLink>
          <li className="dark-mode-container">
            <div className="dark-mode">Dark mode</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;