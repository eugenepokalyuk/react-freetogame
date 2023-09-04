import {
    FETCH_GAME_FAILURE,
    FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS,
    TGame
} from '../actions/game'

const initialState = {
    game: [],
    loading: false,
    error: null,
} as const;

export const selectGames = (state: TGame) => state;

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
        default:
            return state;
    }
};