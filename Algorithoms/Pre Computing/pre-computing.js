// Pre computing
const preComputing = (n) => {
  let result = [];
  result[0] = 0;
  let factorial = 1;
  for (let i = 1; i <= 100000; i++) {
    factorial *= i;
    result[i] = factorial;
  }

  return result[n];
};

const result = preComputing(5);
console.log(result);
