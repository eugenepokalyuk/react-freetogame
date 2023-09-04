import { FC, useState } from 'react';
import styles from './GameDescription.module.css';
import { useAppSelector } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { IGameDetails } from '../../services/types';

const GameDescription: FC = () => {
    const game = useAppSelector((store: { game: { game: IGameDetails } }) => store.game.game);
    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    return (
        <div className={`${styles.cardContainer} ${styles.mb4}`}>
            <h2 className={`${styles.h2}`}>About {game.title}</h2>

            <div className={`${styles.br} ${styles.mt4} ${styles.mb4}`}></div>

            <div
                className={`${styles.descriptionContainer} ${isDescriptionExpanded ? styles.expanded : styles.collapsed
                    }`}
            >
                {game.description &&
                    (isDescriptionExpanded ? (
                        <div>
                            {game.description.split('\r\n').map((paragraph: string, index: number) => (
                                <p key={index} className={`${styles.textAlignJustify} ${styles.mb4}`}>
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
                                <FontAwesomeIcon icon={faMinus} size="1x" /> Read Less
                            </>
                        )
                        : (
                            <>
                                <FontAwesomeIcon icon={faPlus} size="1x" /> Read More
                            </>
                        )
                    }
                </button>
            </div>

            <div className={`${styles.br} ${styles.mt4}`}></div>

            <p className={`${styles.fontSizeSmall} ${styles.fontItalic} ${styles.mt4}`}>Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info in our <NavLink to="/faq" className={`${styles.link}`}>FAQ</NavLink> page.</p>
        </div>
    )
}

export default GameDescription;