import React from 'react'
import { FEES } from '../data/content'

const Fees = () => {
    return (
        <section id='fees' className='py-5'>
            <div className="container py-5">
                <h1 className='text-center second-c'>Fee Information</h1>
                <p className='text-center mb-5'>Clear, simple fees with no hidden charges.</p>
                <div className="desktop-table">
                    <table>
                        <tr>
                            <th>GRADE</th>
                            <th>ANNUAL FEE</th>
                            <th>ADMISSION FEE</th>
                        </tr>
                        {FEES.map(value => {
                            return (
                                <>
                                    <tr>
                                        <td className='second-c fw-bold'>Grade {value.grade}</td>
                                        <td>Rs. {value.annual}</td>
                                        <td>Rs. {value.admission}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </table>
                </div>
                <div className="mobile-table">
                    {FEES.map(value => {
                        return (
                            <>
                                <div className='mobile-card'>
                                    <div>
                                        <p className='fw-bold text-white mt-2'>Grade {value.grade}</p>
                                    </div>
                                    <div className='p-2'>
                                        <p>Annual: Rs. {value.annual}</p>
                                        <p>Admission: Rs. {value.admission}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <p className='text-secondary py-2'>Footnote: sample figures for preview only</p>
            </div>
        </section>
    )
}

export default Fees
