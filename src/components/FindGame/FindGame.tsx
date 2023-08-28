import { FC, useState, useEffect } from 'react';
import styles from './FindGame.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { IGame } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { ADD_SELECTED_GAME } from '../../services/actions/selectedGame';

const FindGame: FC = () => {
    const dispatch = useAppDispatch();
    const { games } = useAppSelector((store: any) => store.games);

    const gamesPerPage = 6;
    const visiblePages = 5;

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const uniqueGenres = Array.from(new Set(games.map((item: IGame) => item.genre)));
    const uniquePlatforms = Array.from(new Set(games.map((item: IGame) => item.platform)));
    const [filteredGames, setFilteredGames] = useState<IGame[]>([]);
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);
    const noResultsFound = filteredGames.length === 0 && searchTerm !== '';

    useEffect(() => {
        const filtered = games.filter((item: IGame) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedGenre === '' || item.genre === selectedGenre) &&
            (selectedPlatform === '' || item.platform === selectedPlatform)
        );
        setFilteredGames(filtered);
    }, [games, searchTerm, selectedGenre, selectedPlatform]);

    if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const handleDispatch = (item: IGame) => {
        dispatch({ type: ADD_SELECTED_GAME, payload: item })
    }

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb12}`}>
                <div className={styles.container}>

                    <div className={styles.filters}>
                        <input
                            type="text"
                            placeholder="Finding the Game..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <select
                            value={selectedGenre}
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
                            <p className={styles.noResults}>No results found for '{searchTerm}'.</p>
                        ) : (
                            filteredGames.slice(startIndex, endIndex).map((item: IGame) => (
                                <div
                                    key={item.title}
                                    className={styles.gameCard}
                                >
                                    <img src={item.thumbnail} alt="" />
                                    <h2>{item.title}</h2>
                                    <p className={`${styles.mb2} ${styles.textMuted}`}>{item.short_description}</p>

                                    <div className={`${styles.flex} ${styles.mb4}`}>
                                        <p className={`${styles.mrAuto}`}>
                                            <span className={`${styles.badge}`}>{item.genre}</span>
                                        </p>

                                        <p className={styles.mlAuto}>
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
                                        </p>
                                    </div>

                                    <div>
                                        <NavLink to={`/open/${item.title}`} className={`${styles.button} ${styles.light}`} onClick={() => { handleDispatch(item) }}>
                                            See more
                                        </NavLink>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>

                    <div className={styles.pagination}>
                        <div className={styles.paginationCard}>
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

    const MobileView: FC = () => {
        return (
            <section className={`${styles.section} ${styles.mb12}`}>
                <div className={styles.container}>

                    <div className={styles.filters}>
                        <input
                            type="text"
                            placeholder="Finding the Game..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <select
                            value={selectedGenre}
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
                            <p className={styles.noResults}>No results found for '{searchTerm}'.</p>
                        ) : (
                            filteredGames.slice(startIndex, endIndex).map((item: IGame) => (
                                <div
                                    key={item.title}
                                    className={styles.gameCard}
                                >
                                    <img className={`${styles.imageSize}`} src={item.thumbnail} alt={`${item.title}`} />
                                    <h2>{item.title}</h2>
                                    <p className={`${styles.mb2} ${styles.textMuted}`}>{item.short_description}</p>

                                    <div className={`${styles.flex} ${styles.mb4}`}>
                                        <p className={`${styles.mrAuto}`}>
                                            <span className={`${styles.badge}`}>{item.genre}</span>
                                        </p>

                                        <p className={styles.mlAuto}>
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
                                        </p>
                                    </div>

                                    <div>
                                        <NavLink to={`/open/${item.title}`} className={`${styles.button} ${styles.light}`} onClick={() => { handleDispatch(item) }}>
                                            See more
                                        </NavLink>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>

                    <div className={styles.pagination}>
                        <div className={styles.paginationCard}>
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

    return (
        isDesktop
            ? <DesktopView />
            : <MobileView />
    )
}
export default FindGame;