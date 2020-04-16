function createPromiseToCheckIsOdd(number) {
  return new Promise(function (resolve, reject) {
    if (number % 2 === 0) {
      setTimeout(() => {
        resolve({
          message: number + " is Odd",
          code: "Odd",
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject({
          message: "No it not!",
          code: "No wayyyy",
        });
      }, 1000);
    }
  });
}

function main() {
  // console.log(createPromiseToCheckIsOdd(2));
  const promise = createPromiseToCheckIsOdd(2);
  promise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
}
main();
