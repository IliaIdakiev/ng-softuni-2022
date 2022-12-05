import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IMainState } from './index';
import { RouterStateUrl } from './router';

const mainSelector = createFeatureSelector<IMainState>('main');
const routerSelector = createFeatureSelector<{ state: RouterStateUrl }>('router');

export const getCounter = createSelector(mainSelector, s => s.counter);
export const getUsers = createSelector(mainSelector, s => s.users);
export const getUrl = createSelector(routerSelector, s => s?.state?.url);