import { from } from 'rxjs';
import { tap, map, filter, toArray } from 'rxjs/operators';

/* eslint-disable no-console */

export const chainOnArray = () => {
  const data = [1, 2, 3, 4]
    // map creates a copy of initial array
    .map(x => x*3)
    // filter creates a copy of initial array
    .filter(x => x % 2 === 0);
  console.log(data);
};

export const chainOnObservable = () => {
  from([1, 2, 3, 4])
    .pipe(
      tap(console.log),
      map(x => x*3),
      tap(console.log),
      filter(x => x % 2 === 0),
      tap(console.log),
      toArray(),
    )
    .subscribe(console.log);
};

/* eslint-enable no-alert, no-console */
