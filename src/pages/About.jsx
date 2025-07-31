import aboutimage from '../assets/Brands/aboutimage.png';
import mainiauto from '../assets/Brands/MainiAutoAgenciesLogo.svg';
import HeritageExporstLogo from '../assets/Brands/HeritageExportsLogo.svg';
import MainiAutoIncorporationLogo from '../assets/Brands/MainiAutoIncorporationLogo.svg';
import LokEnterprisesLogo from '../assets/Brands/LokEnterprisesLogo.svg';
import parts from '../assets/Icon/parts.png';
import group from '../assets/Icon/group.png';
import customer from '../assets/Icon/customer.png';
import work from '../assets/Icon/work.png';
import '../design/Home.css';


const About = () => {
    return (
        <div>
            <div className="container my-5 pt-5">
                <hr />
                <div className="row align-items-center justify-content-center mt-5 pt-3">
                    {/* <hr className='m-3 mt-5' /> */}
                    <div className=' col-md-6 mb-4'>
                        <h2 className="fw-bold text-center"><span className='text-danger'>A</span>bout <span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                            Helping businesses <span className="bg-green-200 px-1">succeed</span> through the power .
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Maini Auto Agencies Pvt. Ltd. led by Mr. Virmeet (Bobby) Singh Maini & Jaspreet (Mintu) Singh Maini decided to break-away from the traditional mindset of doing business where companies have engaged in head-to-head competition in search of sustained, profitable growth. We realized that these hallmarks of competitive strategy were not the way to create profitable growth in the future.
                        </p>

                    </div>

                    <div className="col-md-6 mb-4">
                        <img
                            src={aboutimage}
                            alt="About Maini Group"
                            // className="img-fluid rounded shadow"
                            className="rounded-xl shadow-lg img-fluid"
                            style={{maxHeight:"600px",}}
                        />
                    </div>

                    
                    <h3 className="text-center fw-bold mt-5">Our Achivement</h3>
                    <div className="achievement-section py-5">
                        {/* <h3 className="text-center text-white mb-4">What We Achieve</h3> */}
                        <div className="container">
                            <div className="row justify-content-center text-center g-4">
                                <div className="col-6 col-md-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={parts} alt="Parts Icon" className="icon-img" />
                                        </div>
                                        <h5 className="stat-number">30,000+</h5>
                                        <p className="stat-label">Parts</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={customer} alt="Customers Icon" className="icon-img" />
                                        </div>
                                        <h5 className="stat-number">1500+</h5>
                                        <p className="stat-label">Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={group} alt="Companies Icon" className="icon-img" />
                                        </div>
                                        <h5 className="stat-number">4</h5>
                                        <p className="stat-label">Group Companies</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={work} alt="Workforce Icon" className="icon-img" />
                                        </div>
                                        <h5 className="stat-number">240+</h5>
                                        <p className="stat-label">Strong Workforce</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-5">
                        <h3 className="text-center fw-bold mb-4">Our Group of Companies</h3>

                        <div className="row g-4 justify-content-center mt-5">
                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={mainiauto} className="img-fluid rounded" alt="Maini Auto" />
                                    <h6 className="mt-3 fw-semibold">Maini Auto</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={HeritageExporstLogo} className="img-fluid rounded" alt="Heritage Exports" />
                                    <h6 className="mt-3 fw-semibold">Heritage Exports</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={MainiAutoIncorporationLogo} className="img-fluid rounded" alt="Maini Auto Inc." />
                                    <h6 className="mt-3 fw-semibold">Maini Auto Inc.</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={LokEnterprisesLogo} className="img-fluid rounded" alt="Lok Enterprises" />
                                    <h6 className="mt-3 fw-semibold">Lok Enterprises</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};
export default About;
