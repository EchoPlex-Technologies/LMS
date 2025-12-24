import './UserTools.css'
import AppsIcon from '../../assets/images/icons/apps.svg'
import NotificationsIcon from '../../assets/images/icons/notifications.svg'
import DefaultUserIcon from '../../assets/images/icons/icons8-profile-94.png'

function UserTools() {
  return (
    <div className="user-tools-base">
      <nav className="tools">
        <img src={AppsIcon} alt="" className="tool-icon" />
        <img src={NotificationsIcon} alt="" className="notifications-icon tool-icon" />
        <div className="user-image-base">
          <img src={DefaultUserIcon} alt="" className="user-image" />
        </div>
      </nav>
    </div>
  );
}

export default UserTools;