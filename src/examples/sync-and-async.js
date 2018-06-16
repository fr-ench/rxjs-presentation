import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/* eslint-disable no-console */

export const syncObservable = () => {
  console.log('start');
  of(1)
    .pipe(switchMap(x => of(x*2)))
    .subscribe(x => console.log('result', x));
  console.log('end');
};

export const asyncObservable = () => {
  console.log('start');
  of(1)
    .pipe(switchMap(
      x => from(Promise.resolve(x*2))
    ))
    .subscribe(x => console.log('result', x));
  console.log('end');
};

/* eslint-enable no-alert, no-console */
