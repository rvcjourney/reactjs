import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Footer.css'
import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa';
import portlogo from '../assets/portlogo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container">
                <div className="row">
                    {/* Company Description */}
                    <div className="col-lg-4 mb-4 text-center">
                        <div>
                            <img src={portlogo} />
                        </div>
                        {/* <p> */}
                        <h5>Our Vision <br /><br />
                            <span className='text-warning'>To Become Leading Distributor in Automotive Field.</span>
                        </h5>
                        {/* </p> */}
                        <div className="d-flex mt-4 gap-4 fs-4 social-icons justify-content-center">
                            <a href="https://www.facebook.com/Mainiautoagencies/" ><FaFacebookF /></a>
                            <a href="https://www.instagram.com/mainiauto/" ><FaInstagram /></a>
                            <a href="https://youtu.be/j7uE--7SobI?si=CjeCztkHysdMKhdL" ><FaYoutube /></a>
                            <a href="https://in.linkedin.com/in/jaspreet-singh-maini-705a9411" ><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="col-lg-4 col-md-6 mb-2">
                        <h5 className="text-warning">Contact Us</h5>
                        <ul className="list-unstyled">
                            {/* <p><FaLocationDot size={20} className="me-2"/>Survey No.61, Near Gujarwadi Phata, Pune Satara Road, Katraj Pune 411046</p> */}
                            <p>
                                <FaLocationDot size={23} className="me-2" />
                                Survey No.61, Near Gujarwadi Phata,<br />
                                <span className="ms-3">Pune Satara Road, Katraj Pune 411046</span>
                            </p>

                            <p><IoCall size={22} className="me-2" />+91 - 9860878889</p>

                            <p>
                                <MdEmail size={22} className="me-2" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mainiautoagency@gmail.com&su=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    mainiautoagency@gmail.com
                                </a>
                            </p>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-lg-2 col-md-6 mb-2">
                        <h5 className="text-warning">Company</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                            <li><Link to="/newsgallery" className="text-light text-decoration-none">News & Gallery</Link></li>
                            <li><Link to="/career" className="text-light text-decoration-none">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-warning">Support</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                            <li><Link to="#" className="text-light text-decoration-none">FAQs</Link></li>
                            <li><Link to="#" className="text-light text-decoration-none">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-light text-decoration-none">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-top pt-3 mt-3 copyright">
                    <p className="mb-0">Copyright &copy;2025 Maini Group. All Rights Reserved.</p>
                </div>
                <a href="https://wa.me/9860878889" target="_blank" className="floating-whatsapp">
                    <i className="fab fa-whatsapp img-fluid"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;


