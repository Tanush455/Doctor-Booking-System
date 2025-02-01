import Header from '../components/Header';
import Speciality from '../components/Speciality';
import TopDoctors from '../components/TopDoctors';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
function Home() {
  return <div>
    <NavBar />
    <Header/>
    <Speciality/>
    <TopDoctors/>
    <Banner/>
    <Footer/>
  </div>;
}
export default Home;
