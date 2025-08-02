import fleetguardfilter from '../assets/fleetguardfilter.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const MainiAutoInc = () => {
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    <span className="text-danger">M</span>aini{" "}
                    <span className="text-danger">A</span>uto Incorporation
                </h2>
                <p className="lead text-dark fw-semibold">
                    Authorized Distributors of Fleetguard Filters
                </p>
            </div>

            {/* Company Description */}
            <div className="bg-white rounded-4 shadow-sm p-3 mb-4">
                <h5 className="mb-3 fw-semibold text-primary">Who We Are</h5>
                <p className="text-muted">
                    At Maini Auto Incorporation, we specialize in keeping your engines clean and protected. As authorized distributors for Fleetguard Filters Pvt. Ltd., we provide top-of-the-line filtration solutions designed to extend the lifespan of your vehicles and machinery.
                </p>
                <p className="text-muted">
                    Located in Katraj and Ahmednagar, our branches are strategically positioned to serve a broad spectrum of clients with efficiency and promptness. Whether you're dealing with heavy-duty industrial equipment, commercial vehicles, or everyday passenger cars, our range of Fleetguard filters offers unparalleled protection against contaminants, ensuring your engines deliver optimal performance.
                </p>
                <div className="col-md-12 text-center">
                    <img
                        src={fleetguardfilter}
                        alt="Battery"
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                </div>
            </div>

            <div className="container my-4">
                <h5 className="fw-semibold mb-4 text-primary">Our Branches</h5>

                <div className="row g-4">
                    {/* Pune Branch */}
                    <div className="col-md-6">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                            <h4 className="text-danger mb-3">Pune</h4>
                            <p className="mb-1 text-muted">
                                <FaLocationDot size={23} className="me-2" />
                                Katraj, Jadhavnagar, Pune 411046
                            </p>
                            <p className="mb-0 text-muted">
                                <IoCall size={22} className="me-2" /><span className="fw-medium">7620901058, 7709002477</span>
                            </p>
                        </div>
                    </div>

                    {/* Ahmednagar Branch */}
                    <div className="col-md-6">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                            <h4 className="text-danger mb-3">Ahmednagar</h4>
                            <p className="mb-1 text-muted">
                                <FaLocationDot size={23} className="me-2" />
                                M R Trade Center, Sector No. 1,
                                Shop No. 11, Wadiya Park Stadium,
                                Tilak Road, Ahmednagar 414001
                            </p>
                            <p className="mb-0 text-muted">
                                <IoCall size={22} className="me-2" /><span className="fw-medium">7709002473</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainiAutoInc;
