import { FC } from 'react';
import styles from './GamePage.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from '../../services/hooks/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThumbsDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import profileImage from '../../images/profile_image_1.png';

const GamePage: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const randomIndex = Math.floor(Math.random() * games.length);
    const randGame = games[randomIndex];

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section}`}>
                {randGame && (
                    <>
                        <h1>{randGame.title}</h1>
                        <p><FontAwesomeIcon icon={faThumbsDown} /> Negative</p>
                        <p>12 Member Ratings</p>
                        <p>305 Members have this game in their library!</p>
                        <p>3 Reviews</p>
                        <p>14% Popularity</p>
                        <p>What do you think about Drakensang Online?</p>
                        <img src={profileImage} alt="user profile" />
                        <textarea></textarea>
                        <button>
                            <FontAwesomeIcon icon={faTelegram} />
                        </button>

                        <h1>About Drakensang Online</h1>
                        <p>ОПИСАНИЕ</p>
                        <p>Aккордион + Read More</p>
                        <p className={`${styles.fontSizeSmall} ${styles.textMuted}`}>Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info in our FAQ page.</p>

                        <h1>Additional Information</h1>
                        <p><FontAwesomeIcon icon={faInfoCircle} /> Please note this free-to-play game may or may not offer optional in-game purchases.</p>

                        Title
                        Drakensang Online

                        Developer
                        Bigpoint

                        Publisher
                        Bigpoint

                        Release Date
                        August 08, 2011

                        Genre
                        MMORPG

                        Platform
                        Web Browser

                        <h1>Drakensang Online Screenshots</h1>
                        <img src={randGame.thumbnail} alt="game screenshots" />
                        <img src={randGame.thumbnail} alt="game screenshots" />
                        <img src={randGame.thumbnail} alt="game screenshots" />

                        <h1>Minimum System Requirements (Browser)</h1>
                        <p>Drakensang Online is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
                        <p>If you have old hardware or software, you may still be able to play Drakensang Online, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
                        <p className={`${styles.fontSizeSmall} ${styles.textMuted}`}>All material on this page is copyrighted by ©Bigpoint and their respective licensors. All other trademarks are the property of their respective owners.</p>

                        <h1>User Reviews</h1>
                        <div>
                            <img src={profileImage} alt="user profile" />
                            monkusfunk
                            11 months ago
                            Once a wonderful ARPG game, superior to Diablo 3 in many ways, but the radical update 'Dark Legacy' absolutely destroyed so many features... One of the worst technical butcherings of a previously great experience.
                        </div>

                        <div>
                            <img src={profileImage} alt="user profile" />
                            monkusfunk
                            11 months ago
                            Once a wonderful ARPG game, superior to Diablo 3 in many ways, but the radical update 'Dark Legacy' absolutely destroyed so many features... One of the worst technical butcherings of a previously great experience.
                        </div>

                        <div>
                            <img src={profileImage} alt="user profile" />
                            monkusfunk
                            11 months ago
                            Once a wonderful ARPG game, superior to Diablo 3 in many ways, but the radical update 'Dark Legacy' absolutely destroyed so many features... One of the worst technical butcherings of a previously great experience.
                        </div>

                        <div>
                            <p>Play this game and post your review!</p>
                            <button>Submit Reviews</button>
                        </div>

                        <div>
                            <h1>Games like Drakensang Online</h1>
                            <button>See all</button>
                        </div>

                        <img src={randGame.thumbnail} alt="game screenshots" />
                        <img src={randGame.thumbnail} alt="game screenshots" />
                        <img src={randGame.thumbnail} alt="game screenshots" />
                    </>
                )}
            </section>
        )
    }

    return (
        <main className={`${styles.main}`}>
            {
                <DesktopView />
            }
        </main>
    );
};

export default GamePage;