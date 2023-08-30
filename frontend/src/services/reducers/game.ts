import {
    FETCH_GAME_FAILURE,
    FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS,
    CLEAR_GAME_DETAILS,
    TGame
} from '../actions/game'

const initialState = {
    game: [],
    loading: false,
    error: null,
} as const;

export const selectGames = (state: TGame) => state;

export const selectLoading = (state: any) => state.loading;
export const selectError = (state: any) => state.error;
export const selectGamesLoading = (state: any) => state.loading;
export const clearGameDetails = (state: any) => state.game;

export const gameReducer = (state = initialState, action: TGame) => {
    switch (action.type) {
        case FETCH_GAME_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_GAME_SUCCESS:
            return {
                ...state,
                game: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_GAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_GAME_DETAILS: 
        return {
            ...state
        }
        default:
            return state;
    }
};