// const formEl = document.querySelector('.form');

// formEl.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();

//   const { delay, step, amount } = e.target.elements;

//   console.log(typeof delay.value, typeof step.value);
  
//   if (delay.value <= 0 || step.value <= 0 || amount.value <= 0) {
//     alert("Пожалуйста, введите значение > 0");
//   } 
//   for (let i = 0; i < amount.value; i += 1) {
//     let position = i + 1;
//     const delays = Number(delay.value) + Number(step.value) * i;


//       createPromise(position, delays)
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
//     }
// }

// function createPromise(position, delay) {
//  return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({position, delay});
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//  })
// }

import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  console.log(typeof delay.value, typeof step.value);
  
  if (delay.value <= 0 || step.value <= 0 || amount.value <= 0) {
    Notiflix.Notify.warning("Пожалуйста, введите значение > 0");
  } 
  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;
    const delays = Number(delay.value) + Number(step.value) * i;


      createPromise(position, delays)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    }
}

function createPromise(position, delay) {
 return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({ position, delay });
      }
    }, delay);
 })
}