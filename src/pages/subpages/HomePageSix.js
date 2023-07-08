import React from 'react';
import demoimage from '../../Images/posters/HomeImageSix.jpg';

const HomePageSix = ({ image }) => {
    return (
        <>
            <div className="auto-log0-continer">
                <div style={{ width: '94%', margin: '18px 0' }}>
                    <div className="col-md-12" style={{ textAlign: 'center', fontFamily: 'calibri', fontSize: '16px' }}>
                        {/* demo image */}
                        <img src={demoimage} style={{ width: '102%' }} alt="HomepageImage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePageSix;
