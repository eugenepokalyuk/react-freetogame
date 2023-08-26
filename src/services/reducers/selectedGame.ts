import {
    ADD_SELECTED_GAME,
    CLEAR_SELECTED_GAME,
    TCurrentGame
} from '../actions/selectedGame'

const initialState = {
    selectedGame: null,
} as const;

// export const selectGame = (state: TCurrentGame) => state;
export const selectGame = (state: any) => state.selectedGame;

export const selectedGameReducer = (state = initialState, action: TCurrentGame) => {
    switch (action.type) {
        case ADD_SELECTED_GAME:
            return {
                ...state,
                selectedGame: action.payload,
            };
        case CLEAR_SELECTED_GAME:
            return {
                ...state,
                selectedGame: null,
            };
        default:
            return state;
    }
};