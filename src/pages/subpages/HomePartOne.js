import React from 'react';
import '../../styles/HomePartOne.css';
import demoImage from '../../Images/posters/HomeImageOne.jpg';

const HomePartOne = ({ linkUrl, imageUrl, altText }) => {
    return (
        <>
            <section>
                <div className="auto-log0-continer"
                    style={{
                        padding: "5px 0",
                    }}
                >
                    <div className="container"
                        style={{
                            padding: "0px 10px"
                        }}
                    >
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <table border="1" cellSpacing="0" cellPadding="0" id="customers"
                                    style={{
                                        margin: "15px auto"
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" style={{
                                                fontSize: "17px",
                                                paddingTop: "8px",
                                                paddingBottom: "8px",
                                                textAlign: "center",
                                                backgroundColor: "#ffe8ba",
                                                color: "#a00a57"
                                            }}
                                            >
                                                <strong style={{
                                                    color: "#064163"
                                                }}
                                                >
                                                    Result Declared
                                                </strong></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <strong>Class XI &amp; XII Pass <a href="/login" target="_blank"
                                                    style={{
                                                        color: "#f00",
                                                        fontSize: "15px"
                                                    }}
                                                >
                                                    Click here...</a> </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="auto-log0-continer" style={{ padding: '5px 0' }}>
                    <div className="container">
                        <div className="row">
                            <div
                                style={{
                                    backgroundColor: '#fff6d6',
                                    margin: '0px 10px',
                                    fontFamily: 'Calibri',
                                    fontWeight: 800,
                                }}
                            >
                                <p style={{ fontSize: '15px', color: '#000', padding: '10px', textAlign: 'center' }}>
                                    <strong>
                                        {/* {resultText} */}
                                        Result Declared: To know Your result of Scholarship Cum Admission Test (21st May, 28th May, 4th June,
                                        11th June, 18th June &amp; 25 June 2023)
                                        <a href="https://testresults.fiitjee.com/" target="_blank" style={{ color: '#f00', fontSize: '15px' }}>
                                            Click here...
                                        </a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="auto-log0-continer">
                <div className="jee2021-jee-advanced fiitjee_eschool_img" style={{ textAlign: "center", margin: "0 auto" }}>
                    <a href={linkUrl} target="_blank">

                        {/* add {imageUrl} here */}
                        <img src={demoImage} style={{ width: "100%" }} alt={altText} />
                    </a>
                </div>
            </div>

        </>
    )
}

export default HomePartOne;
