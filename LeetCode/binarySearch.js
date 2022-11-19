const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const binarySearch = (sortedArr, targetValue) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {    
    let mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === targetValue) {
      return mid;
    }

    if (sortedArr[mid] < targetValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const result = binarySearch(array, 49);
console.log(result);
