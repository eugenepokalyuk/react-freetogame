import { FC, useMemo } from 'react';
import styles from './MoreGames.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons'

import { shuffle } from 'lodash';
import { NavLink } from 'react-router-dom';
import { IGame } from '../../services/types';

import { useAppSelector } from '../../services/hooks/hooks';
import { v4 as uuidv4 } from 'uuid';

const RecentlyAdded: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const filteredGames = useMemo(() => games.filter((game: IGame) => game.genre === 'Shooter'), [games]);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const sevenRandomGames = useMemo(() => randomGames.slice(0, 7), [randomGames]);

    const buttonTitle = 'More Games >';

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <div className={`${styles.container}`}>
                <h1 className={`${styles.mb1}`}>Recently Added</h1>
                <ul className={`${styles.card}`}>
                    {sevenRandomGames.map((item: any) => (
                        <NavLink to={`/open/${item.title}`} key={uuidv4()}>
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
                                            : <>
                                                <FontAwesomeIcon icon={faWindows} className={`${styles.mr2}`} />
                                                <FontAwesomeIcon icon={faWindowMaximize} />
                                            </>}
                                </div>

                                <div>
                                    <button className={`${styles.cardButton}`}>Free</button>
                                </div>
                            </li>
                        </NavLink>
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

    const MobileView: FC = () => {
        return (
            <>
                <div className={`${styles.container}`}>
                    <h1 className={`${styles.mb1}`}>Recently Added</h1>
                    <ul className={`${styles.card}`}>
                        {sevenRandomGames.map((item: any) => (
                            <li key={uuidv4()} >
                                <NavLink to={`/open/${item.title}`} className={`${styles.cardItem} ${styles.mb3}`}>
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
                                                : <>
                                                    <FontAwesomeIcon icon={faWindows} className={`${styles.mr2}`} />
                                                    <FontAwesomeIcon icon={faWindowMaximize} />
                                                </>}
                                    </div>

                                    <div>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </NavLink>
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
            </>
        )
    }

    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    )
}

const MostPlayedToday: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const filteredGames = useMemo(() => games.filter((game: IGame) => game.genre === 'Shooter'), [games]);
    const randomGames = useMemo(() => shuffle(filteredGames), [filteredGames]);
    const fourRandomGames = useMemo(() => randomGames.slice(0, 4), [randomGames]);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <>
                <div className={`${styles.ml5} ${styles.w1n3}`}>
                    <h1 className={`${styles.mb1}`}>Most Played Today</h1>
                    <ul className={`${styles.flex} ${styles.flexColumn}`}>
                        {fourRandomGames.map((item: any) => (
                            <li key={item.id} className={`${styles.overlayBlock} ${styles.flexItem} ${styles.mb4}`}>
                                <NavLink to={`/open/${item.title}`}>
                                    <div>
                                        <img src={item.thumbnail} alt={`${item.short_description}`} className={`${styles.flex} ${styles.w100}`} />
                                    </div>

                                    <div className={`${styles.overlay} ${styles.positionBottom}`}>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    const MobileView: FC = () => {
        return (
            <>
                <div className={`${styles.w100} ${styles.p4}`}>
                    <h1 className={`${styles.mb1}`}>Most Played Today</h1>
                    <ul className={`${styles.flex} ${styles.flexColumn}`}>
                        {fourRandomGames.map((item: any) => (
                            <li key={item.id} className={`${styles.overlayBlock} ${styles.flexItem} ${styles.mb4}`}>
                                <NavLink to={`/open/${item.title}`}>
                                    <div>
                                        <img src={item.thumbnail} alt={`${item.short_description}`} className={`${styles.flex} ${styles.w100} ${styles.br1}`} />
                                    </div>

                                    <div className={`${styles.overlay} ${styles.positionBottom}`}>
                                        <button className={`${styles.cardButton}`}>Free</button>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    )
}

const MoreGames: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb12} ${styles.flex}`}>
                <RecentlyAdded />
                <MostPlayedToday />
            </section >
        )
    }

    const MobileView: FC = () => {
        return (
            <>
                <section className={`${styles.section} ${styles.mb12}`}>
                    <RecentlyAdded />
                    <MostPlayedToday />
                </section >
            </>
        )
    }

    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    )
}
export default MoreGames;