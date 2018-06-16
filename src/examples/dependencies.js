import { BehaviorSubject, Subject } from 'rxjs';
import { withLatestFrom, debounceTime } from 'rxjs/operators';

/* eslint-disable no-console */

export const unobviousDependencies = () => {
  const A = new BehaviorSubject(1);
  const B = new Subject();

  A.asObservable()
    .subscribe((val) => {
      console.log('A value is ', val);
      B.next(val * 10);
    });

  B.asObservable()
    .pipe(
      withLatestFrom(A.asObservable())
    )
    .subscribe(([bVal, aVal]) => {
      console.log(`A is ${aVal}; B is ${bVal}`);
    });

  setTimeout(() => A.next(2));
}

export const asyncDependencies = () => {
  const A = new BehaviorSubject(1);
  const B = new Subject();

  A.asObservable()
    .subscribe((val) => {
      console.log('A value is ', val);
      B.next(val * 10);
    });
  B.asObservable()
    .pipe(
      debounceTime(0),
      withLatestFrom(A.asObservable()),
    )
    .subscribe(([bVal, aVal]) => {
      console.log(`A is ${aVal}; B is ${bVal}`);
    });

  setTimeout(() => A.next(2));
}

export const orderDependencies = () => {
  const A = new BehaviorSubject(1);
  const B = new Subject();
  B.asObservable()
    .pipe(
      withLatestFrom(A.asObservable())
    )
    .subscribe(([bVal, aVal]) => {
      console.log(`A is ${aVal}; B is ${bVal}`);
    });

  A.asObservable()
    .subscribe((val) => {
      console.log('A value is ', val);
      B.next(val * 10);
    });

  setTimeout(() => A.next(2));
}

/* eslint-enable no-alert, no-console */
