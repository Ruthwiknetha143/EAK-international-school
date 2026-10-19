import React from 'react'
import { FACILITIES } from '../data/content'

const Facilities = () => {
    return (
        <section id='facilities' className='py-5'>
            <div className="container py-5">
                <h1 className='text-center second-c'>Facilties</h1>
                <p className='text-center mb-4'>Everything a growing child needs, all on one safe campus.</p>
                <div className="row g-3">
                    {FACILITIES.map(value => {
                        return (
                            <>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={`../public/${value.img}.jpg`} className='card-img-top img-fluid' loading='lazy' />
                                        <div className="card-body">
                                            <h4 className='card-title second-c'>{value.title}</h4>
                                            <p className='card-text'>{value.desc}</p>
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

export default Facilities
