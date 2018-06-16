import { fromEvent, from, of } from 'rxjs';
import { bufferTime, concatMap, catchError, retry, filter } from 'rxjs/operators'

/* eslint-disable no-console */

const hasCallsFromGrandma = events => !!events.length;

const bakePies = (requests) => from(new Promise((resolve) => {
  console.log(`baking ${requests.length} pies`);
  setTimeout(() => resolve('baked'), 500);
}));

const sendPies = () => from(new Promise((resolve, reject) => setTimeout(() => {
  const random = Math.round(Math.random());
  console.log(random ? 'pies delivered' : 'pies eaten by a wolf');
  return random
    ? resolve('pies')
    : reject(new Error('eaten by wolf'));
}, 500)));

const orderSushi = () => from(new Promise((resolve) => {
  console.log('ordering sushi');
  setTimeout(() => resolve('suchi'), 500);
}));

const grandmaEats = food =>
  console.log(`Grandma eats ${food}`);
const grandmaDoesNotEat = error =>
  console.log('Grandma doesn\'t eat because ', error);
const stopBakingPies = () =>
  console.log('No more pies sending');

const phone = document;
const callFromGrandma = 'click';

export const sendPie = () => {
  fromEvent(phone, callFromGrandma)
    .pipe(
      bufferTime(500),
      filter(hasCallsFromGrandma),
      concatMap(requests => of(requests).pipe(
        concatMap(bakePies),
        concatMap(sendPies),
        retry(3),
      )),
      catchError(orderSushi),
    )
    .subscribe(
      grandmaEats,
      grandmaDoesNotEat,
      stopBakingPies,
    );
};

/* eslint-enable no-alert, no-console */
