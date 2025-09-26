import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MainBanner.css"


import banner1 from "./../assets/images/banner1.jpg"
import banner2 from "./../assets/images/banner2.jpg"
import banner3 from "./../assets/images/banner3.jpg"

const MainBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
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
                    <img src={banner2} alt="" />
                </div>
                <div>
                    <img src={banner3} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default MainBanner