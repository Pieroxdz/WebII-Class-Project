import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MainBanner.css"


import banner1 from "./../assets/images/banner1.jpg"

const MainBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={banner1} alt="" />
                </div>
                <div>
                    <img src={banner1} alt="" />
                </div>
                <div>
                    <img src={banner1} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default MainBanner