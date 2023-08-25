import React, { FC, useMemo } from 'react'; // Добавил импорт React
import styles from './MoreFun.module.css';
import ftgImage from '../../images/ftg-img.jpg';

const MoreFun: FC = () => {
    return (
        <section className={`${styles.section} ${styles.flex} ${styles.mb12}`}>

            <div className={`${styles.container} ${styles.flex} ${styles.padding6n12}`}>

                <div>
                    <img src={ftgImage} alt="" />
                </div>

                <div className={`${styles.flex} ${styles.flexColumn} ${styles.padding0n12}`}>
                    <h1 className={`${styles.mt6} ${styles.mb2}`}>More Fun and More Rewarding!</h1>
                    <p className={`${styles.mb4}`}>We are FreeToGame, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place while rewarding gamers with free premium loot and exlusive perks. Plus maintain your own games library, track what you've played and search for what to play next!</p>
                    <div>
                        <button className={`${styles.button} ${styles.light}`}>
                            JOIN NOW
                        </button>
                        <button className={`${styles.button} ${styles.secondary} ${styles.ml2}`}>
                            Learn More
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default MoreFun;