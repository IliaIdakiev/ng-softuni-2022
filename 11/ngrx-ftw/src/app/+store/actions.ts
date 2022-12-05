import { createAction, props } from "@ngrx/store";

const actioTypes = {
  increment: 'INCREMENT',
  setValue: 'SET_VALUE',
  loadUsers: 'LOAD_USERS',
  loadUsersSuccess: 'LOAD_USERS_SUCCESS',
  loadUsersFailure: 'LOAD_USERS_FAILURE',
};

export const increment = createAction(actioTypes.increment);
export const setValue = createAction(actioTypes.setValue, props<{ counter: number }>());

export const loadUsers = createAction(actioTypes.loadUsers, props<{ filter?: string }>());
export const loadUsersSuccess = createAction(actioTypes.loadUsersSuccess, props<{ users: any[] }>());
export const loadUsersFailure = createAction(actioTypes.loadUsersFailure, props<{ error: any }>());
