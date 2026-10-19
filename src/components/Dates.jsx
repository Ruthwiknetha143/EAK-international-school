import React from 'react'
import { DATES } from '../data/content'

const Dates = () => {
  return (
    <section id='dates' className='py-5'>
      <div className="container py-5">
        <h1 className='text-center second-c'>Important Dates</h1>
        <p className='text-center mb-4'>Admissions for the 2027-28 session follow this timeline.</p>
        <div className="row g-3 text-center justify-content-center">
          {DATES.map(value => {
            return (
              <>
                <div className="col-md-2 col-12">
                  <div className="card d-flex flex-row flex-md-column second-c">
                    <div className='bg-dark-subtle p-3'>
                      <h1>{value.date}</h1>
                      <h4>{value.month}</h4>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                      <h5 class="card-title">{value.task}</h5>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Dates
