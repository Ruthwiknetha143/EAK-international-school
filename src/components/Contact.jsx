import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-5'>
            <div className="py-5">
                <div className="container py-5">
                    <div className="text-center mb-4 text-white">
                        <h1>Give Your Child a Future-Ready Education</h1>
                        <p className='py-3 fs-5'>Empower your child with quality education, experienced teachers, and a nurturing environment that inspires curiosity, builds confidence, and prepares them for a brighter tomorrow.</p>
                    </div>
                    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                        <button type='button' data-bs-toggle="modal" data-bs-target="#EnquiryModal" className='btn btn-primary second-c fw-bold rounded-pill px-5'>Apply Now</button>
                        <button type='button' data-bs-toggle="modal" data-bs-target="#EnquiryModal" className='btn btn-light rounded-pill px-5'>Book a Campus Visit</button>
                        <button type='button' data-bs-toggle="modal" data-bs-target="#EnquiryModal" className='btn btn-light rounded-pill px-5'>Talk to Our Admissions Team</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
