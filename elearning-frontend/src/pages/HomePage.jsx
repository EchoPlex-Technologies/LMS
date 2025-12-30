import './HomePage.css'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <>
      <title>Home</title>
      <Header />
      <Sidebar />

      <div className="page-content">
        <h1 className="page-title">Home</h1>

        <div className="container-1">

          <div className="box up-next">
            <div className="box-title-large">Up next</div>

            <div className="list">
              <div className="separator-title-container">
                <span className="separator"></span>
                <div className="separator-title">Today</div>
                <span className="separator"></span>
              </div>

              <div className="list-item box">
                <div className="item-time">10:00 AM</div>
                <div className="item-title">Math Lecture</div>
                <div className="item-location special">RB4</div>
              </div>

              <div className="list-item box">
                <div className="item-time">1:00 PM</div>
                <div className="item-title">Business Management</div>
                <div className="item-location special">RB5</div>
              </div>

              <div className="separator-title-container">
                <span className="separator"></span>
                <div className="separator-title">Tomorrow</div>
                <span className="separator"></span>
              </div>

              <div className="list-item box">
                <div className="item-time">8:00 AM</div>
                <div className="item-title">Computer Literacy</div>
                <div className="item-location special">RA2-2</div>
              </div>

              <div className="list-item box">
                <div className="item-time">11:00 AM</div>
                <div className="item-title">Databases And Algorithms</div>
                <div className="item-location special">RB6</div>
              </div>

              <div className="list-item box">
                <div className="item-time">1:00 PM</div>
                <div className="item-title">Business Communication</div>
                <div className="item-location special">RB4</div>
              </div>

            </div>

          </div>

          <div className=" box-1">

            <div className="quick-stats">
              <div className="attendance-score box">
                <div className="stat-details">
                  <div className="stat-number">92</div>
                  <div className="stat-unit">%</div>
                </div>

                <div className="box-title-small">Attendance Score</div>
              </div>

              <div className="semester-progress box">
                <div className="stat-details">
                  <div className="stat-number">26</div>
                  <div className="stat-unit">%</div>
                </div>
                <div className="box-title-small">Semester Progress</div>

              </div>

            </div>

            <div className="box pending-assignments">
              <div className="box-title-large">Pending Assignments</div>

              <div className="list">

                <div className="list-item box">
                  <div className="item-details">
                    <div className="item-due">
                      <div className="item-time">10 AM</div>
                      <div className="item-due-date">12th July</div>
                    </div>
                    <div className="item-course special">Business communication</div>
                  </div>

                  <div className="item-name">Activity report</div>
                </div>

                <div className="list-item box">
                  <div className="item-details">
                    <div className="item-due">
                      <div className="item-time">10 AM</div>
                      <div className="item-due-date">12th July</div>
                    </div>
                    <div className="item-course special">Business communication</div>
                  </div>

                  <div className="item-name">Activity report</div>
                </div>

                <div className="list-item box">
                  <div className="item-details">
                    <div className="item-due">
                      <div className="item-time">10 AM</div>
                      <div className="item-due-date">12th July</div>
                    </div>
                    <div className="item-course special">Business communication</div>
                  </div>

                  <div className="item-name">Activity report</div>
                </div>


              </div>

            </div>

          </div>

        </div>

      </div>



    </>
  );
}

export default HomePage;