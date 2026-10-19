
import React from 'react'
import { STEPS } from '../data/content'

const Process = () => {
    return (
        <section id="process" className="py-5">
            <div className="container py-5">
                <h1 className="text-center second-c">
                    Admission Process
                </h1>
                <p className='text-center mb-5'>Five simple steps from first enquiry to the first day of school.</p>

                <div className="row text-center position-relative">
                    {STEPS.map((value) => (
                        <div
                            className="col-12 col-md-2 process-step mb-4 mb-md-0"
                            key={value.step}
                        >
                            <div className="step mx-auto d-flex align-items-center justify-content-center mb-3">
                                {value.step}
                            </div>

                            <p className="second-c fw-bold mb-0">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
