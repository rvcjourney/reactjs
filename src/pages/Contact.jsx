import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import mobilelogo from '../assets/mobilelogo.png';

const Contact = () => {
    return (
        <div className="container py-5 mt-5">
            <hr />
            <h3 className='my-5 text-center'>Get in Touch With <strong><span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup</strong></h3>
            <div className="row py-5 px-3 rounded border">
                {/* Contact Info Section */}
                <div className="col-md-6 col-12 mb-4">
                    <div className="d-flex flex-column gap-4">
                        <div>
                            <img src={mobilelogo} className="bg-secondary rounded" />
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <FaLocationDot size={35} className="text-primary me-2" />
                            <h5>Maini Tower, Survey No.61, Near Gujarwadi Phata,Pune Satara Road, Katraj Pune 411046</h5> 
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <IoCall size={35} className="text-success" />
                            <h5>020 - 26959027 / 28, 7709002474 / 75</h5>
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <MdEmail size={35} className="text-danger" />
                            <h5>mainiautoagency@gmail.com</h5>
                        </div>

                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="col-md-6 col-12 border rounded py-3">
                    <form className="d-flex flex-column gap-3">
                        <div>
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="form-label">Contact</label>
                            <input type="number" className="form-control" placeholder="Enter your contact number" />
                        </div>
                        <div>
                            <label className="form-label">Query / Message</label>
                            <textarea rows="4" className="form-control" placeholder="Write your message here"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Send Message</button>
                    </form>
                </div>

                {/* <div className="col-md-12 col-12 mt-5">
                    <iframe className="border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60548.061657678496!2d73.8375173534193!3d18.47215709846363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0114518ccdd%3A0x146a886de0042252!2sMaini%20Auto%20Agencies!5e0!3m2!1sen!2sin!4v1698388080041!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
            </div>
            <div className="col-md-12 col-12 mt-5">
                <iframe
                    className="w-100 border rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60548.061657678496!2d73.8375173534193!3d18.47215709846363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0114518ccdd%3A0x146a886de0042252!2sMaini%20Auto%20Agencies!5e0!3m2!1sen!2sin!4v1698388080041!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 1 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maini Auto Agencies Location"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact;