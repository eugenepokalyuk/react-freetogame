import { FC, useState, useEffect, useRef } from 'react';
import styles from './FindGame.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { IGame } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { ADD_SELECTED_GAME } from '../../services/actions/selectedGame';
import { useMediaQuery } from 'react-responsive';

const FindGame: FC = () => {
    const dispatch = useAppDispatch();
    const { games } = useAppSelector((store: any) => store.games);

    const location = useLocation();

    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [selectedSort, setSelectedSort] = useState<string>('');
    const [selectedPlatform, setSelectedPlatform] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedText, setSelectedText] = useState<string>('');

    let gamesPerPage = 6;

    const visiblePages = 5;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;

    useEffect(() => {
        if (inputFocus && searchInputRef.current) {
            searchInputRef.current.focus();
            setInputFocus(false);
        }
    }, [inputFocus]);

    const sortOptions = [
        { value: 'release_date', label: 'Release Date' },
        { value: 'publisher', label: 'Publisher' },
        { value: 'developer', label: 'Developer' }
    ];

    const uniqueGenres = Array.from(new Set(games.map((item: IGame) => item.genre)));
    const uniquePlatforms = Array.from(new Set(games.map((item: IGame) => item.platform)));

    const filteredGames = games
        .filter((game: IGame) => {
            const searchMatch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
            const genreMatch = selectedGenre === '' || game.genre === selectedGenre;
            const platformMatch = selectedPlatform === '' || game.platform === selectedPlatform;
            return searchMatch && genreMatch && platformMatch;
        })
        .sort((a: any, b: any) => {
            if (selectedSort === 'release_date') {
                return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
            } else if (selectedSort === 'publisher') {
                return a.publisher.localeCompare(b.publisher);
            } else if (selectedSort === 'developer') {
                return b.developer.localeCompare(a.developer);
            }
            return 0;
        })
    // .sort((a: any, b: any) => {
    //     if (selectedSort === 'release_date') {
    //         return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    //     } else if (selectedSort === 'publisher') {
    //         return b.publisher - a.publisher;
    //     } else if (selectedSort === 'developer') {
    //         return b.developer - a.developer;
    //     }
    //     return 0;
    // })

    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);
    const noResultsFound = filteredGames.length === 0 && searchTerm !== '';

    const handleDispatch = (item: IGame) => {
        dispatch({ type: ADD_SELECTED_GAME, payload: item })
    }

    const formatDate = (dateString: string) => {
        const options: Object = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <section className={`${styles.section} ${styles.mb12}`}>
            <div className={styles.container}>
                <div className={styles.filters}>
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setSelectedText(e.target.value);
                        }}
                        onFocus={() => setInputFocus(true)}
                        ref={searchInputRef}
                    />

                    <select
                        value={selectedSort}
                        className={styles.customSelect}
                        onChange={(e) => setSelectedSort(e.target.value)}
                    >
                        <option value="">Sort by</option>
                        {sortOptions.map((option: any) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>


                    <select
                        value={selectedGenre}
                        className={styles.customSelect}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        <option value="">Choose a genre</option>
                        {uniqueGenres.map((genre: any) => (
                            <option
                                key={uuidv4()}
                                value={genre}
                            >
                                {genre}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedPlatform}
                        className={styles.customSelect}
                        onChange={(e) => setSelectedPlatform(e.target.value)}
                    >
                        <option value="">Select a platform</option>
                        {uniquePlatforms.map((genre: any) => (
                            <option
                                key={uuidv4()}
                                value={genre}
                            >
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.gameGrid}>
                    {noResultsFound ? (
                        <div>
                            <p>No results found for '{searchTerm}'.</p>
                        </div>
                    ) : (
                        filteredGames.slice(startIndex, endIndex).map((item: IGame) => {
                            return (
                                <NavLink to={`/game/${item.id}`} onClick={() => { handleDispatch(item) }} key={uuidv4()}>
                                    <div
                                        key={item.title}
                                        className={`${styles.gameCard}`}
                                    >
                                        <div>
                                            <img src={item.thumbnail} alt="" className={`${styles.w100}`} />

                                            <div className={styles.cardHeader}>
                                                <div>
                                                    <h2 className={`${styles.cardTitle} ${styles.highlightedTitle}`}>{item.title}</h2>
                                                </div>
                                                <div className={`${styles.icons} ${styles.iconContainer}`} title={item.platform}>
                                                    {item.platform === 'PC (Windows)'
                                                        ? <FontAwesomeIcon icon={faWindows} />
                                                        : item.platform === 'Web Browser'
                                                            ? <FontAwesomeIcon icon={faWindowMaximize} />
                                                            :
                                                            <>
                                                                <FontAwesomeIcon icon={faWindows} className={`${styles.mr2}`} />
                                                                <FontAwesomeIcon icon={faWindowMaximize} />
                                                            </>
                                                    }
                                                </div>
                                            </div>

                                            <div className={`${styles.flex} ${styles.mb2}`}>
                                                <p className={`${styles.mrAuto}`}>
                                                    {item.publisher}
                                                </p>

                                                <p className={`${styles.mrAuto}`}>
                                                    {formatDate(item.release_date)}
                                                </p>
                                            </div>

                                            <p className={`${styles.textMuted} ${styles.description}`}>{item.short_description}</p>

                                            <div className={`${styles.flex} ${styles.mb2}`}>
                                                <p className={`${styles.mrAuto}`}>
                                                    <span className={`${styles.badge}`}>{item.genre}</span>
                                                </p>
                                            </div>

                                        </div>

                                        <div className={styles.w100}>
                                            <button className={`${styles.button} ${styles.secondary} ${styles.w100}`} >Details</button>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    )}
                </div>

                <div className={styles.pagination}>
                    <div className={styles.paginationCardLeft}>

                        {location.pathname === '/interface'
                            ? <NavLink to="/">
                                <button className={`${styles.buttonSmall} ${styles.secondary} ${styles.followButtonHeight}`}>
                                    Follow to main page
                                </button>
                            </NavLink>
                            : <NavLink to="/interface">
                                <button className={`${isDesktop ? `${styles.buttonSmall} ${styles.followButtonHeight}` : styles.button} ${styles.secondary}`}>
                                    Follow to single interface
                                </button>
                            </NavLink>
                        }

                    </div>

                    <div className={styles.paginationCardRight}>
                        {startPage > 1 && (
                            <button
                                className={styles.paginationButton}
                                onClick={() => handlePageChange(1)}
                            >
                                1
                            </button>
                        )}

                        {startPage > 2 && (
                            <span className={styles.ellipsis}>...</span>
                        )}

                        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                            <button
                                key={startPage + index}
                                className={`${styles.paginationButton} ${currentPage === startPage + index ? styles.active : ''}`}
                                onClick={() => handlePageChange(startPage + index)}
                            >
                                {startPage + index}
                            </button>
                        ))}

                        {endPage < totalPages - 1 && (
                            <span className={styles.ellipsis}>...</span>
                        )}

                        {endPage < totalPages && (
                            <button
                                className={styles.paginationButton}
                                onClick={() => handlePageChange(totalPages)}
                            >
                                {totalPages}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindGame;