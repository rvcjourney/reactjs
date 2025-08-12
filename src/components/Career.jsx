import job from '../assets/job.png';

const Career = () => {
    return (
        <div className="container mt-5 py-5">
            {/* <hr /> */}
            <div className="container py-2">
                <h2 className="text-center fw-bold mb-4 gap-3 align-items-center justify-content-center">
                    Join the <span className="text-danger">M</span>aini <span className="text-danger">G</span>roup Team
                    <img src={job} className="img-fluid" style={{height:'120px',width:'120px'}}/>
                </h2>

                <p className="fs-5 text-muted mb-3" style={{ textAlign: 'justify' }} >
                    At <span className="text-danger">M</span>aini <span className="text-danger">G</span>roup of Automobile Industry, we are always looking for passionate and skilled individuals to join our growing team. Whether you're a technician, manager, or aspiring professional, explore opportunities to work in a dynamic and rewarding environment.
                </p>

                <div className="row mb-3">
                    <div className="row g-4">
                        <h3 className="fw-bold mb-4 text-primary">Our Current Openings !!</h3>
                        {/* Sales Executive */}
                        <div className="col-md-6 col-12">
                            <div className="card h-100 shadow border-0 rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Sales Executive </h5>
                                    <p className="card-text text-muted" style={{ textAlign: 'justify' }}>
                                        Responsible for driving sales of spare parts through direct customer interaction, maintaining relationships with dealers, and achieving targets.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3" style={{ textAlign: 'justify' }}>
                                        <li>• Generate leads and convert them into sales</li>
                                        <li>• Maintain dealer/distributor relationships</li>
                                        <li>• Track inventory and demand trends</li>
                                        <li>• Provide product knowledge to customers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Warehouse Manager */}
                        <div className="col-md-6 col-12">
                            <div className="card h-100 shadow border-0 rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Warehouse Maintainer – Spare Parts Logistics</h5>
                                    <p className="card-text text-muted" style={{ textAlign: 'justify' }}>
                                        Oversee warehouse operations, ensure timely dispatch of parts, maintain stock levels, and lead the logistics team.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3" style={{ textAlign: 'justify' }}>
                                        <li>• Inventory and stock management</li>
                                        <li>• Team Working and scheduling</li>
                                        <li>• Process optimization and workflow management</li>
                                        <li>• Coordination with suppliers and transporters</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Customer Relationship Executive */}
                        <div className="col-md-6 col-12">
                            <div className="card h-100 shadow border-0 rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Customer Relationship Executive</h5>
                                    <p className="card-text text-muted" style={{ textAlign: 'justify' }}>
                                        Build and maintain strong customer relationships, handle inquiries, and ensure high customer satisfaction levels.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3" style={{ textAlign: 'justify' }}>
                                        <li>• Attend to customer queries and concerns</li>
                                        <li>• Follow up on service feedback</li>
                                        <li>• Maintain CRM records</li>
                                        <li>• Coordinate with service and sales teams</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Digital Marketing Intern */}
                        <div className="col-md-6 col-12">
                            <div className="card h-100 shadow border-0 rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Digital Marketing Intern</h5>
                                    <p className="card-text text-muted" style={{ textAlign: 'justify' }} >
                                        Assist in executing digital marketing campaigns, content creation, and social media management for brand visibility.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3" style={{ textAlign: 'justify' }}>
                                        <li>• Support in SEO and SEM tasks</li>
                                        <li>• Manage social media channels</li>
                                        <li>• Track and analyze campaign metrics</li>
                                        <li>• Content writing and scheduling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-12 mb-5 mt-5">
                        <div className="p-4 bg-light rounded-3 shadow-sm">
                            <h3 className="fw-bold mb-4 text-primary">Why Work With Us?</h3>
                            <ul className="ps-3" style={{ textAlign: 'justify' }}>
                                <li className="mb-3">
                                    <strong>Top Brands Exposure:</strong> Work with leading vehicle spare parts brands that drive the automotive industry.
                                </li>
                                <li className="mb-3">
                                    <strong>Positive Work Culture:</strong> Experience a supportive, inclusive, and team-first environment.
                                </li>
                                <li className="mb-3">
                                    <strong>Learning & Growth:</strong> Regular opportunities for training, career development, and upskilling.
                                </li>
                                <li className="mb-3">
                                    <strong>Earn More:</strong> Attractive performance-based salary growth.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <h4 className="fw-bold mb-3">Apply Now</h4>
                    <p className="text-muted mb-4 ">
                        <h5>Please click the 'Send Email' button below to apply for your desired position.</h5>  {/*Hr Email Need to changes...below */}
                    </p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mainiautoagency@gmail.com&su=Job%20Application%20from%20Website&body=Dear%20[Hiring%20Manager/Team],%0A
I%20am%20writing%20to%20express%20my%20interest%20in%20the%20[Job%20Title/Designation]%20position.%0AI%20would%20appreciate%20the%20opportunity%20to%20learn%20more%20about%20this%20role.%0APlease%20find%20my%20resume%20attached%20for%20your%20review.%0A%0A(%20Note%20:%20%20Please%20add%20your%20Resume%20).." 
                        className="btn btn-primary btn-lg px-4 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                    >Send Email</a>
                </div>
            </div>

        </div>

    );
};

export default Career;
