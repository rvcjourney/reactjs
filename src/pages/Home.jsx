// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
import Circle from '../components/Circle.jsx';
import '../design/Home.css';
import { IoPricetags } from "react-icons/io5";
import { FaBoxOpen, FaTools } from "react-icons/fa";
import { MdGroups, MdStarRate, MdHistory, MdTrendingUp } from 'react-icons/md';
import twowheeler from '../assets/twowheeler.png';
import car from '../assets/car.png';
import truck from '../assets/truck.png';
import tractor from '../assets/tractor.png';
// import mainivideo from '../assets/mainivideo.mp4';
import mainiauto from '../assets/Brands/MainiAutoAgenciesLogo.svg';
import HeritageExporstLogo from '../assets/Brands/HeritageExportsLogo.svg';
import MainiAutoIncorporationLogo from '../assets/Brands/MainiAutoIncorporationLogo.svg';
import LokEnterprisesLogo from '../assets/Brands/LokEnterprisesLogo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">
        {/* <Navbar /> */}
        <div className="hero-content">
          <h4>Welcome to <b><span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup Of Automobile Industry </b></h4>
          <h1>Trusted Wholesaler of <br /> Genuine Vehicle Spare Parts</h1>
          <button className="hero-btn">Explore Products</button>
        </div>
      </div>

      <div className="homepage">
        {/* About Us Section */}
        <section className="about-section py-5 bg-white text-dark">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center mt-2">
                  <FaTools className="text-warning" /> About <span className="text-danger">Maini Group</span>
                </h3>

                <p className="text-gray-700 leading-relaxed flex items-start gap-2 mt-3">
                  <MdStarRate size={20} className="text-warning me-2" />
                  <span>
                    <strong>Maini Group</strong> is a symbol of excellence in the distribution of automobile spares.
                    With a commitment to <em>"Better Everyday"</em>, we consistently deliver quality and customer satisfaction.
                  </span>
                </p>

                <p className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <MdHistory size={20} className="text-warning me-2" />
                  <span>
                    <strong>Founded in 1992</strong>, we have grown through market changes with resilience and passion,
                    becoming a leading name in Pune's automotive aftermarket.
                  </span>
                </p>

                <p className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <MdTrendingUp size={20} className="text-warning me-2" />
                  <strong>Our Vision</strong> is to lead the modern evolution of the automotive parts industry by setting
                  new standards in <strong>Innovation</strong> and <strong>Distribution</strong>.
                </p>

                <button className="btn btn-warning mt-2 mb-3 hover:shadow-lg transition-all duration-300 mx-auto">
                  Learn More
                </button>

              </div>

              <div className="col-md-6">
                {/* <video
                  // src={mainivideo}
                  src='https://drive.google.com/file/d/1rwYS10MkTwUERVS9iMEPADEUjKkVTElg/view?usp=sharing'
                  title="Maini Group Video"
                  className="img-fluid rounded tv-show"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                /> */}
                <iframe
                  src="https://drive.google.com/file/d/1rwYS10MkTwUERVS9iMEPADEUjKkVTElg/preview"
                  width="95%"
                  height="330"
                  allow="autoplay"
                  className="rounded tv-show"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
        <section className="features-section text-dark py-5">
          <div className="container">
            <h3 className='text-center mt-5'>Your Premier Choice for Automotive Excellence</h3>
            <div className="row text-center mt-5">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <MdGroups size={40} className="mb-2" />
                    <h5 className="card-title">Quality Service</h5>
                    <p className="card-text">Our comprehensive service extends beyond sales to include good availability of spares & fixed day fixed route, free of cost deliveries.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <FaBoxOpen size={35} className="mb-3" />
                    <h5 className="card-title">Genuine Spares Parts</h5>
                    <p className="card-text">We proudly distribute a vast array of genuine spares for over 25+ brands across various vehicle categories.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <IoPricetags size={30} className="mb-3" />
                    <h5 className="card-title">Reasonable Pricing</h5>
                    <p className="card-text">We guarantee competitive pricing on a wide range of products and services without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 position-relative service-section text-white">
          <div className="overlay"></div>
          <div className="container position-relative">
            <h2 className="text-center mb-2 fw-bold">Our Group Of Companies</h2>
            <p className="text-center mb-5">Building Excellence Together.....</p>

            <div className="row m-1">
              {[
                { icon: <img src={mainiauto} alt="Company Logo" style={{ maxHeight: "120px" }} /> },
                { icon: <img src={HeritageExporstLogo} alt="Company Logo" style={{ maxHeight: "120px", width: "300px" }} /> },
                { icon: <img src={MainiAutoIncorporationLogo} alt="Company Logo" style={{ maxHeight: "120px" }} /> },
                { icon: <img src={LokEnterprisesLogo} alt="Company Logo" style={{ maxHeight: "120px" }} /> },
              ].map((service, idx) => (
                <div className="col-6 col-md-6 border service-box d-flex justify-content-center align-items-center" key={idx}>
                  {service.icon}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section py-5 bg-white text-dark">
          <div className="container">
            <h3 className="text-center fw-bold mb-5">Leading Automotive Spare Parts</h3>
            <div className="row text-center g-4">

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={twowheeler} alt="Two Wheelers" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Two Wheelers</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={car} alt="Car, Jeep & Utility" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Car,Jeep & Utility</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={truck} alt="LCV/HCV Vehicles" className="img-fluid mb-3" style={{ maxHeight: '140px' }} />
                  <h6 className="fw-bold">LCV/HCV Vehicles</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={tractor} alt="Tractors" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Tractors</h6>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Brands */}
        <section className="facility-section py-5 text-white text-center">
          <div className="container">
            <h2>Authorized Distributors</h2>
            <h4>Passenger Cars, Jeep, Truck, Tractor, Two Wheeler Spares and Accessories</h4>
            <Circle />
            <div className="text-end mt-2">
              <Link to="/brands" className="btn btn-primary">View All <b>→</b></Link>
            </div>

          </div>
        </section>

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;