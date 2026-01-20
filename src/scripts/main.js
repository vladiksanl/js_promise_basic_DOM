'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const resMes = document.createElement('div');
const rejMes = document.createElement('div');

resMes.textContent = 'Promise was resolved!';

rejMes.textContent = 'Promise was rejected!';

resMes.classList.add('message');
rejMes.classList.add('message', 'error-message');

function messages() {
  const p1 = new Promise((resolve) => {
    logo.addEventListener('click', (e) => {
      resolve();
    });
  })
    .then(() => {
      body.append(resMes);
    })
    .catch((e) => {
      return e;
    });

  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
    .then(() => {
      resMes.remove();
      body.append(rejMes);
    })
    .catch((e) => {
      return e;
    });

  return [p1, p2];
}

messages();
