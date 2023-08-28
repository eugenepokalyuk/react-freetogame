import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';

import AppHeader from "../AppHeader/AppHeader"
import { DEFAULT_PATH, ERROR_PATH, GAME_PATH } from '../../utils/routePath';

import HomePage from '../../pages/HomePage/HomePage';
import GamePage from '../../pages/GamePage/GamePage';
import NotFound from '../../pages/NotFound/NotFound';
import AppFooter from '../AppFooter/AppFooter';

import { useAppDispatch } from '../../services/hooks/hooks';

import { fetchGamesData } from '../../utils/api';
import { FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS } from '../../services/actions/games';
import Modal from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGear, faSpinner } from '@fortawesome/free-solid-svg-icons';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const location = useLocation();
  const background = location.state && location.state.background;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVPN, setIsVPN] = useState<boolean>(true);

  useEffect(() => {
    dispatch({ type: FETCH_GAMES_REQUEST });
    fetchGamesData()
      .then(data => {
        dispatch({ type: FETCH_GAMES_SUCCESS, payload: data });
        setIsVPN(false)
      })
      .catch(error => {
        dispatch({ type: FETCH_GAMES_FAILURE });
        setIsVPN(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const closeModal = () => {
    navigate(-1);
    setIsModalOpen(false);
  };

  return (
    <>
      <AppHeader />

      {isLoading
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
        )
        : isVPN
          ? (<>
            <Modal onClose={closeModal}>
              <div>
                {/* This demo of CORS Anywhere should only be used for development purposes, see https://github.com/Rob--W/cors-anywhere/issues/301. */}
                {/* To temporarily unlock access to the demo, click on the following button: */}
                <p className={`${styles.mb8} ${styles.fontSizeLarge}`}><FontAwesomeIcon icon={faGear} fade size="1x" /> This demo of CORS Anywhere should only be used for development purposes</p>
              </div>

              <div className={`${styles.mb4}`}>
                <p>To temporarily unlock access to the demo, click on the following button:</p>
              </div>

              <div>
                <NavLink to="https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games">
                  <button className={`${styles.button} ${styles.light}`}>
                    Request temporary access to the demo server
                  </button>
                </NavLink>
              </div>
            </Modal>
            <main className={styles.main}></main>
          </>
          )
          : (
            <Routes location={background || location}>
              <Route path={DEFAULT_PATH} element={<HomePage />} />
              <Route path={GAME_PATH} element={<GamePage />} />
              <Route path={ERROR_PATH} element={<NotFound />} />
            </Routes>
          )
      }

      <AppFooter />
    </>
  );
}

export default App;