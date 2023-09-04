import { FC } from 'react';
import styles from './GameSystemRequirements.module.css';
import { useAppSelector } from '../../services/hooks/hooks';
import {IGameDetails } from '../../services/types';

const GameSystemRequirements: FC = () => {
    const game = useAppSelector((store: {game: { game: IGameDetails }}) => store.game.game);
    return (
        <div className={`${styles.cardContainer} ${styles.mb4}`}>
            {game && game.platform === 'Windows, Web Browser'
                ?
                <>
                    <h2 className={`${styles.h2}`}>Minimum System Requirements</h2>

                    <div className={`${styles.br} ${styles.mt4} ${styles.mb4}`}></div>

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

                        <div className={`${styles.br} ${styles.mt4} ${styles.mb4}`}></div>

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

                            <div className={`${styles.br} ${styles.mt4} ${styles.mb4}`}></div>

                            <p>{game.title} is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
                            <p>If you have old hardware or software, you may still be able to play {game.title}, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
                        </>
                        : <> Unkown platform type</>
            }
        </div>
    )
}

export default GameSystemRequirements;