
const Career = () => {
    return (
        <div className="container mt-5 py-5">
            <hr />
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-4">
                    Join the <span className="text-danger">M</span>aini <span className="text-danger">G</span>roup Team
                </h2>

                <p className="text-center fs-5 text-muted mb-5">
                    At <span className="text-danger">M</span>aini <span className="text-danger">G</span>roup of Automobile Industry, we are always looking for passionate and skilled individuals to join our growing team. Whether you're a technician, manager, or aspiring professional, explore opportunities to work in a dynamic and rewarding environment.
                </p>

                <div className="row mb-5">
                    <div className="row g-4">
                        <h3 className="fw-bold mb-4 text-primary">Our Current Openings !!</h3>
                        {/* Sales Executive */}
                        <div className="col-md-6 col-12">
                            <div className="card h-100 shadow border-0 rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Sales Executive </h5>
                                    <p className="card-text text-muted">
                                        Responsible for driving sales of spare parts through direct customer interaction, maintaining relationships with dealers, and achieving targets.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3">
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
                                    <h5 className="card-title text-danger fw-bold">Warehouse Maintiner – Spare Parts Logistics</h5>
                                    <p className="card-text text-muted">
                                        Oversee warehouse operations, ensure timely dispatch of parts, maintain stock levels, and lead the logistics team.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3">
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
                                    <p className="card-text text-muted">
                                        Build and maintain strong customer relationships, handle inquiries, and ensure high customer satisfaction levels.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3">
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
                                    <p className="card-text text-muted">
                                        Assist in executing digital marketing campaigns, content creation, and social media management for brand visibility.
                                    </p>
                                    <h6 className="fw-semibold">Key Responsibilities:</h6>
                                    <ul className="list-unstyled ms-3">
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
                            <ul className="ps-3">
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
                    <p className="text-muted mb-4">
                        Add your resume to email <strong>hr@mainigroup.com</strong> after you click button..
                    </p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mainiautoagency@gmail.com&su=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20designation%20and%20this%20is%20my%20resume..." className="btn btn-primary btn-lg px-4 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >Send Resume</a>
                    {/* <a href="mailto:hr@mainigroup.com" className="btn btn-danger btn-lg px-4 py-2">
                        
                    </a> */}
                </div>
            </div>

        </div>

    );
};

export default Career;
