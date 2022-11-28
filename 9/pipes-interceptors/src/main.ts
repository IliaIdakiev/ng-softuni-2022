import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
// function interval(delay: number, count: number | null = null) {
//   let counter = 0;
//   return new Observable(observer => {
//     const id = setInterval(() => {
//       if (count === counter) {
//         observer.complete();
//         return
//       }
//       observer.next(counter++)
//     }, delay);

//     return () => {
//       clearInterval(id);
//     };
//   })
// }

// const sub = interval(1000, 5).subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.error(error),
//   complete: () => {
//     console.log('Observable completed')
//   }
// });
// setTimeout(() => {
//   sub.unsubscribe();
// }, 1000)

// const subj$$ = new Subject();

// const bSubject$$ = new BehaviorSubject(1)

// const rSubject$$ = new ReplaySubject(20);
// rSubject$$.next(100);


// rSubject$$.subscribe(console.log);
// rSubject$$.next(200);
// rSubject$$.next(300);
// rSubject$$.next(400);

// console.log('====')
// rSubject$$.subscribe(console.log);

// // setTimeout(() => {
// //   bSubject$$.subscribe(console.log);
// //   bSubject$$.next(100);
// //   setTimeout(() => {
// //     bSubject$$.subscribe(console.log);
// //   }, 1000);
// // }, 1000);

// // // subj$$.subscribe({
// // //   next: (value) => console.log(value),
// // //   error: (error) => console.error(error),
// // //   complete: () => {
// // //     console.log('Observable completed')
// // //   }
// // // });
// // // subj$$.subscribe(console.log);
// // // subj$$.subscribe(console.log);

// // // subj$$.next(100);

// // // setTimeout(() => {
// // //   subj$$.next(200);
// // //   subj$$.subscribe(console.log);

// // //   setTimeout(() => {
// // //     subj$$.next(200);
// // //   }, 5000)
// // // }, 1000);


// // // // const s$ = new Observable((observer) => {
// // // //   observer.next(100);
// // // //   observer.next(200);
// // // //   observer.next(300);


// // // //   observer.error(new Error('BAD ERROR!'));
// // // // });

// // // // s$.pipe(
// // // //   map((a: any) => a + 1)
// // // // ).subscribe({
// // // //   next: (value) => console.log(value),
// // // //   error: (error) => console.error(error)
// // // // });

// // // // s$.pipe(
// // // //   map((a: any) => a + 1)
// // // // ).subscribe({
// // // //   next: (value) => console.log(value),
// // // //   error: (error) => console.error(error)
// // // // });