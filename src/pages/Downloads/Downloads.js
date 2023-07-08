import React, { useState } from 'react'
import './style.css';

const Downloads = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleLinks = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const renderToggleIcon = (index) => {
        return activeIndex === index ? '-' : '+';
    };

    return (
        <div class="parent-div">

            <h1 id='super-head'>Downloads/ALL</h1>

            <div className="outer-container">
                <div className="inner-div1">
                    <h1>Downloads</h1>
                    <ul>
                        <li><a href="#">Download File 1</a></li>
                        <li><a href="#">Download File 2</a></li>
                        <li><a href="#">Download File 3</a></li>
                    </ul>
                </div>

                <div className="inner-div2">
                    <h2>E-Brochures</h2>
                    <div className="dropdown">
                        <div>
                            <p onClick={() => toggleLinks(1)}>
                                <span className="toggle-icon">{renderToggleIcon(1)}</span> Brochure 1 description goes here...
                            </p>
                            {activeIndex === 1 && (
                                <ul>
                                    <li><a href="#">Link 1</a></li>
                                    <li><a href="#">Link 2</a></li>
                                    <li><a href="#">Link 3</a></li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <p onClick={() => toggleLinks(2)}>
                                <span className="toggle-icon">{renderToggleIcon(2)}</span> Brochure 2 description goes here...
                            </p>
                            {activeIndex === 2 && (
                                <ul>
                                    <li><a href="#">Link 4</a></li>
                                    <li><a href="#">Link 5</a></li>
                                    <li><a href="#">Link 6</a></li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <p onClick={() => toggleLinks(3)}>
                                <span className="toggle-icon">{renderToggleIcon(3)}</span> Brochure 3 description goes here...
                            </p>
                            {activeIndex === 3 && (
                                <ul>
                                    <li><a href="#">Link 7</a></li>
                                    <li><a href="#">Link 8</a></li>
                                    <li><a href="#">Link 9</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Downloads;