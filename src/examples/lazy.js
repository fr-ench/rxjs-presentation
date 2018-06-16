import { range } from 'rxjs';
import { tap, take, reduce } from 'rxjs/operators';

/* eslint-disable no-console */

export const noMemoryError = () => {
  range(1, Number.POSITIVE_INFINITY)
    .pipe(tap(console.log));
}

export const factorialCalculation = () => {
  range(1, Number.POSITIVE_INFINITY)
    .pipe(
      take(5),
      reduce((acc, x) => acc * x, 1),
    )
    .subscribe(console.log);
}

/* eslint-enable no-alert, no-console */
