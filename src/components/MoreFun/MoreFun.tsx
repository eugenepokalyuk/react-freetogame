import React, { FC } from 'react'; // Добавил импорт React
import styles from './MoreFun.module.css';
import ftgImage from '../../images/ftg-img.jpg';
import { NavLink } from 'react-router-dom';

const MoreFun: FC = () => {
    return (
        <section className={`${styles.section} ${styles.flex} ${styles.mb10}`}>

            <div className={`${styles.container} ${styles.flex} ${styles.padding6n12}`}>

                <div>
                    <img src={ftgImage} alt="" />
                </div>

                <div className={`${styles.flex} ${styles.flexColumn} ${styles.padding0n12}`}>
                    <h1 className={`${styles.mt6} ${styles.mb2}`}>More Fun and More Rewarding!</h1>
                    <p className={`${styles.mb4}`}>We are FreeToGame, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place while rewarding gamers with free premium loot and exlusive perks. Plus maintain your own games library, track what you've played and search for what to play next!</p>
                    <div>
                        <NavLink to="/join">
                            <button className={`${styles.button} ${styles.light}`}>
                                JOIN NOW
                            </button>
                        </NavLink>

                        <NavLink to="/learn-more">
                            <button className={`${styles.button} ${styles.secondary} ${styles.ml2}`}>
                                Learn More
                            </button>
                        </NavLink>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default MoreFun;