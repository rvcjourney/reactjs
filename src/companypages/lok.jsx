import lokvehicle from '../assets/lokvehicle.png';
import lokservice from '../assets/lokservice.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const lok = () => {
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    <span className="text-danger">L</span>OK{" "}
                    <span className="text-danger">E</span>nterprises
                </h2>
                <p className="lead text-dark fw-semibold">
                    Authorized Ashok Leyland Service Centre
                </p>
            </div>

            <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                <h5 className="mb-3 fw-bold text-primary">Who We Are</h5>
                <p className="text-muted" style={{textAlign:'justify'}}>
                    Welcome to Lok Enterprises, where state-of-the-art technology meets hands-on expertise. As an authorized service center for Ashok Leyland, we specialize in giving your vehicles the care they deserve, ensuring they deliver the performance you need.
                </p>
                <p className="text-muted" style={{textAlign:'justify'}}>
                    Our services go beyond standard care: we offer advanced solutions including wheel alignment with cutting-edge camera technology, air suspension services, and more, all performed by our team of highly trained technicians.
                </p>
            </div>

            <div className="row align-items-center bg-light p-2">
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-semibold text-primary">Services</h5>
                    <ul className="list-unstyled ps-3">
                        <li className="mb-2">
                            ✅ Advanced wheel alignment with camera precision
                        </li>
                        <li className="mb-2">
                            ✅  Air suspension servicing
                        </li>
                        <li className="mb-2">
                            ✅ Routine inspections, engine diagnostics, and genuine parts replacement & etc..
                        </li>
                    </ul>
                    <p className="text-muted" style={{textAlign:'justify'}}>
                        With a team of trained technicians and access to genuine Spare parts, we ensure your vehicles stay roadworthy, fuel-efficient, and reliable — minimizing downtime and maximizing performance.
                    </p>

                    <img
                        src={lokvehicle}
                        alt="lokvehicle"
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={lokservice}
                        alt="lokservice"
                        className="img-fluid"
                        style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                </div>
            </div>

            <div className="container my-4">
                <h5 className="fw-semibold mb-4 text-primary">Our Branches</h5>

                <div className="row g-4">
                    {/* Katraj Branch */}
                    <div className="col-md-12">
                        <div className="bg-light p-2 h-100">
                            <h4 className="text-danger mb-3">Lonikand</h4>
                            <p className="mb-1 text-muted">
                                <FaLocationDot size={23} className="me-2" />
                                Get No, 320/5 M,No.2341,
                                Near Bandal Petrol Pump, Pune
                                Nagar Road, lonikand, Pune - 412216<br />
                            </p>
                            <p className="mb-1 text-muted">
                                <IoCall size={22} className="me-2" /><span className="fw-medium">8600010199, 9860588783</span>
                            </p>
                            <p className="mb-1 text-muted">
                               <MdEmail size={22} className="me-2" /><span className="fw-medium">heritageexportskatraj@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default lok;