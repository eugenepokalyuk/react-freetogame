import {
    ADD_SELECTED_GAME,
    CLEAR_SELECTED_GAME,
} from '../actions/selectedGame'
import { selectedGameReducer } from './selectedGame';

const initialState = {
    selectedGame: null,
};

describe("ingredients reducer test 👇", () => {
    it("should handle ADD_SELECTED_GAME", () => {
        const action = { type: ADD_SELECTED_GAME, payload: { id: 137 } };
        const state = selectedGameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            selectedGame: { id: 137 }
        });
    });

    it("should handle CLEAR_SELECTED_GAME", () => {
        const action = { type: CLEAR_SELECTED_GAME };
        const state = selectedGameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            selectedGame: null,
        });
    });

    it("should return the initial state for unknown action", () => {
        const action = { type: "UNKNOWN_ACTION" };
        const state = selectedGameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
        });
    });
});
