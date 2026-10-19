import React, { useState } from 'react'
import { DOCS } from '../data/content'

const Required = () => {

    const [checkedDocs, setCheckedDocs] = useState([])

    const onChange = (doc) => {
        setCheckedDocs(prev =>
            prev.includes(doc)
                ? prev.filter(item => item !== doc)
                : [...prev, doc]
        )
    }

    const ready = checkedDocs.length

    return (
        <section id="required" className='pt-5'>
            <div className="container text-white">
                <h1 className="text-center">
                    Required Documents
                </h1>
                <p className='text-center mb-5 mb-0'>Keep these ready before you apply. Tick each one off as you collect it.</p>

                <div className="row g-3 align-items-center">
                    <div className="col-md-6">
                        {DOCS.map(value => (
                            <div>
                                <div className="d-flex flex-row align-items-center py-3 gap-3 border-0">
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="check"
                                            checked={checkedDocs.includes(value)}
                                            onChange={() => onChange(value)}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-capitalize mb-1">
                                            {value}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h4 className='py-3 primary-c'>{ready} out of {DOCS.length} ready</h4>
                    </div>
                    <div className="col-md-6">
                        <img src="../public/Required-Documents.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Required
