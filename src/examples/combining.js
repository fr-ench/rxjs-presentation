import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

/* eslint-disable no-console */

export const withLatestFromExample = () => {
  const A = new BehaviorSubject(1);
  const B = new BehaviorSubject('a');

  A.pipe(withLatestFrom(B))
    .subscribe(console.log);

  A.next(2);
  B.next('b');
  A.complete();
  B.complete();
}

export const combineLatestExample = () => {
  const A = new BehaviorSubject(1);
  const B = new BehaviorSubject('a');

  combineLatest(A, B)
    .subscribe(console.log);
  // A.pipe(combineLatest(B))

  A.next(2);
  B.next('b');
  A.complete();
  B.complete();
}

export const forkJoinExample = () => {
  const A = new BehaviorSubject(1);
  const B = new BehaviorSubject('a');

  forkJoin(A, B)
    .subscribe(console.log);

  A.next(2);
  B.next('b');
  A.complete();
  B.complete();
}

/* eslint-enable no-alert, no-console */
