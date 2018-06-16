import { empty, from } from 'rxjs';
import { take, first } from 'rxjs/operators';

/* eslint-disable no-console */

export const takeExample = () => {
  empty()
    .pipe(take(1))
    .subscribe(
      () => console.log('ok'),
      () => console.log('fail'),
      () => console.log('done')
    );
}

export const firstForEmptyStream = () => {
  empty()
    .pipe(first())
    .subscribe(
      () => console.log('ok'),
      () => console.log('fail'),
      () => console.log('done')
    );
}

export const firstWithPredicate = () => {
  from([1, 2, 3])
    .pipe(first(x => x > 5))
    .subscribe(
      () => console.log('ok'),
      () => console.log('fail'),
      () => console.log('done')
    );
}

/* eslint-enable no-alert, no-console */
