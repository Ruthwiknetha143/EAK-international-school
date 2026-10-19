import React from 'react'
import { FAQS } from '../data/content'

const FAQs = () => {
    return (
        <section id='faqs' className='py-5'>
            <div className="container py-5">
                <p className='text-center m-0'>Got questions?</p>
                <h1 className='text-center second-c mb-4'>Frequently Asked Questions</h1>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    {FAQS.map((value, index) => {
                        return (
                            <>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed second-c" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + index} aria-expanded="false" aria-controls={"flush-collapse" + index}>
                                            {value.que}
                                        </button>
                                    </h2>
                                    <div id={"flush-collapse" + index} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            {value.ans}
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

export default FAQs
