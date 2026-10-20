import React from 'react'
import { PROGRAMS } from '../data/content'

const Programs = () => {
    return (
        <section id='programs' className='py-5'>
            <div className="container py-5">
                <h1 className='text-center second-c'>Academic Programs</h1>
                <p className='text-center mb-4'>Four stages, one continuous journey from first day to graduation.</p>
                <div className="row g-3">
                    {PROGRAMS.map(value => {
                        return (
                            <>
                                <div className="col-md-6">
                                    <div className="card p-3">
                                        <div className="card-body">
                                            <h4 className='card-title second-c'>{value.title}</h4>
                                            <hr />
                                            <p className='card-subtitle primary-c'>{value.grade}</p>
                                            <p className='my-3'>{value.desc}</p>
                                            <ul>
                                                <li>{value.l1}</li>
                                                <li>{value.l2}</li>
                                                <li>{value.l3}</li>
                                                <li>{value.l4}</li>
                                            </ul>
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

export default Programs
