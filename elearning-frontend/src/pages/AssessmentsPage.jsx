import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';
import './AssessmentsPage.css'

function AssessmentsPage() {
  return (
    <>
      <Header />
      <Sidebar />

      <h1>Assessments page</h1>
      <iframe src="https://elearning.mmu.ac.ug/login/index.php" width="600" height="400" title="Description of the embedded website">
        <p>Your browser does not support iframes.</p>
      </iframe>


    </>
  );
}

export default AssessmentsPage;