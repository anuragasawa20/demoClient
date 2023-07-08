import React, { useState } from 'react'
import '../styles/Vision.css';

export default function Vision() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleLinks = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const renderToggleIcon = (index) => {
        return activeIndex === index ? '-' : '+';
    };
    return (
        <div class="parent-div">
            <div className="download">
                <h1 id='super-head'>
                    Our Vision
                </h1>
            </div>
            <div className="outer-container">
                <div className="inner-div1">
                    <h3>Related Links</h3>
                    <div className='links'>
                        <ul>
                            <li className='links-tag'><a href="#">About</a></li>
                            <li className='links-tag'><a href="#">Mission</a></li>
                            <li className='links-tag'><a href="#">Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <h3 className='mission'>Mission</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iste tenetur quis magni vel. Ullam a error maiores fugiat hic mollitia alias nesciunt minus inventore quaerat! Harum sapiente nisi accusamus.</div>
                    </div>
                    <div>
                        <h3 className='mission'>Vision</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iste tenetur quis magni vel. Ullam a error maiores fugiat hic mollitia alias nesciunt minus inventore quaerat! Harum sapiente nisi accusamus.</div>
                    </div>
                    <div>
                        <h3 className='mission'>The Future</h3>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia nostrum repudiandae officiis? Doloribus hic ad voluptates mollitia illo consectetur eum unde molestias, nemo fugit quis asperiores sint adipisci quaerat blanditiis dolorum consequatur repellat alias, nostrum recusandae natus dolor praesentium.</div>
                    </div>
                </div>

            </div>

        </div >

    )
}