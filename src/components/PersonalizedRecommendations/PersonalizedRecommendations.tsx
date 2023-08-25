import { FC, useMemo } from 'react';
import styles from './PersonalizedRecommendations.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRobot, faQuestionCircle, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

import discoverGames from '../../utils/discoverGames.json';
import { shuffle } from 'lodash';


const PersonalizedRecommendations: FC = () => {
    const filteredGames = useMemo(() => discoverGames.filter((game) => game.genre === 'Shooter'), []);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const threeRandomGames = useMemo(() => randomGames.slice(0, 3), [randomGames]);

    return (
        <section className={`${styles.section} ${styles.mb6}`}>
            <div className={`${styles.contrainer}`}>
                <h1 className={`${styles.mb2}`}>
                    <FontAwesomeIcon icon={faRobot} />
                    Personalized Recommendations
                </h1>

                <p className={`${styles.mb2} ${styles.link}`}>
                    <FontAwesomeIcon icon={faQuestionCircle} className={`${styles.mr1}`} />
                    Log In to view your personalized recommendations! Discover games you'll love.
                </p>

                <ul className={`${styles.flex} ${styles.card}`}>
                    {threeRandomGames.map((item: any) => (
                        <li className={`${styles.flex} ${styles.cardItem} ${styles.mr4} ${styles.maxWidth3}`} key={item.id}>
                            <img src={item.thumbnail} alt={`${item.short_description}`} className={styles.w100} />
                            <div>
                                <h2>{item.title}</h2>
                                <button className={`${styles.cardButton}`}>Free</button>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </section>
    )
}
export default PersonalizedRecommendations;