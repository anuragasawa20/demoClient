import React from "react";
import demoImage1 from '../../Images/carouselimgs/1.jpg';
import demoImage2 from '../../Images/carouselimgs/2.jpg';
import demoImage3 from '../../Images/carouselimgs/3.jpg';

const Carousel = () => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={demoImage1}
                        className="d-block mx-auto img-fluid"
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={demoImage2}
                        className="d-block mx-auto img-fluid"
                        alt="Slide 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={demoImage3}
                        className="d-block mx-auto img-fluid"
                        alt="Slide 3"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
