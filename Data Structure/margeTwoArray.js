const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const margeTwoArray = (array1, array2, target) => {
  const margedArray = [...array1, ...array2];
  let left = 0;
  let right = margedArray.length - 1;
  console.log(margedArray);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (margedArray[mid] === target) {
      return mid;
    }

    if (margedArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const result = margeTwoArray(array, array2, 10);
console.log(result);
