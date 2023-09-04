import React, { FC } from 'react';
import styles from './Carousel.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IGameDetails } from '../../services/types';

interface SimpleCarouselProps {
    game: IGameDetails;
}

const SimpleCarousel: FC<SimpleCarouselProps> = ({ game }) => {

    console.log('game', game);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 2000,
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
                {game.screenshots.map((screenshot) => (
                    <div key={screenshot.id} className={styles.card}>
                        <img src={screenshot.image} alt={`Screenshot ${screenshot.id + 1}`} className={styles.cardImage} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleCarousel;