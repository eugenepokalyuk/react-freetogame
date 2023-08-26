import { FC, useState, useEffect, useRef } from 'react';
import styles from './AppHeader.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faClone, faEllipsisH, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import logo from '../../images/freetogame-logo.png'
import { useAppSelector } from '../../services/hooks/hooks';
import { IGame } from '../../services/types';
import { v4 as uuidv4 } from 'uuid';

const AppHeader: FC = () => {
    const { games } = useAppSelector((store: any) => store.games);
    const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
    const [isBrowserMenuOpen, setIsBrowserMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement | null>(null);

    // Функция для получения уникальных жанров из массива игр
    const getUniqueGenres = (games: IGame[]) => {
        const uniqueGenres: string[] = [];
        games.forEach((game: IGame) => {
            if (!uniqueGenres.includes(game.genre)) {
                uniqueGenres.push(game.genre);
            }
        });
        return uniqueGenres;
    };

    // Фильтрация игр для каждой платформы
    const pcGames = games.filter((game: IGame) => game.platform === "PC (Windows)");
    const browserGames = games.filter((game: IGame) => game.platform === "Web Browser");

    // Получение уникальных жанров для каждой платформы
    const pcGenres = getUniqueGenres(pcGames);
    const browserGenres = getUniqueGenres(browserGames);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsGenreMenuOpen(false);
            setIsBrowserMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenusExcept = (menuToKeepOpen: string) => {
        if (menuToKeepOpen !== 'genre') {
            setIsGenreMenuOpen(false);
        }
        if (menuToKeepOpen !== 'browser') {
            setIsBrowserMenuOpen(false);
        }
    };

    const toggleGenreMenu = () => {
        closeMenusExcept('genre');
        setIsGenreMenuOpen(!isGenreMenuOpen);
    };

    const toggleBrowserMenu = () => {
        closeMenusExcept('browser');
        setIsBrowserMenuOpen(!isBrowserMenuOpen);
    };

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const link = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`;

    const DesktopView: FC = () => {
        return (
            <nav className={`${styles.container} ${styles.flex} ${styles.shadows}`}>
                <NavLink to='/' className={`${styles.flex} ${styles.link} ${styles.p01}`}>
                    <img src={logo} alt="Логотип компании FreeToGame" />
                </NavLink>

                <div className={`${styles.flex} ${styles.navbarCollapse}`}>
                    <ul className={`${styles.flex}`}>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`} onClick={toggleGenreMenu}>
                            <NavLink to="/" className={`${styles.link}`} onClick={(e) => e.preventDefault()}>
                                Free Games
                                {isGenreMenuOpen
                                    ? <FontAwesomeIcon icon={faCaretUp} className={`${styles.smallFont} ${styles.ml1}`} />
                                    : <FontAwesomeIcon icon={faCaretDown} className={`${styles.smallFont} ${styles.ml1}`} />
                                }
                            </NavLink>
                            {isGenreMenuOpen && (
                                <ul ref={menuRef} className={`${styles.contextMenu}`} onClick={(e) => e.stopPropagation()}>
                                    {pcGenres.map((item) =>
                                        <li key={uuidv4()} className={`${styles.contextMenuItem}`}>
                                            <NavLink to={`/${item}`}>
                                                {item}
                                            </NavLink>
                                        </li>
                                    )}
                                    <div className={`${styles.dropdownDivider}`}></div>
                                    <li key={uuidv4()} className={`${styles.contextMenuItem}`}>
                                        <NavLink to='/link-5'>
                                            Free-To-Play Games
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`} onClick={toggleBrowserMenu}>
                            <NavLink to="/" className={`${styles.link}`} onClick={(e) => e.preventDefault()}>
                                Browser Games
                                {isBrowserMenuOpen
                                    ? <FontAwesomeIcon icon={faCaretUp} className={`${styles.smallFont} ${styles.ml1}`} />
                                    : <FontAwesomeIcon icon={faCaretDown} className={`${styles.smallFont} ${styles.ml1}`} />
                                }
                            </NavLink>
                            {isBrowserMenuOpen && (
                                <ul ref={menuRef} className={`${styles.contextMenu}`} onClick={(e) => e.stopPropagation()}>
                                    {browserGenres.map((item) =>
                                        <li key={uuidv4()} className={`${styles.contextMenuItem}`}>
                                            Browser {item}
                                        </li>
                                    )}
                                </ul>
                            )}
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/giveaways' className={`${styles.link} ${styles.mr1}`}>
                                Special Offers
                            </NavLink>
                            <span className={`${styles.badge} ${styles.badgePill}`}>1</span>
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/link-4' className={`${styles.link}`}>
                                Top 2023
                            </NavLink>
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/link-5' className={`${styles.link} ${styles.p01}`}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </NavLink>
                        </li>
                    </ul>

                    <ul className={`${styles.flex}`}>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/link-6' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faSearch} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/link-7' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faGift} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault}`}>
                            <NavLink to='/library' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faClone} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02} ${styles.fontSizeDefault} ${styles.fontStyleCapitalize}`}>
                            <NavLink to='/login' className={`${styles.link}`}>
                                Log in
                            </NavLink>
                        </li>
                        <li className={`${styles.ml4} ${styles.fontSizeDefault}`}>
                            <NavLink to='/register' className={`${link} ${styles.nav_button}`}>
                                Join Free
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav >
        )
    }

    return (
        <header className={`${styles.header}`}>
            {
                <DesktopView />
            }
        </header>
    );
};

export default AppHeader;