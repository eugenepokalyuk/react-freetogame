import { FC, MouseEventHandler, useMemo } from 'react';
import styles from './PersonalizedRecommendations.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { shuffle } from 'lodash';
import { IGame, RootState } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ADD_SELECTED_GAME } from '../../services/actions/selectedGame';

const PersonalizedRecommendations: FC = () => {
    const dispatch = useAppDispatch();
    const games = useAppSelector((store: RootState) => store.games.games);
    const filteredGames = useMemo(() => games.filter((game: IGame) => game.genre === 'Shooter'), [games]);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const threeRandomGames = useMemo(() => randomGames.slice(0, 3), [randomGames]);

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    })

    const handleDispatch = (item: IGame) => {
        dispatch({ type: ADD_SELECTED_GAME, payload: item })
    }

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb6}`}>
                <div className={`${styles.contrainer}`}>

                    <div className={`${styles.flex} ${styles.flexNoWrap} ${styles.flexAlignBaseline}`}>
                        <FontAwesomeIcon icon={faRobot} className={`${styles.iconSize} ${styles.mr2}`} />
                        <h2 className={`${styles.h2} ${styles.mb2}`}>
                            Personalized Recommendations
                        </h2>
                    </div>

                    <p className={`${styles.mb2} ${styles.link}`}>
                        <FontAwesomeIcon icon={faQuestionCircle} className={`${styles.mr1}`} />
                        Log In to view your personalized recommendations! Discover games you'll love.
                    </p>

                    <ul className={`${styles.flex} ${styles.card}`}>
                        {threeRandomGames.map((item: IGame) => (
                            <li className={`${styles.flex} ${styles.cardItem} ${styles.mr4} ${styles.maxWidth3}`} key={item.id} onClick={() => { handleDispatch(item) }}>
                                <NavLink to={`/game/${item.id}`} >
                                    <img src={item.thumbnail} alt={`${item.short_description}`} className={styles.w100} />
                                    <div>
                                        <h2>{item.title}</h2>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </NavLink>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </section>
        )
    }

    const MobileView: FC = () => {
        return (
            <>
                <section className={`${styles.section} ${styles.mb6}`}>
                    <div className={`${styles.contrainer}`}>

                        <div className={`${styles.headerFlex}`}>
                            <div className={`${styles.flex}`}>
                                <h2 className={`${styles.h2} ${styles.mb2}`}>
                                    <FontAwesomeIcon icon={faRobot} className={`${styles.iconSize} ${styles.mr2}`} /> Personalized Recommendations
                                </h2>
                            </div>

                            <p className={`${styles.mb2} ${styles.link}`}>
                                <FontAwesomeIcon icon={faQuestionCircle} className={`${styles.mr1}`} />
                                Log In to view your personalized recommendations! Discover games you'll love.
                            </p>
                        </div>

                        <div className={`${styles.grid} ${styles.p4} ${styles.g3} ${styles.flex} ${styles.flexWidth1n1}`}>
                            {threeRandomGames.map((item: IGame) => (
                                <NavLink to={`/game/${item.id}`} key={uuidv4()} className={`${styles.w100}`} onClick={() => { handleDispatch(item) }}>
                                    <div className={`${styles.deepDark} ${styles.grid}`}>
                                        <div className={`${styles.flex} ${styles.w100} ${styles.mb4} ${styles.gameItem} ${styles.mr2}`} key={item.id}>
                                            <img src={item.thumbnail} alt={item.short_description} className={styles.w100} />
                                            <div>
                                                <h4>{item.title}</h4>
                                                <button className={`${styles.cardButton}`}>Free</button>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }


    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    )
}
export default PersonalizedRecommendations;