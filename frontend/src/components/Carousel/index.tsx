import React from 'react';
import { Item } from './components';
import Carousel from './Carousel';
import styles from './Carousel.module.css'

const SimpleCarousel = (game: any) => {
    const { screenshots } = game.game;
    return (
        <Carousel>
            {screenshots && screenshots.map((item: any) => {
                return (
                    <Item className={styles.cardItem} img={item.image} key={item.id} />
                )
            })}
        </Carousel>
    );
}

export default SimpleCarousel;