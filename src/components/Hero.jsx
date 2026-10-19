import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className='text-uppercase text-white fw-bold'>EAK International School</h1>
            <div className=' text-white'>
              <h2>Admissions Open now</h2>
              <h3>Academic Session 2027-28</h3>
              <p>A safe, modern campus where every child is challenged, supported and celebrated, from Grade 1 to Grade 12.</p>
            </div>
            <div className='d-flex pt-2 gap-2'>
              <a data-bs-toggle="modal" data-bs-target="#EnquiryModal" className='btn btn-primary rounded-pill px-4'>Apply Now →</a>
              <a data-bs-toggle="modal" data-bs-target="#EnquiryModal" className='btn btn-light rounded-pill px-4'>Schedule a visit ☎</a>
            </div>
            <div className="row py-4 g-3">
              <div className="col-4">
                <div className="bg-light text-center rounded p-3 shadow-sm">
                  <h1 className='second-c m-0 fw-bold'>28</h1>
                  <p className='mb-0'>Years</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-light text-center rounded p-3 shadow-sm">
                  <h1 className='second-c m-0 fw-bold'>98%</h1>
                  <p className='mb-0'>Results</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-light text-center rounded p-3 shadow-sm">
                  <h1 className='second-c m-0 fw-bold'>1:18</h1>
                  <p className='mb-0'>Ratio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/hero_banner.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
