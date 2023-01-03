console.log(1);

const formEl = document.querySelector('.form');
console.log(formEl);
form.addEventListener('submit', createPromise);
form.addEventListener('input', callback);




const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
     if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  }, 1000)
});
console.log(promise)

function createPromise(position, delay) {
  // preventDefault();

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });