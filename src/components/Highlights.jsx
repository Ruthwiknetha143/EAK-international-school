import React from 'react'
import { NUMBERS } from '../data/content'

const Highlights = () => {
    return (
        <section id='highlights' className='text-white text-center py-5'>
            <div className="py-5">
                <div className="container py-5">
                    <p className='m-0'>At a glance</p>
                    <h1 className='mb-4'>School Highlights</h1>
                    <div className="row py-5 g-3">
                        {NUMBERS.map(value => {
                            return (
                                <>
                                    <div className="col-6 col-md-2">
                                        <h1 className='primary-c fw-bold'>{value.number}</h1>
                                        <p className='text-capitalize'>{value.desc}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights
