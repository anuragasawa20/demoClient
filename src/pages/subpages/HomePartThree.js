import React from 'react';
import '../../styles/HomePageThree.css';
import demoImage from '../../Images/posters/HomeImageTwo.jpg';

const HomePartThree = ({ resultImg }) => {
    return (
        <div>
            <section className="result-declaration-dates">
                <div className="auto-log0-continer">
                    <div className="jee2021-jee-advanced">
                        {/* demo result Image */}
                            <img src={demoImage} alt='img' style={{ width: "100%" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePartThree;
