import { FC, useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faInfoCircle, faThumbsUp, faCrown, faStar, faSmile, faFrown, faMeh, faWindowMaximize, faUser, faComment, faLongArrowAltUp, faPaperPlane, faSignIn, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import profileImage from '../../images/profile_image_large.png';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { FETCH_GAME_FAILURE, FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS } from '../../services/actions/game';
import { fetchGameData } from '../../utils/api';
import SimpleCarousel from '../../components/Carousel';

const GamePage: FC = () => {
    const dispatch = useAppDispatch();
    const { game } = useAppSelector((store: any) => store.game);
    // Получить список всех игр
    const { games } = useAppSelector((store: any) => store.games);
    const [isCORS, setIsCORS] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { selectedGame } = useAppSelector((store: any) => store.selectedGame);

    const { id }: any = useParams();
    const gameIdNumber = parseInt(id, 10);

    useEffect(() => {
        if (gameIdNumber) {
            dispatch({ type: FETCH_GAME_REQUEST });
            fetchGameData(gameIdNumber)
                .then(data => {
                    dispatch({ type: FETCH_GAME_SUCCESS, payload: data });
                    setIsCORS(false)
                })
                .catch(error => {
                    dispatch({ type: FETCH_GAME_FAILURE });
                    setIsCORS(true)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [dispatch]);

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

    const formatDate = (dateString: string) => {
        const options: Object = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const ChatBlock: FC = () => {
        const [message, setMessage] = useState('');
        const [messageDelivered, setMessageDelivered] = useState(false);

        const handleSendMessage = () => {
            alert('Your message will appear after verification')
            setMessageDelivered(true);
            setMessage('');
        };

        return (
            <div className={`${styles.flex} ${styles.chatH} ${styles.w100} ${styles.mb4}`}>
                <div className={styles.chatFlex}>
                    <img src={profileImage} alt="user profile" />
                </div>

                <textarea
                    className={styles.deepDark}
                    placeholder='Write a review for Drakensang Online! Share your thoughts with our community.'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button className={`${styles.button} ${styles.secondary}`} onClick={handleSendMessage}>
                    <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                </button>
            </div>
        )
    }

    const GameHeader: FC = () => {
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
                            ? <p className={styles.cardItem}><FontAwesomeIcon icon={faThumbsUp} /> Positive</p>
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
                        <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon icon={faSmile} size="2x" /> {randomNum1}</span>
                        <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon icon={faMeh} size="2x" /> {randomNum2}</span>
                        <span className={`${styles.icons} ${styles.g2} ${styles.m0n2}`}><FontAwesomeIcon icon={faFrown} size="2x" /> {randomNum3}</span>
                    </div>
                </div>

                <ChatBlock />
            </div>
        )
    }

    const GameDescription: FC = () => {
        const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

        const toggleDescription = () => {
            setDescriptionExpanded(!isDescriptionExpanded);
        };

        return (
            <div className={`${styles.cardContainer} ${styles.mb4}`}>
                <h2 className={`${styles.h2}`}>About {game.title}</h2>

                <div
                    className={`${styles.descriptionContainer} ${isDescriptionExpanded ? styles.expanded : styles.collapsed
                        }`}
                >
                    {game.description &&
                        (isDescriptionExpanded ? (
                            <div>
                                {game.description.split('\r\n').map((paragraph: string, index: number) => (
                                    <p key={index} className={`${styles.mb4}`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <p className={`${styles.mb4}`}>{game.description.split('\r\n')[0]}</p>
                            </div>
                        ))}
                </div>
                <div className={styles.textLeft}>
                    <button className={`${styles.toggleButton}`} onClick={toggleDescription}>
                        {isDescriptionExpanded
                            ? (
                                <>
                                    <FontAwesomeIcon icon={faMinus} size="1x" /> Show Less
                                </>
                            )
                            : (
                                <>
                                    <FontAwesomeIcon icon={faPlus} size="1x" /> Show More
                                </>
                            )
                        }
                    </button>
                </div>


                <p className={`${styles.textMuted} ${styles.fontSizeSmall} ${styles.mt4}`}>Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info in our <a href="/faq" className={`${styles.link}`}>FAQ</a> page.</p>
            </div>
        )
    }

    const GameAdditionalInformation: FC = () => {
        return (
            <div className={`${styles.cardContainer} ${styles.mb4}`}>
                <h2 className={`${styles.h2}`}>Additional Information</h2>
                <p className={`${styles.textMuted} ${styles.mb4}`}><FontAwesomeIcon icon={faInfoCircle} /> Please note this free-to-play game may or may not offer optional in-game purchases.</p>

                <div className={`${styles.additionalContainer}`}>
                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Title</h3>
                        </div>
                        <div>
                            <p>{game.title}</p>
                        </div>
                    </div>

                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Release Date</h3>
                        </div>
                        <div>
                            <p>{formatDate(game.release_date)}</p>
                        </div>
                    </div>

                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Developer</h3>
                        </div>
                        <div>
                            <p>{game.developer}</p>
                        </div>
                    </div>

                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Genre</h3>
                        </div>
                        <div>
                            <p>{game.genre}</p>
                        </div>
                    </div>

                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Publisher</h3>
                        </div>
                        <div>
                            <p>{game.publisher}</p>
                        </div>
                    </div>

                    <div className={styles.additionalItem}>
                        <div>
                            <h3>Platform</h3>
                        </div>
                        <div>
                            <p>{game.platform === 'PC (Windows)'
                                ?
                                <>
                                    <FontAwesomeIcon icon={faWindows} /> Windows (Client)
                                </>
                                : game.platform === 'Web Browser'
                                    ?
                                    <>
                                        <FontAwesomeIcon icon={faWindowMaximize} /> Web Browser
                                    </>
                                    :
                                    <>
                                        <FontAwesomeIcon icon={faWindows} className={`${styles.mr2}`} />
                                        <FontAwesomeIcon icon={faWindowMaximize} /> Windows & Web Browser
                                    </>}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    const GameScreenshots: FC = () => {
        return (
            <div className={`${styles.cardContainer} ${styles.mb4}`}>
                <h2 className={`${styles.h2}`}>{game.title} Screenshots</h2>
                <SimpleCarousel game={game} />
            </div>
        )
    }

    const GameSystemRequirements: FC = () => {
        return (
            <div className={`${styles.cardContainer} ${styles.mb4}`}>
                {game.platform && game.platform === 'Windows, Web Browser'
                    ?
                    <>
                        <h2 className={`${styles.h2}`}>Minimum System Requirements</h2>
                        <h3>Windows</h3>
                        <div className={`${styles.additionalContainer}`}>
                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>OS</h3>
                                </div>
                                <div>
                                    <p>{game.minimum_system_requirements.os}</p>
                                </div>
                            </div>

                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>Processor</h3>
                                </div>
                                <div>
                                    <p>{game.minimum_system_requirements.processor}</p>
                                </div>
                            </div>

                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>Memory</h3>
                                </div>
                                <div>
                                    <p>{game.minimum_system_requirements.memory}</p>
                                </div>
                            </div>

                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>Graphics</h3>
                                </div>
                                <div>
                                    <p>{game.minimum_system_requirements.graphics}</p>
                                </div>
                            </div>

                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>Storage</h3>
                                </div>
                                <div>
                                    <p>{game.minimum_system_requirements.storage}</p>
                                </div>
                            </div>

                            <div className={styles.additionalItem}>
                                <div>
                                    <h3>Additional Notes</h3>
                                </div>
                                <div>
                                    <p>Specifications may change during development</p>
                                </div>
                            </div>
                        </div>

                        <h3>Web Browser</h3>
                        <p>{game.title} is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
                        <p>If you have old hardware or software, you may still be able to play {game.title}, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
                    </>
                    : game.platform === 'Windows'
                        ?
                        <>
                            <h2 className={`${styles.h2}`}>Minimum System Requirements ({game.platform})</h2>
                            <div className={`${styles.additionalContainer}`}>
                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>OS</h3>
                                    </div>
                                    <div>
                                        <p>{game.minimum_system_requirements.os}</p>
                                    </div>
                                </div>

                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>Processor</h3>
                                    </div>
                                    <div>
                                        <p>{game.minimum_system_requirements.processor}</p>
                                    </div>
                                </div>

                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>Memory</h3>
                                    </div>
                                    <div>
                                        <p>{game.minimum_system_requirements.memory}</p>
                                    </div>
                                </div>

                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>Graphics</h3>
                                    </div>
                                    <div>
                                        <p>{game.minimum_system_requirements.graphics}</p>
                                    </div>
                                </div>

                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>Storage</h3>
                                    </div>
                                    <div>
                                        <p>{game.minimum_system_requirements.storage}</p>
                                    </div>
                                </div>

                                <div className={styles.additionalItem}>
                                    <div>
                                        <h3>Additional Notes</h3>
                                    </div>
                                    <div>
                                        <p>Specifications may change during development</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        : game.platform === 'Web Browser'
                            ?
                            <>
                                <h2 className={`${styles.h2}`}>Minimum System Requirements ({game.platform})</h2>
                                <p>{game.title} is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
                                <p>If you have old hardware or software, you may still be able to play {game.title}, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
                            </>
                            : <> Unkown platform type</>
                }
            </div>
        )
    }

    const LinkToMainPage: FC = () => {
        return (
            <div className={`${styles.cardContainer} ${styles.mb4}`}>
                <NavLink to="/">
                    <button className={`${styles.button} ${styles.secondary}`}>
                        Follow to main page
                    </button>
                </NavLink>
            </div>
        )
    }

    const LeftSide: FC = () => {
        return (
            <>
                {isDesktop
                    && (
                        <article className={`${styles.colLeft} ${styles.defaultWidth}`}>
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

    const RightSide: FC = () => {
        return (
            <article className={`${styles.colRight}`}>
                <GameHeader />
                <GameDescription />
                <GameAdditionalInformation />
                <GameScreenshots />
                <GameSystemRequirements />
                <LinkToMainPage />
            </article>
        )
    }

    const DesktopView: FC = () => {
        return (
            <main className={`${styles.main} ${styles.textCenter}`}>
                <div className={`${styles.pageContainer}`}>
                    <section className={`${styles.section} ${`${styles.grid}`}`}>
                        <LeftSide />
                        <RightSide />
                    </section>
                </div>
            </main>
        )
    }
    const MobileView: FC = () => {
        return (
            <main className={`${styles.main} ${styles.textCenter}`}>
                <div className={`${styles.pageContainer}`}>
                    <section className={`${styles.section}`}>
                        <RightSide />
                    </section>
                </div>
            </main>
        )
    }

    return (
        <>
            {game
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
        </>
    );
};

export default GamePage;