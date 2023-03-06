import React from 'react';
//images
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';
//carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//styles
import styles from '../styles/Banner.module.css'

const Banner = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToScroll: 1,
        rtl: true
      };

    return (
        <div className={styles.container}>
            <div className={styles.text_column}>
                <div>
                    <h1>مراقب بدن و سلامتی‌اش باشید!</h1>
                    <h3>زیرا تنها جایی است که مجبورید در آن زندگی کنید.</h3>
                </div>
                <ul className={styles.banner_list}>
                    <li>
                        <span>56</span>
                        <span>پزشک متخصص</span>
                    </li>
                    <li>
                        <span>1286</span>
                        <span>مقاله پزشکی</span>
                    </li>
                    <li>
                        <span>8634</span>
                        <span>بیمار</span>
                    </li>
                </ul>
            </div>
            
            <div className={styles.carousel_column}>
                <Slider {...settings}>
                        <div className={styles.slide}><img src={slide1} alt="slide1" /></div>
                        <div className={styles.slide}><img src={slide2} alt="slide2" /></div>
                        <div className={styles.slide}><img src={slide3} alt="slide3" /></div>
                        <div className={styles.slide}><img src={slide4} alt="slide4" /></div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;