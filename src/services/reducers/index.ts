import { combineReducers } from 'redux';
import { gamesReducer } from './games';
import { selectedGameReducer } from './selectedGame';

const rootReducer = combineReducers({
    games: gamesReducer,
    selectedGame: selectedGameReducer,
});

export default rootReducer;