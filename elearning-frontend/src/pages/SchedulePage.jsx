import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';
import './SchedulePage.css';
import DotsIcon from '../assets/images/icons/icons8-dots-96.png'
import Picture from '../assets/images/teacher-1.jpg'


function SchedulePage() {

  return (
    <>
      <Header />
      <Sidebar />

      <div className="page-content">

        <div className="box weekly-schedule">
          <div className="box-title-large">Weekly Schedule</div>

          <div className="list">
            <div className="separator-title-container">
              <span className="separator"></span>
              <div className="separator-title">Monday</div>
              <span className="separator"></span>
            </div>

            <div className="list-item box">
              <div className="top-section">
                <div className="item-time">10:00 AM</div>
                <span className="vertical-separator"></span>
                <div className="item-title">Math Lecture</div>
                <span className="vertical-separator"></span>
                <div className="item-location special">RB4</div>
              </div>

              <button className="details-toggle">
                <img className='dots-icon' src={DotsIcon} alt="..." />
              </button>

              <div className="bottom-section box closed">
                <img src={Picture} alt="" className="picture" />

              </div>

            </div>

            <div className="separator-title-container">
              <span className="separator"></span>
              <div className="separator-title">Tuesday</div>
              <span className="separator"></span>
            </div>

            <div className="list-item box">
              <div className="top-section">
                <div className="item-time">1:00 PM</div>
                <span className="vertical-separator"></span>
                <div className="item-title">Business Management</div>
                <span className="vertical-separator"></span>
                <div className="item-location special">RB5</div>
              </div>

              <button className="details-toggle">
                <img className='dots-icon' src={DotsIcon} alt="..." />
              </button>

              <div className="bottom-section box closed">
                <img src={Picture} alt="" className="picture" />

              </div>

            </div>

            <div className="separator-title-container">
              <span className="separator"></span>
              <div className="separator-title">Thursday</div>
              <span className="separator"></span>
            </div>

            <div className="list-item box">
              <div className="top-section">
                <div className="item-time">8:00 AM</div>
                <span className="vertical-separator"></span>
                <div className="item-title">Computer Literacy</div>
                <span className="vertical-separator"></span>
                <div className="item-location special">RA2-2</div>
              </div>

              <button className="details-toggle">
                <img className='dots-icon' src={DotsIcon} alt="..." />
              </button>

              <div className="bottom-section box closed">
                <img src={Picture} alt="" className="picture" />

              </div>

            </div>

            <div className="list-item box">
              <div className="top-section">
                <div className="item-time">1:00 PM</div>
                <span className="vertical-separator"></span>
                <div className="item-title">Databases And Algorithms</div>
                <span className="vertical-separator"></span>
                <div className="item-location special">RB6</div>
              </div>

              <button className="details-toggle">
                <img className='dots-icon' src={DotsIcon} alt="..." />
              </button>

              <div className="bottom-section box closed">
                <img src={Picture} alt="" className="picture" />

              </div>

            </div>

            <div className="separator-title-container">
              <span className="separator"></span>
              <div className="separator-title">Friday</div>
              <span className="separator"></span>
            </div>

            <div className="list-item box">
              <div className="top-section">
                <div className="item-time">1:00 PM</div>
                <span className="vertical-separator"></span>
                <div className="item-title">Business Communication</div>
                <span className="vertical-separator"></span>
                <div className="item-location special">RB4</div>
              </div>

              <button className="details-toggle">
                <img className='dots-icon' src={DotsIcon} alt="..." />
              </button>

              <div className="bottom-section box closed">
                <img src={Picture} alt="" className="picture" />

              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default SchedulePage;