import { of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/* eslint-disable no-console */

export const immediatelyEnds = () => {
  of(1)
    .subscribe(
      () => console.log('success'),
      () => console.log('error'),
      () => console.log('completed')
    );
}

export const neverEnds = () => {
  fromEvent(document, 'click')
    .subscribe(
      () => console.log('success'),
      () => console.log('error'),
      () => console.log('completed')
    );
}

export const endsBecauseOfError = () => {
  fromEvent(document, 'click')
    .pipe(map(() => {
      throw new Error('error');
    }))
    .subscribe(
      () => console.log('success'),
      () => console.log('error'),
      () => console.log('completed')
    );
}

/* eslint-enable no-alert, no-console */
