/* eslint-disable no-console */

const grandmaEatsPie = () => {
  console.log('eating pie');
};

const pieIsEatenByWolf = () => {
  console.log('wolf eats pie');
};

const sendPie = () => {
  return new Promise((resolve, reject) => {
    const random = Math.round(Math.random());
    if (random) {
      resolve();
    } else {
      reject();
    }
  });
};

const bakePie = () => {
  return new Promise((resolve) => {
    resolve();
  });
}

const phone = document;
const callFromGrandma = 'click';

export const sendPieWithPromise = () => {
  sendPie()
    .then(grandmaEatsPie)
    .catch(pieIsEatenByWolf);
}

export const sendPieWithEventAndPromise = () => {
  phone.addEventListener(
    callFromGrandma,
    ( ) =>
      bakePie()
        .then(sendPie)
        .then(grandmaEatsPie)
        .catch(pieIsEatenByWolf),
  );
}

/* eslint-enable no-alert, no-console */
