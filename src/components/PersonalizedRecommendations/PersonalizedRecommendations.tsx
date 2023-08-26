import { FC, useMemo } from 'react';
import styles from './PersonalizedRecommendations.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { shuffle } from 'lodash';
import { IGame } from '../../services/types';
import { useAppSelector } from '../../services/hooks/hooks';
import { NavLink } from 'react-router-dom';

const PersonalizedRecommendations: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const filteredGames = useMemo(() => games.filter((game: IGame) => game.genre === 'Shooter'), [games]);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const threeRandomGames = useMemo(() => randomGames.slice(0, 3), [randomGames]);

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
                        <li className={`${styles.flex} ${styles.cardItem} ${styles.mr4} ${styles.maxWidth3}`} key={item.id}>
                            <NavLink to={`/${item.game_url.split("/").slice(-2).join("/")}`}>
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
export default PersonalizedRecommendations;