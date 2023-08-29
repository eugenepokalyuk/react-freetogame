import { IGame } from '../types';

export const FETCH_GAMES_REQUEST: 'FETCH_GAMES_REQUEST' = 'FETCH_GAMES_REQUEST' as const;
export const FETCH_GAMES_SUCCESS: 'FETCH_GAMES_SUCCESS' = 'FETCH_GAMES_SUCCESS' as const;
export const FETCH_GAMES_FAILURE: 'FETCH_GAMES_FAILURE' = 'FETCH_GAMES_FAILURE' as const;

export type TGames =
    | IFetchGamesRequestAction
    | IFetchGamesSuccessAction
    | IFetchGamesFailureAction;

export interface IFetchGamesRequestAction {
    readonly type: typeof FETCH_GAMES_REQUEST;
}

export interface IFetchGamesSuccessAction {
    readonly type: typeof FETCH_GAMES_SUCCESS;
    readonly payload: IGame[];
}

export interface IFetchGamesFailureAction {
    readonly type: typeof FETCH_GAMES_FAILURE;
    readonly payload: string;
}

export const fetchGamesRequest = (): IFetchGamesRequestAction => ({
    type: FETCH_GAMES_REQUEST,
});

export const fetchGamesSuccess = (data: IGame[]): IFetchGamesSuccessAction => ({
    type: FETCH_GAMES_SUCCESS,
    payload: data,
});

export const fetchGamesFailure = (error: string): IFetchGamesFailureAction => ({
    type: FETCH_GAMES_FAILURE,
    payload: error,
});