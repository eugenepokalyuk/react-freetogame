import {
    FETCH_GAMES_FAILURE,
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
} from '../actions/games'
import { gamesReducer } from './games';

const initialState = {
    games: [],
    loading: false,
    error: null,
};

describe("ingredients reducer test 👇", () => {
    it("should handle FETCH_GAMES_FAILURE", () => {
        const error = new Error("Test error message");
        const action = { type: FETCH_GAMES_FAILURE, payload: error.message };
        const state = gamesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: error.message
        });
        expect(state.loading).toBe(false);
    });

    it("should handle FETCH_GAMES_REQUEST", () => {
        const action = { type: FETCH_GAMES_REQUEST };
        const state = gamesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
        expect(state.loading).toBe(true);
    });

    it("should handle FETCH_GAMES_SUCCESS", () => {
        const action = { type: FETCH_GAMES_SUCCESS, payload: [{ id: 137 }, { id: 138 }] };
        const state = gamesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            games: [{ id: 137 }, { id: 138 }],
            loading: false,
        });
        expect(state.loading).toBe(false);
    });

    it("should return the initial state for unknown action", () => {
        const action = { type: "UNKNOWN_ACTION" };
        const state = gamesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
        });
    });
});
