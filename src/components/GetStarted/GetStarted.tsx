import { FC } from 'react';
import styles from './GetStarted.module.css';

const GetStarted: FC = () => {
    return (
        <section className={`${styles.textCenter} ${styles.backgroundImage} ${styles.mb12}`}>
            <h1 className={`${styles.h1}`}>Discover the best <span className={`${styles.colorlight}`}>free-to-play</span> games!</h1>
            <p className={`${styles.p} ${styles.textMuted} ${styles.mb4}`}>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <div>
                <button className={`${styles.button} ${styles.light}`}>
                    <span className={`${styles.fontWidthBold}`}>GET STARTED</span>
                    <span className={`${styles.ml1} ${styles.fontSizeSmall}`}>It's free</span>
                </button>
                <button className={`${styles.button} ${styles.secondary} ${styles.ml2}`}>
                    Browse Games
                </button>
            </div>
        </section>
    )
}

export default GetStarted;