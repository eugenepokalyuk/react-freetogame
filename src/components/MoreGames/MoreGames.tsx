import { FC, useMemo } from 'react';
import styles from './MoreGames.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons'

import discoverGames from '../../utils/discoverGames.json';
import { shuffle } from 'lodash';
import { NavLink } from 'react-router-dom';


const RecentlyAdded: FC = () => {
    const filteredGames = useMemo(() => discoverGames.filter((game) => game.genre === 'Shooter'), []);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const sevenRandomGames = useMemo(() => randomGames.slice(0, 7), [randomGames]);

    const buttonTitle = 'More Games >';

    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.mb1}`}>Recently Added</h1>
            <ul className={`${styles.card}`}>
                {sevenRandomGames.map((item: any) => (
                    <li key={item.id} className={`${styles.cardItem} ${styles.mb3}`}>
                        <div>
                            <img src={item.thumbnail} alt={`${item.short_description}`} />
                        </div>

                        <div>
                            <h2>{item.title}</h2>
                            <p className={`${styles.textTruncate} ${styles.textMuted} ${styles.mb1} ${styles.w100}`}>{item.short_description}</p>
                            <div>
                                <span className={`${styles.badge}`}>{item.genre}</span>
                            </div>
                        </div>


                        <div>
                            {item.platform === 'PC (Windows)'
                                ? <FontAwesomeIcon icon={faWindows} />
                                : item.platform === 'Web Browser'
                                    ? <FontAwesomeIcon icon={faWindowMaximize} />
                                    : 'undefined OS'}
                        </div>

                        <div>
                            <button className={`${styles.cardButton}`}>Free</button>
                        </div>
                    </li>
                )
                )}
            </ul>

            <div className={`${styles.w100} ${styles.alignRight}`}>
                <NavLink to='/link-7' className={`${styles.button} ${styles.secondary}`}>
                    {buttonTitle}
                </NavLink>
            </div>
        </div>
    )
}

const MostPlayedToday: FC = () => {
    const filteredGames = useMemo(() => discoverGames.filter((game) => game.genre === 'Shooter'), []);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const tenRandomGames = useMemo(() => randomGames.slice(0, 4), [randomGames]);
    return (
        <div className={`${styles.ml5}`}>
            <h1 className={`${styles.mb1}`}>Most Played Today</h1>
            <ul className={`${styles.flex} ${styles.flexColumn}`}>
                {tenRandomGames.map((item: any) => (
                    <li key={item.id} className={`${styles.overlayBlock} ${styles.flexItem} ${styles.mb4}`}>

                        <div>
                            <img src={item.thumbnail} alt={`${item.short_description}`} className={`${styles.flex} ${styles.w100}`} />
                        </div>

                        <div className={`${styles.overlay} ${styles.positionBottom}`}>
                            <button className={`${styles.cardButton}`}>Free</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const MoreGames: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <>
                <RecentlyAdded />
                <MostPlayedToday />
            </>
        )
    }

    return (
        <section className={`${styles.section} ${styles.flex} ${styles.test}`}>
            {
                <DesktopView />
            }
        </section>
    );
};

export default MoreGames;