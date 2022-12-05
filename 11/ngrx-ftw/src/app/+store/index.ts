import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { increment, loadUsersSuccess, setValue } from "./actions";
import { routerReducer } from '@ngrx/router-store';

export interface IMainState {
  counter: number;
  users: null | any[];
}

interface IAppState {
  main: IMainState;
  router: ReturnType<typeof routerReducer>
}

const mainInitialState: IMainState = {
  counter: 0,
  users: null
}

const mainReducer = createReducer<IMainState>(
  mainInitialState,
  on(increment, (state) => {
    const { counter } = state;
    return { ...state, counter: counter + 1 }
  }),
  on(setValue, (state, action) => {
    const { counter } = action;
    return { ...state, counter };
  }),
  on(loadUsersSuccess, (state, { users }) => {
    return { ...state, users };
  })
)

export const reducers: ActionReducerMap<IAppState> = {
  main: mainReducer,
  router: routerReducer,
};
