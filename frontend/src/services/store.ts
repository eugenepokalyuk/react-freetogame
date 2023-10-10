import { createStore, applyMiddleware, Store, Action, ActionCreator } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { RootState } from './types';

const initialState: RootState = {
    games: {
        games: [],
        loading: false,
        error: null,
    },
    selectedGame: {
        selectedGame: null,
    },
    game: {
        game: [],
        loading: false,
        error: null,
    },
};

export type TApplicationActions = any;

// Типизация хранилища
export type StoreType = Store<RootState, any>

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export const store: StoreType = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware<AppThunk>(thunkMiddleware)
    )
);