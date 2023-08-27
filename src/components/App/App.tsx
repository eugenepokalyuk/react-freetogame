import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
                  <FontAwesomeIcon icon={faHeart} fade size="3x" className={`${styles.mr2}`} />
                  <FontAwesomeIcon icon={faHeart} fade size="3x" className={`${styles.mr2}`} />
                  <FontAwesomeIcon icon={faHeart} fade size="3x" />
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
                <p className={`${styles.mb8} ${styles.fontSizeLarge}`}>Content was blocked in your country use VPN</p>
              </div>

              <div>
                <p>
                  To temporarily unlock access to the demo, click on the following <a href="https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games" className={`${styles.link}`}>link</a>
                </p>
              </div>

            </Modal>
            <main className={styles.main}></main>
          </>)
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