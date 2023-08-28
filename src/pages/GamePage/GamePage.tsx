import { FC } from 'react';
import styles from './GamePage.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from '../../services/hooks/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThumbsDown, faInfoCircle, faThumbsUp, faCrown, faStar, faSmile, faFrown, faMeh, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWindows } from '@fortawesome/free-brands-svg-icons'
import profileImage from '../../images/profile_image_1.png';
import { NavLink } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const GamePage: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const { selectedGame } = useAppSelector((store: any) => store.selectedGame);

    const randomMember = Math.floor(Math.random() * 100);
    const randomPositive = Math.floor(Math.random() * 3);
    const randomGameLibrary = Math.floor(Math.random() * 1000);
    const randomPopularity = Math.floor(Math.random() * 100);
    const randomReviews = Math.floor(Math.random() * 100);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <>
                <div className={`${styles.pageContainer}`}>
                    <section className={`${styles.section} ${`${styles.grid}`}`}>
                        <article className={`${styles.colLeft}`}>
                            <div className={`${styles.posFixed}`}>
                                <img className={`${styles.imageDefaultSize}`} src={selectedGame.thumbnail} alt="" />
                            </div>
                        </article>
                        <article className={`${styles.colRight}`}>
                            <div>
                                <h1 className={`${styles.h1} ${styles.mb1}`}>{selectedGame.title}</h1>

                                <div className={`${styles.p0n4}`}>
                                    {randomPositive === 0
                                        ? <p><FontAwesomeIcon icon={faThumbsUp} /> Positive</p>
                                        : randomPositive === 1
                                            ? <p><FontAwesomeIcon icon={faCrown} /> Very Positive</p>
                                            : randomPositive === 2
                                                ? <p><FontAwesomeIcon icon={faStar} /> Massively Positive</p>
                                                : <p><FontAwesomeIcon icon={faThumbsDown} /> Negative</p>
                                    }

                                    <p>{randomMember} Member Ratings</p>
                                    <p>{randomGameLibrary} Members have this game in their library!</p>

                                    <div className={`${styles.flex}`}>
                                        <p>{randomReviews} Reviews</p>
                                        <p>{randomPopularity}% Popularity</p>
                                    </div>

                                    <div className={`${styles.flex}`}>
                                        <h2>What do you think about Trove?</h2>

                                        <p><FontAwesomeIcon icon={faSmile} size="1x" /> 3</p>
                                        <p><FontAwesomeIcon icon={faMeh} size="1x" /> 2</p>
                                        <p><FontAwesomeIcon icon={faFrown} size="1x" /> 1</p>
                                    </div>
                                </div>

                                <div className={`${styles.flex}`}>
                                    <img src={profileImage} alt="user profile" />
                                    <textarea></textarea>
                                    <button>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h2 className={`${styles.h2}`}>About {selectedGame.title}</h2>
                                <p>{selectedGame.short_description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum dolor repellendus ab culpa recusandae hic ratione totam distinctio. Itaque perferendis enim harum quae, non ipsam quo similique repellat! Voluptas commodi sapiente odit eos quo omnis expedita, facilis fugit dolores doloremque, quas ea ipsam aut illo exercitationem. Quod eum saepe aliquam natus, rem a quasi amet totam rerum reprehenderit, fugiat autem vitae ullam numquam in quis. Saepe cumque soluta omnis eaque magnam nesciunt, quod quibusdam tempore voluptates, illum fugiat qui nulla, corporis error cum facere eos accusantium! Fugiat sit ad maxime voluptas consequatur, suscipit, expedita sed, ratione totam quam at!</p>

                                <p className={`${styles.textMuted}`}>Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info in our <a href="/faq" className={`${styles.link}`}>FAQ</a> page.</p>
                            </div>

                            <div>
                                <h2 className={`${styles.h2}`}>Additional Information</h2>
                                <p className={`${styles.textMuted}`}><FontAwesomeIcon icon={faInfoCircle} /> Please note this free-to-play game may or may not offer optional in-game purchases.</p>

                                <div>

                                    <ul>
                                        <li>
                                            Title
                                            {selectedGame.title}
                                        </li>
                                        <li>
                                            Release Date
                                            {selectedGame.release_date}
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            Developer
                                            {selectedGame.developer}
                                        </li>
                                        <li>
                                            Genre
                                            {selectedGame.genre}
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            Publisher
                                            {selectedGame.publisher}
                                        </li>

                                        <li>
                                            Platform
                                            {selectedGame.platform === 'PC (Windows)'
                                                ?
                                                <>
                                                    <FontAwesomeIcon icon={faWindows} /> Windows (Client)
                                                </>
                                                : selectedGame.platform === 'Web Browser'
                                                    ?
                                                    <>
                                                        <FontAwesomeIcon icon={faWindowMaximize} /> Web Browser
                                                    </>
                                                    :
                                                    <>
                                                        <FontAwesomeIcon icon={faWindows} className={`${styles.mr2}`} />
                                                        <FontAwesomeIcon icon={faWindowMaximize} /> Windows (Client) & Web Browser
                                                    </>}
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div>
                                <h2 className={`${styles.h2}`}>Trove Screenshots</h2>
                                <div className={`${styles.flex} `}>
                                    <img className={`${styles.imageSmallSize}`} src={selectedGame.thumbnail} alt="" />
                                    <img className={`${styles.imageSmallSize}`} src={selectedGame.thumbnail} alt="" />
                                    <img className={`${styles.imageSmallSize}`} src={selectedGame.thumbnail} alt="" />
                                    <img className={`${styles.imageSmallSize}`} src={selectedGame.thumbnail} alt="" />
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </>
        )
    }

    const MobileView: FC = () => {
        return (
            <>
                <div>
                    <h1 className={`${styles.mb4}`}>Страница еще в разработке</h1>
                    <NavLink to="/">
                        <button className={`${styles.button} ${styles.light}`}>
                            Перейти на главную
                        </button>
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <main className={`${styles.main} ${styles.textCenter}`}>
            {selectedGame
                ? (
                    <>
                        {isDesktop
                            ? <DesktopView />
                            : <MobileView />}
                    </>
                ) : (
                    <NotFound />
                )
            }
        </main>
    );
};

export default GamePage;