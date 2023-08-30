import { IGame } from '../types';

export const FETCH_GAME_REQUEST: 'FETCH_GAME_REQUEST' = 'FETCH_GAME_REQUEST' as const;
export const FETCH_GAME_SUCCESS: 'FETCH_GAME_SUCCESS' = 'FETCH_GAME_SUCCESS' as const;
export const FETCH_GAME_FAILURE: 'FETCH_GAME_FAILURE' = 'FETCH_GAME_FAILURE' as const;
export const CLEAR_GAME_DETAILS: 'CLEAR_GAME_DETAILS' = 'CLEAR_GAME_DETAILS' as const;

export type TGame =
    | IFetchGameRequestAction
    | IFetchGameSuccessAction
    | IFetchGameFailureAction
    | IClearGameDetailsAction;

export interface IFetchGameRequestAction {
    readonly type: typeof FETCH_GAME_REQUEST;
}

export interface IFetchGameSuccessAction {
    readonly type: typeof FETCH_GAME_SUCCESS;
    readonly payload: IGame[];
}

export interface IFetchGameFailureAction {
    readonly type: typeof FETCH_GAME_FAILURE;
    readonly payload: string;
}

export interface IClearGameDetailsAction {
    readonly type: typeof CLEAR_GAME_DETAILS;
}

export const fetchGameRequest = (): IFetchGameRequestAction => ({
    type: FETCH_GAME_REQUEST,
});

export const fetchGameSuccess = (data: IGame[]): IFetchGameSuccessAction => ({
    type: FETCH_GAME_SUCCESS,
    payload: data,
});

export const fetchGameFailure = (error: string): IFetchGameFailureAction => ({
    type: FETCH_GAME_FAILURE,
    payload: error,
});

export const clearGameDetailsAction = (): IClearGameDetailsAction => ({
    type: CLEAR_GAME_DETAILS,
});