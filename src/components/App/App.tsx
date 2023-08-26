import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppHeader from "../AppHeader/AppHeader"
import { DEFAULT_PATH, ERROR_PATH, GAME_PATH } from '../../utils/routePath';

import HomePage from '../../pages/HomePage/HomePage';
import GamePage from '../../pages/GamePage/GamePage';
import NotFound from '../../pages/NotFound/NotFound';
import AppFooter from '../AppFooter/AppFooter';

import { IGame } from '../../services/types';
import { useAppDispatch } from '../../services/hooks/hooks';

import { fetchGamesData } from '../../utils/api';
import { FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, fetchGamesRequest } from '../../services/actions/games';

import discoverGames from '../../utils/discoverGames.json';

function App() {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch({ type: FETCH_GAMES_REQUEST });
    dispatch({ type: FETCH_GAMES_SUCCESS, payload: discoverGames });

    // fetchGamesData()
    //   .then(res => {
    //     console.log('res', res);
    //     dispatch({ type: FETCH_GAMES_SUCCESS, payload: res });
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //     dispatch({ type: FETCH_GAMES_FAILURE });
    //   });

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
  }, [dispatch]);

  return (
    <>
      <AppHeader />

      <Routes location={background || location}>
        <Route path={DEFAULT_PATH} element={<HomePage />} />
        <Route path={GAME_PATH} element={<GamePage />} />
        <Route path={ERROR_PATH} element={<NotFound />} />
      </Routes>

      <AppFooter />
    </>
  );
}

export default App;