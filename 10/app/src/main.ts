import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // import { count, Observable, Subject, take } from "rxjs";
// 'http://loclhost:8080/api/users?offset=0&take=10' // page 1
// 'http://loclhost:8080/api/users?offset=9&take=10' // page 2


// const subject$$ = new Subject();
// const obs$ = subject$$.asObservable();

// const observable$ = new Observable(observer => {
//   let counter = 0;
//   const id = setInterval(() => {
//     observer.next(counter++);
//   }, 1000);

//   return () => {
//     clearInterval(id);
//   };
// });

// observable$.subscribe(subject$$);

// const subscription1 = observable$.subscribe({
//   next: (value) => { console.log('sub1', value) },
//   complete: () => console.log('Completed 1')
// });

// const subscription11 = obs$.subscribe({
//   next: (value) => { console.log('sub1.1', value) },
//   complete: () => console.log('Completed 1.1')
// })

// setTimeout(() => {
//   subscription1.unsubscribe();
//   subscription11.unsubscribe();

//   observable$.pipe(take(3)).subscribe({
//     next: (value) => {
//       console.log('sub2', value)
//     },
//     complete: () => console.log('Completed 2')
//   });

//   obs$.pipe(take(3)).subscribe({
//     next: (value) => {
//       console.log('sub2.1', value)
//     },
//     complete: () => console.log('Completed 2')
//   });


// }, 2000);