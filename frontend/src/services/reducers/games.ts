import {
    FETCH_GAMES_FAILURE,
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    TGames
} from '../actions/games'

const initialState = {
    games: [],
    loading: false,
    error: null,
} as const;

export const selectGames = (state: TGames) => state;

export const gamesReducer = (state = initialState, action: TGames) => {
    switch (action.type) {
        case FETCH_GAMES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                games: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_GAMES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};