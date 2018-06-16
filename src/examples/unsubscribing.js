import { fromEvent, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';

/* eslint-disable no-console */

export const earlyUnsubscribe = () => {
  fromEvent(document, 'click')
    .subscribe(console.log)
    .unsubscribe();
};

export const pointlessUnsubscribe = () => {
  of(100500)
    .subscribe(console.log)
    .unsubscribe();
};

export const correctUnsubscribing = () => {
  const customSubscription = fromEvent(document, 'click')
    .subscribe(console.log);

  fromEvent(document, 'keypress')
    .pipe(
      filter(e => e.which === 32),
      take(1),
    )
    .subscribe(() => {
      console.log('unsubscribing');
      customSubscription.unsubscribe();
    });
}

/* eslint-enable no-alert, no-console */
