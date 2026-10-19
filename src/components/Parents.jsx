
import React, { useState } from 'react'
import { TESTIMONIALS } from '../data/content'

const Parents = () => {
  const [active, setActive] = useState(0)

  return (
    <section id='testimonials' className='py-5'>
      <div className="py-5">
        <div className="container py-5">
          <p className='text-center text-white m-0'>Parent voices</p>
          <h1 className="text-center mb-5 text-white">
            What Parents Say
          </h1>

          <div className="d-md-none">
            <div className="card shadow-sm border-1">
              <div className="card-body p-4">
                <div className="text-warning fs-5 mb-3">
                  ★★★★★
                </div>

                <p className="card-text text-secondary">
                  "{TESTIMONIALS[active].review}"
                </p>

                <hr />

                <h6 className="mb-1">
                  {TESTIMONIALS[active].name}
                </h6>
                <small className="text-muted">
                  {TESTIMONIALS[active].grade}
                </small>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() =>
                  setActive(
                    (active - 1 + TESTIMONIALS.length) %
                    TESTIMONIALS.length
                  )
                }
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              <span className="small text-white">
                {active + 1} / {TESTIMONIALS.length}
              </span>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() =>
                  setActive(
                    (active + 1) % TESTIMONIALS.length
                  )
                }
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          <div className="row g-4 d-none d-md-flex">
            {TESTIMONIALS.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm border-1">
                  <div className="card-body p-4">
                    <div className="text-warning fs-5 mb-3">
                      ★★★★★
                    </div>

                    <p className="card-text text-secondary">
                      "{item.review}"
                    </p>

                    <hr />

                    <h6 className="mb-1">{item.name}</h6>
                    <small className="text-muted">
                      {item.grade}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parents
