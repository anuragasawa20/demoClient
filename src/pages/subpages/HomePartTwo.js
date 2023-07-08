import React from 'react';
import "../../styles/HomePartTwo.css";
import demoImage1 from '../../Images/posters/imageThree.jpg';
import demoImage2 from '../../Images/posters/imageFour.jpg';

const HomePartTwo = ({ scholarshipImage, allIndiaRankImage }) => {
    return (
        <>
            <section className="result-declaration-dates" style={{ marginBottom: "10px" }}>
                <div className="auto-log0-continer">
                    <div className="jee2021-jee-advanced fiitjee_eschool_img" style={{ textAlign: "center", margin: "0 auto" }}>
                        <div className="admission-test-date-box mobile-hide" style={{ width: "100%", marginTop: "0px" }}>
                            <div className="test-date-box-head">
                                <div className="sunday-29-date-box-main">
                                    <div className="january-31-date">
                                        <h1 style={{ color: "#fff", textShadow: "0px 1px 1px #000", fontFamily: "Arial Black", fontSize: "42px", lineHeight: "56px" }}>
                                            <strong>
                                                <span style={{ color: "#ffffff" }}>Is JEE 2024 going to be your</span>
                                                <br />
                                                <span style={{ color: "#ffffff" }}>Last Attempt for JEE Advanced?</span>
                                            </strong>
                                        </h1>
                                        <p style={{ fontSize: "21px", textAlign: "center", color: "#000", marginBottom: "5px", lineHeight: "32px", padding: "6px 10px", background: "#fff" }}>
                                            <strong>If Yes, witness how joining a FIITJEE Classroom Program for XII Pass Students to prepare for another attempt of JEE Advanced* (&amp; JEE Main*) proved to be life-changing for these students</strong>
                                        </p>
                                    </div>
                                    <a href="#" target="_blank">
                                        {/* demo image added */}
                                        <img src={demoImage1} style={{ width: "100%" }} alt="Scholarship Image" />
                                    </a>
                                    <div style={{ backgroundColor: "#fff6d6" }}>
                                        <p style={{ fontSize: "14px", textAlign: "center", color: "#000", marginBottom: "0px", lineHeight: "26px", padding: "6px 21px", background: "#fff6d6" }}>
                                            <strong>Dear Students, with FIITJEE's 360° approach to success, you can transform your Rank from 500 to Top 20, 5000 to Top 200, 10000 to Top 500 &amp; 20000 to Top 1000<br />or even better, and if JEE Advanced 2024 (after completing Class XII in 2023) is your first &amp; only attempt even then you will get your best possible transformative All India Rank.</strong>
                                        </p>
                                        <p style={{ fontSize: "8px", textAlign: "center", color: "#ffffff", marginBottom: "0px", padding: "5px", marginTop: "0", float: "right" }}>
                                            *Last 5 years
                                        </p>
                                        
                                        <img src={allIndiaRankImage} alt="All India Rank" style={{ width: "57%", margin: "0 auto" }} />
                                        <p style={{ fontSize: "16px", textAlign: "center", color: "#d81921", marginBottom: "0px", lineHeight: "18px", padding: "12px", background: "#ffffff" }}>
                                            <strong>Give yourself an ideal start for an optimum success in JEE Main &amp; JEE Advanced 2024</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admission-test-date-box desk-hide" style={{ width: "100%", marginTop: "0px" }}>
                            <div className="test-date-box-head">
                                <div className="sunday-29-date-box-main">
                                    <div className="january-31-date">
                                        <h1 style={{ color: "#fff", textShadow: "0px 1px 1px #000", fontFamily: "Arial Black", fontSize: "23px", lineHeight: "28px" }}>
                                            <strong>
                                                <span style={{ color: "#ffffff" }}>Is JEE 2024 going to be your</span>
                                                <br />
                                                <span style={{ color: "#ffffff" }}>Last Attempt for JEE Advanced?</span>
                                            </strong>
                                        </h1>
                                        <p style={{ fontSize: "16px", textAlign: "center", color: "#000", marginBottom: "5px", lineHeight: "26px", padding: "6px 10px", background: "#fff" }}>
                                            <strong>If Yes, witness how joining a FIITJEE Classroom Program for XII Pass Students to prepare for another attempt of JEE Advanced* (&amp; JEE Main*) proved to be life-changing for these students</strong>
                                        </p>
                                    </div>
                                    <a href="https://admissiontest.fiitjee.com/" target="_blank">
                                        {/* demo image added */}
                                        <img src={demoImage2} style={{ width: "100%" }} alt="Scholarship Image" />
                                    </a>
                                    <div style={{ backgroundColor: "#fff6d6" }}>
                                        ```jsx
                                        <p style={{ fontSize: "10px", textAlign: "center", color: "#000", marginBottom: "0px", lineHeight: "21px", padding: "6px 14px", background: "#fff6d6" }}>
                                            <strong>Dear Students, with FIITJEE's 360° approach to success, you can transform your Rank from 500 to Top 20, 5000 to Top 200, 10000 to Top 500 &amp; 20000 to Top 1000 or even better, and if JEE Advanced 2024 (after completing Class XII in 2023) is your first &amp; only attempt even then you will get your best possible transformative All India Rank.</strong>
                                        </p>
                                        <p style={{ fontSize: "8px", textAlign: "center", color: "#ffffff", marginBottom: "0px", padding: "5px", marginTop: "0", float: "right" }}>
                                            *Last 5 years
                                        </p>
                                        
                                        <img src={allIndiaRankImage} alt="All India Rank" style={{ width: "70%", margin: "0 auto" }} />
                                    </div>
                                    <p style={{ fontSize: "10px", textAlign: "center", color: "#d81921", marginBottom: "0px", lineHeight: "18px", padding: "6px", margin: "0", background: "#ffffff" }}>
                                        <strong>Give yourself an ideal start for an optimum success in JEE Main &amp; JEE Advanced 2024</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="admission-test-date-box mobile-hide" style={{ width: "100%", marginTop: "0px" }}>
                            <div className="test-date-box-head">
                                <div className="sunday-29-date-box-main">
                                    <div className="january-31-date">
                                        <h1 style={{ color: "#ffffff", fontSize: "38px", lineHeight: "46px" }}>
                                            <strong>Scholarship cum Admission Test Dates</strong>
                                        </h1>
                                        <h1 style={{ color: "#fff", textShadow: "0px 1px 1px #000", fontFamily: "Arial Black", fontSize: "36px" }}>
                                            <strong>
                                                <span style={{ color: "#ffffff" }}>16<sup>th</sup> July &amp; 30<sup>th</sup> July 2023</span>
                                            </strong>
                                        </h1>
                                        <p style={{ fontSize: "16px", textAlign: "center", color: "#ffffff", marginBottom: "0px", marginTop: "0" }}>
                                            The Test will be conducted through both Offline as well as Proctored Online Mode.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admission-test-date-box desk-hide" style={{ width: "100%", marginTop: "0px" }}>
                            <div className="test-date-box-head">
                                <div className="sunday-29-date-box-main">
                                    <div className="january-31-date">
                                        <h1 style={{ color: "#ffffff", fontSize: "18px", lineHeight: "38px" }}>
                                            <strong>Scholarship cum Admission Test Dates</strong>
                                        </h1>
                                        <h1 style={{ color: "#fff", textShadow: "0px 1px 1px #000", fontFamily: "Arial Black", fontSize: "21px", lineHeight: "28px" }}>
                                            <strong>
                                                <span style={{ color: "#ffffff" }}>2<sup>nd</sup> July &amp; 16<sup>th</sup> July 2023</span>
                                            </strong>
                                        </h1>
                                        <p style={{ fontSize: "10px", textAlign: "center", color: "#ffffff", marginBottom: "0px", marginTop: "0" }}>
                                            The Test will be conducted through both Offline as well as Proctored Online Mode.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePartTwo;
