import { FC } from 'react';
import styles from './GameLeftSide.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const GameLeftSide: FC = () => {
    const { game } = useAppSelector((store: any) => store.game);
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <>
            {isDesktop
                && (
                    <article className={`${styles.defaultWidth}`}>
                        <div className={`${styles.posFixed}`}>
                            <div>
                                <img className={`${styles.imageDefaultSize}`} src={game.thumbnail} alt="" />
                            </div>

                            <div className={styles.textLeft}>
                                <h2 className={`${styles.h2} ${styles.mb4}`}>{game.title}</h2>

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
                            </div>
                        </div>
                    </article>
                )
            }
        </>
    )
}

export default GameLeftSide;