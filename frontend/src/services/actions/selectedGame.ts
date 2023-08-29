import { IGame } from "../types";

export const ADD_SELECTED_GAME: 'ADD_SELECTED_GAME' = 'ADD_SELECTED_GAME' as const;
export const CLEAR_SELECTED_GAME: 'CLEAR_SELECTED_GAME' = 'CLEAR_SELECTED_GAME' as const;

export type TCurrentGame =
    | IAddSelectedGameAction
    | IClearSelectedGameAction;

// Генераторы экшенов
export interface IAddSelectedGameAction {
    readonly type: typeof ADD_SELECTED_GAME;
    readonly payload: IGame;
}

export interface IClearSelectedGameAction {
    readonly type: typeof CLEAR_SELECTED_GAME;
}

export const addViewedIngredient = (game: IGame): IAddSelectedGameAction => ({
    type: ADD_SELECTED_GAME,
    payload: game,
});

export const clearViewedIngredient = (): IClearSelectedGameAction => ({
    type: CLEAR_SELECTED_GAME,
});