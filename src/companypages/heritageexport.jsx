import heritageimage from '../assets/heritageimage.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const HeritageExport = () => {
    return (

        <div className="container-fluid">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    <span className="text-danger">H</span>eritage{" "}
                    <span className="text-danger">E</span>xports
                </h2>
                <p className="lead text-secondary">
                    Comprehensive Sales, Service, and R.T.O Authorized Solutions
                </p>
            </div>

            {/* Company Description */}
            <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                <h5 className="mb-3 fw-semibold text-primary">Who We Are</h5>
                <p className="text-muted">
                    Heritage Exports is more than a sales and service center; we are your partners in ensuring your vehicles meet the highest standards of safety, performance, and compliance. Our multifaceted approach includes not only comprehensive sales and top-notch service for brands like Wabco, Cummins, Holset, GRL, and Lucas but also R.T.O authorized services essential for today’s vehicle operations.
                </p>
            </div>

            <div className="row bg-white rounded-4 p-4 align-items-center my-4">
                {/* Text Section */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h3 className="fw-bold text-primary mb-3">R.T.O Authorized Services</h3>
                    <ul className="list-unstyled ps-3">
                        <li className="mb-2">
                            ✅ GPS and VTS Fitment
                        </li>
                        <li className="mb-2">
                            ✅ Fastag Installation
                        </li>
                        <li className="mb-2">
                            ✅ Anti Lock Braking System (ABS) Installation
                        </li>
                        <li className="mb-2">
                            ✅ 3M Reflector Taping
                        </li>
                        <li className="mb-2">
                            ✅ Speed Governor Fitment and Renewal
                        </li>
                    </ul>
                    <p className="text-secondary mt-4">
                        At <strong><span className='text-danger'>H</span>eritage <span className='text-danger'>E</span>xports</strong>, we believe small details make a big difference.
                        Our commitment is to offer meticulous service that ensures your vehicle remains
                        compliant and runs at its best.
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-md-6 text-center">
                    <div className="rounded-3 ">
                        <img
                            src={heritageimage}
                            alt="R.T.O Services"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ maxHeight: "350px", objectFit: "contain" }}
                        />
                    </div>
                </div>
            </div>


            <div className="container my-4">
                <h5 className="fw-semibold mb-4 text-primary">Our Branches</h5>

                <div className="row g-4">
                    {/* Katraj Branch */}
                    <div className="col-md-6">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                            <h4 className="text-danger mb-3">Katraj</h4>
                            <p className="mb-1 text-muted">
                                <FaLocationDot size={23} className="me-2" />
                                Maini Tower, Near Gujarwadi Phata, S.No. 61, Pune - Satara Road, Katraj, Pune-411046
                            </p>
                            <p className="mb-0 text-muted">
                                <IoCall size={22} className="me-2" /> <span className="fw-medium">020-26959027 / 28, 7709002472, 9860588782</span>
                            </p>
                            <p className="mb-0 text-muted">
                                <MdEmail size={22} className='me-2'/><span className="fw-medium">heritageexportskatraj@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Lonikand Branch */}
                    <div className="col-md-6">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                            <h4 className="text-danger mb-3">Lonikand</h4>
                            <p className="mb-1 text-muted">
                                <FaLocationDot size={23} className="me-2" />
                                Get No, 320/5 M,No.2341,Near Bandal Petrol Pump, Pune Nagar Road, lonikand, Pune - 412216
                            </p>
                            <p className="mb-0 text-muted">
                                <IoCall size={22} className="me-2" /> <span className="fw-medium">8600010199, 9860588783</span>
                            </p>
                            <p className="mb-0 text-muted">
                                <MdEmail size={22} className="me-2" /><span className="fw-medium">heritageexportskatraj@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeritageExport;