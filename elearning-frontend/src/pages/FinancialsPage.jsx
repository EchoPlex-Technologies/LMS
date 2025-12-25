import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';
import './FinancialsPage.css'

function FinancialsPage() {
  return (
    <>
      <Header />
      <Sidebar />

      <h1>Financials page</h1>
      <iframe src="https://www.example.com" width="600" height="400" title="Description of the embedded website">
        <p>Your browser does not support iframes.</p>
      </iframe>


    </>
  );
}

export default FinancialsPage;