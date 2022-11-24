// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
const array2 = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

// Order agnostic binary search
const orderAgnosticBinarySearch = (array, targetValue) => {
  let low = 0;
  let high = array.length - 1;
  let isAsc = array[low] < array[high];

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (array[middle] === targetValue) {
      return middle;
    }

    if (isAsc) {
      if (array[middle] < targetValue) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    } else {
      if (array[middle] > targetValue) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
  }
  return -1;
};

const result = orderAgnosticBinarySearch(array2, 13);
console.log(result); // 7

// Order agnostic binary search another method
const orderAgnosticBinarySearch2 = (array, targetValue) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (array[middle] === targetValue) {
      return middle;
    }

    if (
      (array[low] < array[high] && targetValue < array[middle]) ||
      (array[low] > array[high] && targetValue > array[middle])
    ) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
};

const result2 = orderAgnosticBinarySearch2(array2, 13);
console.log(result2); // 7
