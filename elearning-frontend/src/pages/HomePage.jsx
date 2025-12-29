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
          <div className="box box-1"></div>
          <div className="box-2"></div>
        </div>

      </div>



    </>
  );
}

export default HomePage;