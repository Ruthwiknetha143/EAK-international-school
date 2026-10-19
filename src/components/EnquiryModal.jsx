
import React, { useState } from "react";

const EnquiryModal = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const grades = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Enquiry submitted:", data);

        setIsSubmitted(true);
        e.target.reset();
    };

    const handleClose = () => {
        setIsSubmitted(false);
    };

    return (
        <div
            className="modal fade"
            id="EnquiryModal"
            tabIndex="-1"
            aria-labelledby="EnquiryModalLabel"
            aria-hidden="true"
            onHidden={handleClose}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="EnquiryModalLabel"
                        >
                            Contact Form
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
                        />
                    </div>

                    <div className="modal-body">
                        {isSubmitted ? (
                            <div
                                className="alert alert-success py-2 mb-0"
                                role="status"
                            >
                                <strong>✓ Success!</strong> Your enquiry
                                has been submitted successfully.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="parentName"
                                            className="form-control"
                                            placeholder="Parent name"
                                            aria-label="Parent name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone number"
                                            aria-label="Phone number"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email address"
                                            aria-label="Email address"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="childName"
                                            className="form-control"
                                            placeholder="Child name"
                                            aria-label="Child name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            name="grade"
                                            className="form-select"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                Grade applying for
                                            </option>

                                            {grades.map((grade) => (
                                                <option
                                                    key={grade}
                                                    value={grade}
                                                >
                                                    Grade {grade}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            name="referralSource"
                                            className="form-select"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                How did you hear about us?
                                            </option>
                                            <option value="Google Search">
                                                Google Search
                                            </option>
                                            <option value="Social Media">
                                                Social Media
                                            </option>
                                            <option value="Friend or Family">
                                                Friend or Family
                                            </option>
                                            <option value="School Event">
                                                School Event
                                            </option>
                                            <option value="Advertisement">
                                                Advertisement
                                            </option>
                                            <option value="Other">
                                                Other
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            placeholder="Your message (optional)"
                                            aria-label="Your message"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="personalisedSuggestions"
                                                name="personalisedSuggestions"
                                                value="yes"
                                                className="form-check-input"
                                            />

                                            <label
                                                htmlFor="personalisedSuggestions"
                                                className="form-check-label"
                                            >
                                                I agree to receive personalised
                                                suggestions for my child.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer px-0 pb-0 mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit Enquiry
                                    </button>
                                </div>
                            </form>
                        )}

                        {isSubmitted && (
                            <div className="modal-footer px-0 pb-0 mt-3">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={handleClose}
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;