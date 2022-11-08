import { map, Observable } from 'rxjs';
function getValue() {
  return new Promise((res) => {
    setTimeout(() => {
      res('TEST');
    }, 2000);
  });
}

function getValue2(cb: (...args: any[]) => void) {
  setTimeout(() => {
    cb('TEST');
  }, 2000)
}
// cps
getValue2(function (value) { console.log(value); });




[1]
  .map(function (x) { return x + 1 })
  .map(function (x) { return x * x; });

// promise chain
Promise.resolve(1)
  .then(function (value) { console.log(value); })
  .then()
  .then();




[1, 2, 3, 4]
  .map(function (x) { return x + 1 })
  .map(function (x) { return x * x; });



const o = new Observable(observer => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
  observer.complete();
});

o.subscribe(console.log);





function interval(intervalValue: number = 0) {
  return new Observable<number>(observer => {
    let counter = 0;
    const timerId = setInterval(() => {
      observer.next(counter++)
    }, intervalValue);

    return () => {
      clearInterval(timerId);
    };
  });
}



const stream$ = interval(5000).pipe(
  map(x => x + 1),
  map(x => x + 1),
  map(x => x + 1),
);

setTimeout(() => {
  const sub = stream$.subscribe({
    next: (x) => console.log(x),
    error: (err) => console.error(err),
    complete: () => console.log('Observable completed')
  });

  setTimeout(() => {
    sub.unsubscribe();
  }, 1000)
}, 3000);