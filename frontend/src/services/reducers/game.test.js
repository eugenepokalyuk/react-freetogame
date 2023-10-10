import {
    FETCH_GAME_FAILURE,
    FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS
} from '../actions/game'
import { gameReducer } from './game';

const initialState = {
    game: [],
    loading: false,
    error: null,
};

describe("ingredients reducer test 👇", () => {
    it("should handle FETCH_GAME_FAILURE", () => {
        const error = new Error("Test error message");
        const action = { type: FETCH_GAME_FAILURE, payload: error.message };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: error.message
        });
        expect(state.loading).toBe(false);
    });

    it("should handle FETCH_GAME_REQUEST", () => {
        const action = { type: FETCH_GAME_REQUEST };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
        expect(state.loading).toBe(true);
    });

    it("should handle FETCH_GAME_SUCCESS", () => {
        const action = { type: FETCH_GAME_SUCCESS, payload: { id: 137 } };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            game: { id: 137 },
            loading: false,
        });
        expect(state.loading).toBe(false);
    });

    it("should return the initial state for unknown action", () => {
        const action = { type: "UNKNOWN_ACTION" };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
        });
    });
});
