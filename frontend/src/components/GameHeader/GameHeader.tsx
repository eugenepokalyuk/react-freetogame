import { FC } from 'react';
import styles from './GameHeader.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faCrown, faStar, faSmile, faFrown, faMeh, faUser, faComment, faLongArrowAltUp, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import GameChat from '../../components/GameChat/GameChat';
import { IGameDetails } from '../../services/types';

export const GameHeader: FC = () => {
    const game = useAppSelector((store: { game: { game: IGameDetails } }) => store.game.game);

    const randomMember = Math.floor(Math.random() * 100);
    const randomPositive = Math.floor(Math.random() * 3);
    const randomGameLibrary = Math.floor(Math.random() * 1000);
    const randomPopularity = Math.floor(Math.random() * 100);
    const randomReviews = Math.floor(Math.random() * 100);

    const randomNum1 = Math.floor(Math.random() * 50);
    const randomNum2 = Math.floor(Math.random() * 50);
    const randomNum3 = Math.floor(Math.random() * 50);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <div className={styles.cardContainer}>
            <h1 className={`${styles.h1} ${styles.mb1}`}>{game.title}</h1>
            {!isDesktop && (
                <>
                    <div>
                        <img className={`${styles.w100}`} src={game.thumbnail} alt="" />
                    </div>

                    <NavLink to="/game">
                        <button className={`${styles.button} ${styles.light} ${styles.w100} ${styles.mb2}`}>
                            Play now <FontAwesomeIcon icon={faSignIn} />
                        </button>
                    </NavLink>

                    <NavLink to="/">
                        <button className={`${styles.button} ${styles.secondary} ${styles.w100}`}>
                            Follow to main page
                        </button>
                    </NavLink>
                </>
            )}
            <div className={`${styles.p0n2} ${styles.mb4}`}>
                <div className={styles.w100}>
                    {randomPositive === 0
                        ? <p className={`${styles.cardItem}`}><FontAwesomeIcon icon={faThumbsUp} /> Positive</p>
                        : randomPositive === 1
                            ? <p className={styles.cardItem}><FontAwesomeIcon icon={faCrown} /> Very Positive</p>
                            : randomPositive === 2
                                ? <p className={styles.cardItem}><FontAwesomeIcon icon={faStar} /> Massively Positive</p>
                                : <p className={styles.cardItem}><FontAwesomeIcon icon={faThumbsDown} /> Negative</p>
                    }

                    <p className={styles.cardItem}>{randomMember} Member Ratings</p>
                    <p className={styles.cardItem}><FontAwesomeIcon icon={faUser} /> {randomGameLibrary} Members have this game in their library!</p>

                    <div className={`${styles.flex} ${styles.flexSpaceBetween} ${styles.cardItem}`}>
                        <p><FontAwesomeIcon icon={faComment} /> {randomReviews} Reviews</p>
                        <p><FontAwesomeIcon icon={faLongArrowAltUp} /> {randomPopularity}% Popularity</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.flex} ${styles.flexSpaceBetween} ${styles.mb4}`}>
                <h2>What do you think about Trove?</h2>

                <div className={`${styles.flex} ${styles.flexSpaceBetween}`}>
                    <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon className={styles.smailPositive} icon={faSmile} size="2x" /> {randomNum1}</span>
                    <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon className={styles.smailNormal} icon={faMeh} size="2x" /> {randomNum2}</span>
                    <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon className={styles.smailNegative} icon={faFrown} size="2x" /> {randomNum3}</span>
                </div>
            </div>

            <div className={`${styles.br} ${styles.mb4}`}></div>

            <GameChat />
        </div>
    )
}

export default GameHeader;
