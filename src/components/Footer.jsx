import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container py-5 text-white">
                <div className="row gap-5 py-5">
                    <div className="col-md-4">
                        <img src="/logo-white.png" width="110" className="img-fluid mb-3" />
                        <p className='py-2'>A nurturing learning community committed to academic excellence, creativity, and the all-round development of every student.</p>
                        <div className='d-flex gap-3'>
                            <a href="#" className='text-white fs-1'><i class="bi bi-facebook"></i></a>
                            <a href="#" className='text-white fs-1'><i class="bi bi-instagram"></i></a>
                            <a href="#" className='text-white fs-1'><i class="bi bi-youtube"></i></a>
                            <a href="#" className='text-white fs-1'><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className='primary-c mb-4'>Contact Us</h5>
                        <div>
                            <p className='m-0 fw-bold'>Address</p>
                            <p>123 Knowledge Avenue, Green Park, Hyderabad, Telangana – 500001</p>
                            <p className='m-0 fw-bold'>Phone</p>
                            <p>+91 98765 43210</p>
                            <p className='m-0 fw-bold'>Email</p>
                            <p>admissions@brightfuture.example</p>
                            <p className='m-0 fw-bold'>Office Hours</p>
                            <p>Monday–Saturday: 9:00 AM–4:00 PM <br />
                                Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className='primary-c mb-4'>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="#" className='text-white text-decoration-none'>Back To Top</a></li>
                            <li className='mb-2'><a href="#why-us" className='text-white text-decoration-none'>Why Us</a></li>
                            <li className='mb-2'><a href="#programs" className='text-white text-decoration-none'>Programs</a></li>
                            <li className='mb-2'><a href="#facilities" className='text-white text-decoration-none'>Facilities</a></li>
                            <li className='mb-2'><a href="#process" className='text-white text-decoration-none'>Admissions Process</a></li>
                            <li className='mb-2'><a href="#fees" className='text-white text-decoration-none'>Fees</a></li>
                            <li className='mb-2'><a href="#faqs" className='text-white text-decoration-none'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
