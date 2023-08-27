import React, { FC } from 'react'; // Добавил импорт React
import styles from './CommunityRecommendations.module.css';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImage1 from '../../images/profile_image_1.png';
import profileImage2 from '../../images/profile_image_2.png';
import { IGame } from '../../services/types';
import { useAppSelector } from '../../services/hooks/hooks';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const CommunityRecommendations: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const filteredFirstGame = games.find((game: IGame) => game.title === 'Genshin Impact');
    const filteredSecondGame = games.find((game: IGame) => game.title === 'Valorant');
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb12}`}>
                <h1>
                    Community Recommendations
                </h1>

                <div className={`${styles.grid} ${styles.g3} ${styles.flex} ${styles.flexWidth1n1}`}>
                    {filteredFirstGame && (
                        <NavLink to={`/open/${filteredFirstGame.title}`} key={uuidv4()}>
                            <div className={`${styles.deepDark} ${styles.grid} ${styles.p3n1}`}>
                                <div className={`${styles.flex} ${styles.mAutoN3} ${styles.gameItem} ${styles.mr2}`} key={filteredFirstGame.id}>
                                    <img src={filteredFirstGame.thumbnail} alt={filteredFirstGame.short_description} className={styles.w100} />
                                    <div>
                                        <h4>{filteredFirstGame.title}</h4>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </div>

                                <div className={`${styles.flexRowCenter} ${styles.fontSizeSmall} ${styles.p0n10}`}>
                                    <div>
                                        <div>
                                            <p className={`${styles.text} ${styles.mb2}`}><FontAwesomeIcon icon={faQuoteLeft} /> I like this game, finally found my dream game. Not like the others games i know, and now i'm at AR 59 so anyone if wanna be my online friends, feel free t add me !! here's my UID 815925618, oh btw i'm on Asia server. Bye-bye !!</p>
                                        </div>
                                        <div className={`${styles.flex}`}>
                                            <img src={profileImage1} className={`${styles.iconSize} ${styles.mr2}`} alt="user profile" />
                                            <p className={`${styles.flex} ${styles.flexVCenter} ${styles.textMuted}`}>By mara_haychooo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}

                    {filteredSecondGame && (
                        <NavLink to={`/open/${filteredSecondGame.title}`} key={uuidv4()}>
                            <div className={`${styles.deepDark} ${styles.grid} ${styles.p3n1}`}>
                                <div className={`${styles.flex} ${styles.mAutoN3} ${styles.gameItem} ${styles.mr2}`} key={filteredSecondGame.id}>
                                    <img src={filteredSecondGame.thumbnail} alt={filteredSecondGame.short_description} className={styles.w100} />
                                    <div>
                                        <h4>{filteredSecondGame.title}</h4>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </div>

                                <div className={`${styles.flexRowCenter} ${styles.fontSizeSmall} ${styles.p0n10}`}>
                                    <div>
                                        <div>
                                            <p className={`${styles.text} ${styles.mb2}`}><FontAwesomeIcon icon={faQuoteLeft} /> Competitive FPS that works great. Its different modes, fast and effective gameplay, and enjoyable graphics.</p>
                                        </div>
                                        <div className={`${styles.flex}`}>
                                            <img src={profileImage2} className={`${styles.iconSize} ${styles.mr2}`} alt="user profile" />
                                            <p className={`${styles.flex} ${styles.flexVCenter} ${styles.textMuted}`}>By mara_haychooo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
            </section>
        )
    }

    const MobileView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb12}`}>
                <h1>
                    Community Recommendations
                </h1>

                <div className={`${styles.grid} ${styles.g3} ${styles.flex} ${styles.flexWidth1n1}`}>
                    {filteredFirstGame && (
                        <NavLink to={`/open/${filteredFirstGame.title}`} key={uuidv4()}>
                            <div className={`${styles.deepDark} ${styles.grid} ${styles.p4} ${styles.p3n1}`}>
                                <div className={`${styles.flex} ${styles.w100} ${styles.mb4} ${styles.gameItem} ${styles.mr2}`} key={filteredFirstGame.id}>
                                    <img src={filteredFirstGame.thumbnail} alt={filteredFirstGame.short_description} className={styles.w100} />
                                    <div>
                                        <h4>{filteredFirstGame.title}</h4>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </div>

                                <div className={`${styles.flexRowCenter} ${styles.fontSizeSmall} ${styles.p0n10}`}>
                                    <div>
                                        <div>
                                            <p className={`${styles.text} ${styles.mb2}`}><FontAwesomeIcon icon={faQuoteLeft} /> I like this game, finally found my dream game. Not like the others games i know, and now i'm at AR 59 so anyone if wanna be my online friends, feel free t add me !! here's my UID 815925618, oh btw i'm on Asia server. Bye-bye !!</p>
                                        </div>
                                        <div className={`${styles.flex}`}>
                                            <img src={profileImage1} className={`${styles.iconSize} ${styles.mr2}`} alt="user profile" />
                                            <p className={`${styles.flex} ${styles.flexVCenter} ${styles.textMuted}`}>By mara_haychooo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}

                    {filteredSecondGame && (
                        <NavLink to={`/open/${filteredSecondGame.title}`} key={uuidv4()}>
                            <div className={`${styles.deepDark} ${styles.grid} ${styles.p4} ${styles.p3n1}`}>
                                <div className={`${styles.flex} ${styles.w100} ${styles.mb4} ${styles.gameItem} ${styles.mr2}`} key={filteredSecondGame.id}>
                                    <img src={filteredSecondGame.thumbnail} alt={filteredSecondGame.short_description} className={styles.w100} />
                                    <div>
                                        <h4>{filteredSecondGame.title}</h4>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </div>

                                <div className={`${styles.flexRowCenter} ${styles.fontSizeSmall} ${styles.p0n10}`}>
                                    <div>
                                        <div>
                                            <p className={`${styles.text} ${styles.mb2}`}><FontAwesomeIcon icon={faQuoteLeft} /> I like this game, finally found my dream game. Not like the others games i know, and now i'm at AR 59 so anyone if wanna be my online friends, feel free t add me !! here's my UID 815925618, oh btw i'm on Asia server. Bye-bye !!</p>
                                        </div>
                                        <div className={`${styles.flex}`}>
                                            <img src={profileImage2} className={`${styles.iconSize} ${styles.mr2}`} alt="user profile" />
                                            <p className={`${styles.flex} ${styles.flexVCenter} ${styles.textMuted}`}>By mara_haychooo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
            </section>
        )
    }

    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    );
};

export default CommunityRecommendations;