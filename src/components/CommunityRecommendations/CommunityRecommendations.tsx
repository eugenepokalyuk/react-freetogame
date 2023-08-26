import React, { FC, useMemo } from 'react'; // Добавил импорт React
import styles from './CommunityRecommendations.module.css';
import discoverGames from '../../utils/discoverGames.json';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImage from '../../images/profile_image_1.png';
import { IGame } from '../../services/types';
import { useAppSelector } from '../../services/hooks/hooks';

const CommunityRecommendations: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const filteredFirstGame = games.find((game: IGame) => game.title === 'Genshin Impact');
    const filteredSecondGame = games.find((game: IGame) => game.title === 'Valorant');

    return (
        <section className={`${styles.section} ${styles.mb12}`}>
            <h1>
                Community Recommendations
            </h1>
            <div className={`${styles.flex} ${styles.card}`}>

                <div className={`${styles.dark} ${styles.p4} ${styles.cardItem} ${styles.flexWidth1n2}`}>
                    <div>
                        {filteredFirstGame && (
                            <div className={`${styles.flex} ${styles.gameItem}`} key={filteredFirstGame.id}>
                                <img src={filteredFirstGame.thumbnail} alt={filteredFirstGame.short_description} className={styles.w100} />
                                <div>
                                    <h4>{filteredFirstGame.title}</h4>
                                    <button className={`${styles.cardButton}`}>Free</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`${styles.flex} ${styles.flexColumn} ${styles.flexHCenter} ${styles.mt4} ${styles.pl10} ${styles.pr10}`}>
                        <p className={`${styles.text}`}><FontAwesomeIcon icon={faQuoteLeft} /> I like this game, finally found my dream game. Not like the others games I know, and now I'm at AR 59 so anyone who wants to be my online friend, feel free to add me! Here's my UID 815925618. By the way, I'm on the Asia server. Bye-bye!!</p>
                        <p className={`${styles.flex} ${styles.flexVCenter}`}><img src={profileImage} alt="" />By mara_haychooo</p>
                    </div>
                </div>


                <div className={`${styles.dark} ${styles.p4} ${styles.cardItem} ${styles.flexWidth1n2} ${styles.ml5}`}>
                    <div>
                        {filteredSecondGame && (
                            <div className={`${styles.flex} ${styles.gameItem}`} key={filteredSecondGame.id}>
                                <img src={filteredSecondGame.thumbnail} alt={filteredSecondGame.short_description} className={styles.w100} />
                                <div>
                                    <h4>{filteredSecondGame.title}</h4>
                                    <button className={`${styles.cardButton}`}>Free</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`${styles.flex} ${styles.flexColumn} ${styles.flexHCenter} ${styles.mt4} ${styles.pl10} ${styles.pr10}`}>
                        <p className={`${styles.text}`}><FontAwesomeIcon icon={faQuoteLeft} /> Competitive FPS that works great. Its different modes, fast and effective gameplay, and enjoyable graphics.</p>
                        <p className={`${styles.flex} ${styles.flexVCenter}`}><img src={profileImage} alt="" />By Axel0689</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CommunityRecommendations;