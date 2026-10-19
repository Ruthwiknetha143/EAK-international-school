import React from 'react'
import { WHYUS } from '../data/content'

const Whyus = () => {
    return (
        <section id='why-us' className=" py-5">
            <div className="container py-5">
                <h1 className='text-center second-c fw-bold'>Why Choose Us?</h1>
                <p className='text-center mb-4'>Six reasons families trust us with their children's most important years.</p>
                <div className="row g-3">
                    {WHYUS.map(value => {
                        return (
                            <>
                                <div className="col-md-4">
                                    <div className="card p-2">
                                        <div className="card-body">
                                            <i className={`bi bi-${value.logo} fs-1 primary-c`}/>
                                            <h5 className="card-title fw-bold second-c">
                                                {value.title}
                                            </h5>
                                            <div className="card-text">
                                                {value.desc}
                                            </div>
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

export default Whyus
