import { combineReducers } from 'redux';
import { gamesReducer } from './games';
import { selectedGameReducer } from './selectedGame';
import { gameReducer } from './game';

const rootReducer = combineReducers({
    game: gameReducer,
    games: gamesReducer,
    selectedGame: selectedGameReducer,
});

export default rootReducer;