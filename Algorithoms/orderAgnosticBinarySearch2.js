// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
const array2 = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const orderAgnosticBinarySearch = (sortedArr, targetValue) => {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (sortedArr[middle] === targetValue) {
      return middle;
    }

    if (
      (sortedArr[low] < sortedArr[high] && targetValue < sortedArr[middle]) ||
      (sortedArr[low] > sortedArr[high] && targetValue > sortedArr[middle])
    ) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
};

const result = orderAgnosticBinarySearch(array2, 13);
console.log(result);

