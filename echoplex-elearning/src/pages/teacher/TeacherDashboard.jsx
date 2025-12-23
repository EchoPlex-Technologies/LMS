import './TeacherDashboard.css';

function TeacherDashboard() {
  return (
    <>
      <main>

        <section className="stats-display-container">
          <div className="stats-display">
            <div className="title">
              <div className="indicator class-indicator"></div>
              Next class
            </div>
            <div className="content">
              <div className="count">1</div>
              <div className="info-container">
                <div className="info">
                  <div className="info-title">Year1: Discrete Maths</div>
                  <div className="info-description">
                    <div className="time">13:00</div>
                    <div className="separator"></div>
                    <div className="location">RA5</div>
                    <div className="separator"></div>
                    <div className="date">Today</div>
                  </div>
                  <div className="action-prompt">
                    Click here for timetable
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-display">
            <div className="title">
              <div className="indicator todo-indicator"></div>
              To do
            </div>
            <div className="content">
              <div className="count">3</div>
              <div className="info-container">
                <div className="info">
                  <div className="info-title">Upload Course Work Marks</div>
                  <div className="info-description">
                    <div className="text-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                      dicta
                      dolor quaerat, adipisci vel, culpa facilis eaque quis hic eius delectus dolorem ipsa! Possimus sunt
                      quae veritatis, exercitationem minima libero.</div>
                    <div className="separator"></div>
                    <div className="date">27/11/2025</div>
                  </div>
                  <div className="action-prompt">
                    Click here for details
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="stats-display">
            <div className="title">
              Semester progress
            </div>
            <div className="content">
              <div className="count">45%</div>
            </div>
          </div>
        </section>
        <section className="my-timetable">

        </section>
      </main>
    </>
  );
}

export default TeacherDashboard;