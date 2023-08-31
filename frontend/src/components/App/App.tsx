import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';

import AppHeader from "../AppHeader/AppHeader"
import { DEFAULT_PATH, ERROR_PATH, GAME_PATH, INTERFACE_PATH } from '../../utils/routePath';

import HomePage from '../../pages/HomePage/HomePage';
import GamePage from '../../pages/GamePage/GamePage';
import NotFound from '../../pages/NotFound/NotFound';
import AppFooter from '../AppFooter/AppFooter';

import { useAppDispatch } from '../../services/hooks/hooks';

import { fetchGamesData } from '../../utils/api';

import { FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS } from '../../services/actions/games';
import Modal from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faGear, faSpinner } from '@fortawesome/free-solid-svg-icons';
import InterfacePage from '../../pages/InterfacePage/InterfacePage';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const location = useLocation();
  const background = location.state && location.state.background;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(true);

  useEffect(() => {
    dispatch({ type: FETCH_GAMES_REQUEST });
    fetchGamesData()
      .then(res => {
        dispatch({ type: FETCH_GAMES_SUCCESS, payload: res });
        setError(false)
      })
      .catch(error => {
        dispatch({ type: FETCH_GAMES_FAILURE });
        setError(true)
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
        : isError
          ? (<>
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
          )
          : (
            <Routes location={background || location}>
              <Route path={DEFAULT_PATH} element={<HomePage />} />
              <Route path={INTERFACE_PATH} element={<InterfacePage />} />
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