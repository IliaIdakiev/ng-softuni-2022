import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0
// }

// import { BehaviorSubject, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, retry, scan, Subject, switchMap } from "rxjs";
// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0,
//   users: null
// }


// function reducer(state: any, action: any) {
//   if (action.type === 'EVENT_1') {
//     return {
//       ...state,
//       arr: action.value
//     };
//   }
//   if (action.type === 'EVENT_2') {
//     return {
//       ...state,
//       obj: action.value
//     };
//   }
//   if (action.type === 'EVENT_3') {
//     return {
//       ...state,
//       count: action.value
//     };
//   }
//   if (action.type === 'LOAD_USERS_SUCCESS') {
//     return {
//       ...state,
//       users: action.value
//     }
//   }
//   return state;
// }

// // const result = [{
// //   type: 'EVENT_1', value: [1, 2, 3]
// // }, {
// //   type: 'EVENT_2', value: { a: 1 }
// // }, {
// //   type: 'EVENT_3', value: 3
// // }].reduce(reducer, initialState);

// interface IState {
//   arr: number[] | null;
//   obj: { test: number } | null;
//   count: number;
//   users: null | any[]
// }

// function getState(initialState: IState, reducer: any) {
//   const state$$ = new BehaviorSubject<IState | null>(null);
//   const actions$$ = new Subject<any>();
//   return {
//     actions$: actions$$.asObservable(),
//     state$: state$$.asObservable().pipe(
//       filter(val => !!val),
//       scan(reducer, initialState)
//     ),
//     dispatch: (action: any) => {
//       actions$$.next(action);
//       state$$.next(action);
//     }
//   };
// };

// const { state$, dispatch, actions$ } = getState(initialState as any, reducer);
// state$.subscribe(console.log);

// function createSelector(state$: Observable<IState>, mapFn: (state: IState) => IState[keyof IState]): Observable<IState[keyof IState]> {
//   return state$.pipe(map(mapFn), distinctUntilChanged())
// }

// function createEffect(actions$: Observable<any>, actionType: string, op1: OperatorFunction<any, any>) {
//   actions$.pipe(filter(a => a.type === actionType), op1).subscribe(action => {
//     dispatch(action);
//   });
// }

// const isLoadingUsers$ = merge(
//   actions$.pipe(
//     filter(a => a.type === 'LOAD_USERS'),
//     map(() => true)
//   ),
//   actions$.pipe(
//     filter(a => a.type === 'LOAD_USERS_SUCCESS'),
//     map(() => false)
//   ),
// );

// const arrSelector$ = createSelector(state$, s => s.arr);


// dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

// setTimeout(() => {
//   dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

//   setTimeout(() => {
//     dispatch({ type: 'EVENT_3', value: 1000 });
//     dispatch({ type: 'LOAD_USERS' });
//   }, 5000)
// })


// createEffect(actions$, 'LOAD_USERS', switchMap(() =>
//   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
//     .then(users => ({ type: 'LOAD_USERS_SUCCESS', value: users }))
// ));

// createSelector(state$, s => s.users).subscribe(console.log);

// isLoadingUsers$.subscribe(console.log);