import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
    const [studentName, setStudentName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [areaPinCode, setAreaPinCode] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleMobileChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (studentName && mobileNumber && selectedClass && areaPinCode) {
            // Form inputs are valid, proceed with form submission
            console.log("Submitting form:", {
                studentName,
                mobileNumber,
                selectedClass,
                areaPinCode,
                remarks,
            });

            // Clear form inputs
            setStudentName("");
            setMobileNumber("");
            setSelectedClass("");
            setAreaPinCode("");
            setRemarks("");
        } else {
            // Display error or validation messages
            console.log("Please fill in all required fields");
        }
    };

    return (
        <div className="contact-us-container" style={{ width: "80%" }}>
            {/* <div className="row"> */}
            <div className="col-md-3">
                <div className="left-side-ads-and-menu pt-3">
                    <h5 className="fw-bold">HEAD OFFICE</h5>
                    <h5>IPEC LTD.</h5>
                    <p>
                        IPEC House, 29-A,Kalu Sarai, Sarvapriya Vihar
                        <br />
                        (Near Hauz Khas Bus Terminal),
                        <br />
                        New Delhi-110016
                    </p>
                    <p>Email: email@example.com</p>
                    <div className="bg-dark text-white p-2 fw-bold">DISTANCE EDUCATION</div>
                    <div className="bg-white p-2 text-secondary Red-change ">
                        <h5>dist.edu@IPEC.com</h5>
                    </div>
                    <div className="bg-dark text-white p-2 fw-bold">
                        APPLY FOR CAREER AT IPEC
                    </div>
                    {/* <p className="email-style">
          <a href="email@example.com">email@example.com</a>
        </p> */}
                    {/* <p className="email-style">
          <a href="email@example.com">email@example.com</a>
        </p> */}
                    <div className="bg-white p-2 text-secondary Red-change ">
                        <h5>careers@IPEC.com</h5>
                    </div>
                    <div className="bg-dark text-white p-1 ">
                        <h4>General Queries</h4>
                    </div>
                    <div className="bg-white p-2 text-secondary Red-change ">
                        <h5>info@IPEC.com</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-1 vertical-line"></div>
            <div className="col-md-8">
                <h2 className="mt-4">Seek Our Support</h2>
                <hr />
                <form className="contact-form bg-light p-4 my-5" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label
                            htmlFor="studentName"
                            className="col-sm-2 col-form-label text-right"
                        >
                            Student Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="text"
                                id="studentName"
                                name="studentName"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="form-control"
                                placeholder="Enter Student Name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="mobileNumber"
                            className="col-sm-2 col-form-label text-right"
                        >
                            Mobile Number
                        </label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="text"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={mobileNumber}
                                onChange={handleMobileChange}
                                className="form-control"
                                placeholder="Enter Mobile Number"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="selectedClass"
                            className="col-sm-2 col-form-label text-right"
                        >
                            Class
                        </label>
                        <div className="col-sm-10">
                            <select
                                id="selectedClass"
                                name="selectedClass"
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                className="form-control"
                            >
                                <option value="">--Select Class--</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12th Pass">12th Pass</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="areaPinCode"
                            className="col-sm-2 col-form-label text-right"
                        >
                            Area Pin Code
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="areaPinCode"
                                name="areaPinCode"
                                value={areaPinCode}
                                onChange={(e) => setAreaPinCode(e.target.value)}
                                className="form-control"
                                placeholder="Enter Area Pin Code"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="remarks"
                            className="col-sm-2 col-form-label text-right"
                        >
                            Remarks
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                id="remarks"
                                name="remarks"
                                rows="2"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                className="form-control"
                                placeholder="Enter Remarks"
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 offset-sm-2">
                            <button
                                type="submit"
                                className="btn btn-warning text-light fw-bold"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* </div> */}
        </div>
    );
};

export default ContactUs;