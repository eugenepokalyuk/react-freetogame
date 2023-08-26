import { FC, useEffect, useState } from 'react';
import styles from './GetStarted.module.css';
import { useAppDispatch } from '../../services/hooks/hooks';
import { fetchGamesData } from '../../utils/api';
import { FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS } from '../../services/actions/games';
import fetch from 'node-fetch';
import { IGame } from '../../services/types';

const GetStarted: FC = () => {
    const dispatch = useAppDispatch();
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() => {

    }, []);

    useEffect(() => {
        console.log('games', games)
    }, [])

    // useEffect(() => {
    // dispatch({ type: FETCH_GAMES_REQUEST });
    // dispatch({ type: FETCH_GAMES_SUCCESS, payload: discoverGames });

    // fetchGamesData()
    //     .then(res => {
    //         console.log('res', res);
    //         dispatch({ type: FETCH_GAMES_SUCCESS, payload: res });
    //     })
    //     .catch(error => {
    //         console.log('error', error);
    //         dispatch({ type: FETCH_GAMES_FAILURE });
    //     });

    // const getIngredientsData = async () => {
    //   try {
    //     const data = await fetchGamesData();
    //     setGamesData(data);
    //     dispatch(fetchGamesRequest());
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // };

    // getIngredientsData();
    // }, [dispatch]);

    return (
        <section className={`${styles.textCenter} ${styles.backgroundImage} ${styles.mb12}`}>
            <h1 className={`${styles.h1}`}>Discover the best <span className={`${styles.colorlight}`}>free-to-play</span> games!</h1>
            <p className={`${styles.p} ${styles.textMuted} ${styles.mb4}`}>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <div>
                <button className={`${styles.button} ${styles.light}`}>
                    <span className={`${styles.fontWidthBold}`}>GET STARTED</span>
                    <span className={`${styles.ml1} ${styles.fontSizeSmall}`}>It's free</span>
                </button>
                <button className={`${styles.button} ${styles.secondary} ${styles.ml2}`}>
                    Browse Games
                </button>
            </div>
        </section>
    )
}

export default GetStarted;