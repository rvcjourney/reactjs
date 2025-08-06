import battery from "../assets/battery.png";
import pccv from "../assets/pccv.png";
import twowheel from "../assets/twowheel.png";


const MainiAuto = () => {
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    <span className="text-danger">M</span>aini{" "}
                    <span className="text-danger">A</span>uto Agencies Pvt. Ltd.
                </h2>
                <p className="lead text-dark fw-semibold">
                    Your Trusted Source for Quality Auto Parts
                </p>
            </div>

            {/* Company Description */}
            <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                <h5 className="mb-3 fw-bold text-primary">Who We Are</h5>
                <p className="text-muted" style={{textAlign:'justify'}}>
                    Maini Auto Agencies (MAA), an integral part of the Maini Group, is a
                    leading distributor of top-tier auto parts and solutions. We serve a
                    diverse clientele with dedicated divisions for Passenger Vehicles,
                    Heavy Commercial Vehicles, and Two-Wheelers.
                </p>
                <p className="text-muted"style={{textAlign:'justify'}} >
                    At MAA, we provide more than just products—we deliver peace of mind.
                    With an extensive product range, authorized brand partnerships, and a
                    commitment to customer satisfaction, we stand out in the automotive
                    aftermarket industry.
                </p>
            </div>

            {/* Product Highlight: Battery Division */}
            <div className="row align-items-center bg-light pt-4">
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-semibold text-primary">Battery Division</h5>
                    <p className="text-muted" style={{textAlign:'justify'}}>
                        Our Battery Division features industry-leading products from trusted
                        brands. Whether for commercial fleets or personal vehicles, we
                        ensure quality, longevity, and performance with every battery we
                        supply.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={battery}
                        alt="Battery"
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                </div>
            </div>
            <div className="row align-items-center bg-light pt-4">
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-semibold text-primary">Passenger & Commercial Vehicle Division</h5>
                    <p className="text-muted" style={{textAlign:'justify'}}>
                        Our Passenger & Commercial Division features industry-leading products from trusted
                        brands. Whether for commercial fleets or personal vehicles, we
                        ensure quality, longevity, and performance with every battery we
                        supply.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={pccv}
                        alt="Passenger & Commercial"
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                </div>
            </div>
            <div className="row align-items-center bg-light pt-4">
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-semibold text-primary">Two Wheeler Division</h5>
                    <p className="text-muted" style={{textAlign:'justify'}}>
                        Our Battery Division features industry-leading products from trusted
                        brands. Whether for commercial fleets or personal vehicles, we
                        ensure quality, longevity, and performance with every battery we
                        supply.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={twowheel}
                        alt="Two Wheeler"
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainiAuto;
