import { FC } from 'react';
import styles from './GameAdditionalInformation.module.css';
import { useAppSelector } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const GameAdditionalInformation: FC = () => {
    const { game } = useAppSelector((store: any) => store.game);
    const formatDate = (dateString: string) => {
        const options: Object = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    return (
        <div className={`${styles.cardContainer} ${styles.mb4}`}>
            <h2 className={`${styles.h2}`}>Additional Information</h2>
            <p className={`${styles.textColorBlue} ${styles.mb4}`}><FontAwesomeIcon icon={faInfoCircle} /> Please note this free-to-play game may or may not offer optional in-game purchases.</p>

            <div className={`${styles.br}`}></div>

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

export default GameAdditionalInformation;