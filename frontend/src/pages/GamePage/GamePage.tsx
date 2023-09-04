import { FC, useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import { useMediaQuery } from "react-responsive";
import { useAppDispatch } from '../../services/hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { FETCH_GAME_FAILURE, FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS } from '../../services/actions/game';
import { fetchGameData } from '../../utils/api';
import Modal from '../../components/Modal/Modal';
import GameLeftSide from '../../components/GameLeftSide/GameLeftSide';
import GameRightSide from '../../components/GameRightSide/GameRightSide';

const GamePage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(true);

    type Param = {
        id: string;
    };

    const { id } = useParams<Param>();
    let gameIdNumber = parseInt(`${id}`);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    useEffect(() => {
        dispatch({ type: FETCH_GAME_REQUEST });
        fetchGameData(gameIdNumber)
            .then((res) => {
                dispatch({ type: FETCH_GAME_SUCCESS, payload: res });
                setError(false);
            })
            .catch(error => {
                dispatch({ type: FETCH_GAME_FAILURE });
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [dispatch, gameIdNumber]);


    const closeModal = () => {
        navigate(-1);
        setIsModalOpen(false);
    };

    const DesktopView: FC = () => {
        return (
            <section className={`${styles.section} ${`${styles.grid}`}`}>
                <GameLeftSide />
                <GameRightSide />
            </section>
        )
    }
    const MobileView: FC = () => {
        return (
            <section className={`${styles.section}`}>
                <GameRightSide />
            </section>
        )
    }

    return (
        isLoading
            ? (
                <>
                    <Modal onClose={closeModal}>
                        <div>
                            <p className={`${styles.mb8} ${styles.fontSizeLarge}`}>Please wait, the data for the application is being loaded</p>

                            <p className={`${styles.mb8}`}>
                                <FontAwesomeIcon icon={faSpinner} spin size="5x" className={`${styles.mr2}`} />
                            </p>
                        </div>

                    </Modal>
                    <main className={styles.main}></main>
                </>
            ) : isError
                ? (
                    <>
                        <Modal onClose={closeModal}>
                            <div>
                                <p className={`${styles.mb8} ${styles.fontSizeLarge}`}><FontAwesomeIcon icon={faGear} spin size="5x" /></p>
                            </div>

                            <div>
                                <p className={`${styles.mb8} ${styles.fontSizeLarge}`}> Sorry, but i can get response</p>
                                <p className={`${styles.mb8} ${styles.fontSizeLarge}`}> Try again please later...</p>
                            </div>

                        </Modal>
                        <main className={styles.main}></main>
                    </>
                ) : (
                    <main className={`${styles.main} ${styles.textCenter}`}>
                        <div className={`${styles.pageContainer}`}>
                            {gameIdNumber
                                ? (isDesktop
                                    ? <DesktopView />
                                    : <MobileView />
                                ) : (<NotFound />)}
                        </div>
                    </main>
                )
    );
};

export default GamePage;