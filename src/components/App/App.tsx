import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppHeader from "../AppHeader/AppHeader"
import { DEFAULT_PATH, ERROR_PATH, GAME_PATH } from '../../utils/routePath';

import HomePage from '../../pages/HomePage/HomePage';
import GamePage from '../../pages/GamePage/GamePage';
import NotFound from '../../pages/NotFound/NotFound';
import AppFooter from '../AppFooter/AppFooter';

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const background = location.state && location.state.background;

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
