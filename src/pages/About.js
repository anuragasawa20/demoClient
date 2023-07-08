import React from 'react';
import Carousel from '../components/carousel/Carousel';
import '../styles/About.css';

const About = ({ title, description, aboutUsLink, visionMissionLink, chairmanMessageLink, policiesInfoLink }) => {
    return (
        <>
        <Carousel />
            <div id="inner-CMS-container">
                <div className="Heading-page-container">
                    <h2>
                        <span id="lblMenuTitle" style={{ color: "#c4171b" }}>ABOUT US</span>
                    </h2>
                </div>
                <div className="inner-page-cms-three-part">
                    <div className="Left-cms-container"
                    // style={{ width: '30%' }}
                    >
                        <h4>Downloads:</h4>
                        <ul className="arrow-style">
                            <li>
                                <a href="downloads/e-brochures" style={{ textDecoration: "none", color: "black" }}>E-Brochures</a>
                            </li>
                            <li>
                                <a href="downloads/samplepapers" style={{ textDecoration: "none", color: "black" }}>SamplePapers</a>
                            </li>
                            <li>
                                <a href="downloads/registration-form" style={{ textDecoration: "none", color: "black" }}>Registration Form</a>
                            </li>
                            <li>
                                <a href="downloads/enrollment-forms" style={{ textDecoration: "none", color: "black" }}>Enrollment Forms</a>
                            </li>
                            <li>
                                <a href="downloads/application-forms" style={{ textDecoration: "none", color: "black" }}>Application Forms</a>
                            </li>
                            <li>
                                <a href="downloads/instructions-to-fill-omr" style={{ textDecoration: "none", color: "black" }}>Instructions to Fill OMR</a>
                            </li>
                            <li>
                                <a href="downloads/jee-advanced-(earlier-iit-jee)-solutions" style={{ textDecoration: "none", color: "black" }}>JEE Advanced (Earlier IIT-JEE) Solutions</a>
                            </li>
                            <li>
                                <a href="downloads/jee-main-solutions-(earlier-aieee)" style={{ textDecoration: "none", color: "black" }}>JEE Main Solutions (Earlier AIEEE)</a>
                            </li>
                            <li>
                                <a href="downloads/ntse-question-papers-and-solutions" style={{ textDecoration: "none", color: "black" }}>NTSE Question Papers and Solutions</a>
                            </li>
                            <li>
                                <a href="downloads/kvpy-question-papers-and-solutions" style={{ textDecoration: "none", color: "black" }}>KVPY Question Papers and Solutions</a>
                            </li>
                            <li>
                                <a href="downloads/olympiad-question-papers-and-solutions" style={{ textDecoration: "none", color: "black" }}>Olympiad Question Papers and Solutions</a>
                            </li>
                            <li>
                                <a href="downloads/mvpp-question-papers-and-solutions" style={{ textDecoration: "none", color: "black" }}>MVPP Question Papers and Solutions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="middle-cms-container"
                    // style={{ width: '70%' }}
                    >
                        <div className="middle-inner-content">
                            <span id="lblAboutContent">
                                <h2>
                                    <span id="lblMenuTitle">Who are we?</span>
                                </h2>
                                {/* <h4 className="title-inner-page">{title}</h4> */}
                                <p className="short-t-style">
                                    {/* Insert your content here */}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor turpis eu justo dapibus, nec luctus augue varius. Vestibulum vitae malesuada enim. Duis ultricies, felis eget euismod aliquet, lacus velit aliquet elit, non congue lacus velit ut metus. Mauris id magna lacinia, rutrum ex ac, tempor turpis. Donec vestibulum gravida felis. Maecenas ultricies diam vitae purus feugiat scelerisque. Nulla hendrerit augue eu elit congue, vel venenatis enim tincidunt. Mauris fringilla, leo sed varius ultricies, felis mauris blandit ipsum, sed feugiat libero justo id purus. Nulla eu mollis odio. Integer scelerisque est a efficitur scelerisque. Donec id ante ut risus lacinia eleifend. Nam maximus auctor velit, id malesuada quam eleifend eu. Proin pellentesque, leo id feugiat pellentesque, justo ipsum fringilla leo, a iaculis elit nisi ut mauris.
                                </p>
                                <p className="short-t-style">
                                    {/* Insert your content here */}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor turpis eu justo dapibus, nec luctus augue varius. Vestibulum vitae malesuada enim. Duis ultricies, felis eget euismod aliquet, lacus velit aliquet elit, non congue lacus velit ut metus. Mauris id magna lacinia, rutrum ex ac, tempor turpis. Donec vestibulum gravida felis. Maecenas ultricies diam vitae purus feugiat scelerisque. Nulla hendrerit augue eu elit congue, vel venenatis enim tincidunt. Mauris fringilla, leo sed varius ultricies, felis mauris blandit ipsum, sed feugiat libero justo id purus. Nulla eu mollis odio. Integer scelerisque est a efficitur scelerisque. Donec id ante ut risus lacinia eleifend. Nam maximus auctor velit, id malesuada quam eleifend eu. Proin pellentesque, leo id feugiat pellentesque, justo ipsum fringilla leo, a iaculis elit nisi ut mauris.
                                </p>
                                <p className="short-t-style">
                                    {/* Insert your content here */}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor turpis eu justo dapibus, nec luctus augue varius. Vestibulum vitae malesuada enim. Duis ultricies, felis eget euismod aliquet, lacus velit aliquet elit, non congue lacus velit ut metus. Mauris id magna lacinia, rutrum ex ac, tempor turpis. Donec vestibulum gravida felis. Maecenas ultricies diam vitae purus feugiat scelerisque. Nulla hendrerit augue eu elit congue, vel venenatis enim tincidunt. Mauris fringilla, leo sed varius ultricies, felis mauris blandit ipsum, sed feugiat libero justo id purus. Nulla eu mollis odio. Integer scelerisque est a efficitur scelerisque. Donec id ante ut risus lacinia eleifend. Nam maximus auctor velit, id malesuada quam eleifend eu. Proin pellentesque, leo id feugiat pellentesque, justo ipsum fringilla leo, a iaculis elit nisi ut mauris.
                                </p>
                                <br />
                                <br />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
