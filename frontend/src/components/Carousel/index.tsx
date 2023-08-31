import React from 'react';
import styles from './Carousel.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IGame, IScreenshot } from '../../services/types';

const SimpleCarousel = (game: any) => {
    const { screenshots } = game.game;

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 2000,
        // autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        cssEase: "linear",
        gap: '10px',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={`${styles.sliderContainer}`}>
            <Slider className={`${styles.slider}`} {...settings}>
                {screenshots && screenshots.map((item: IScreenshot) =>
                    <div key={item.id} className={styles.card}>
                        <img src={item.image} alt="" className={styles.cardImage} />
                    </div>
                )}
            </Slider>
        </div>

    );
}


export default SimpleCarousel;