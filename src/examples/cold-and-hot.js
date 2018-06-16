import { interval, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators'

/* eslint-disable no-console */

export const coldObservable = () => {
  const A = interval(3);

  A.pipe(take(2)).subscribe(console.log);

  setTimeout(() => {
    console.log('timeout');
    A.pipe(take(2)).subscribe(console.log);
  }, 1500);
};

export const hotObservable = () => {
  const A = fromEvent(document, 'mousemove');

  A.pipe(take(2))
    .subscribe(e => console.log(e.clientX));

  setTimeout(() => {
    console.log('timeout');
    A.pipe(take(2))
      .subscribe(e => console.log(e.clientX));
  }, 1500);
};

/* eslint-enable no-alert, no-console */
