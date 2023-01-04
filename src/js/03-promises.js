import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const delay = evt.target.elements.delay.value;
  const step = evt.target.elements.step.value;
  const amount = evt.target.elements.amount.value;
  let position = 0;
  let intervalId = null;
  let delayStep = Number(delay);
  
  intervalId = setInterval(() => {
  position += 1;

    if (position >= 2) {
      delayStep += Number(step);
    }
    
    createPromise(position, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    if (position >= amount) {
        clearInterval(intervalId);
      }
  }, step);
}
 
function createPromise(position, delay) {
   
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }   

    }, delay);
  });
 }