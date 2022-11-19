const nums = [2, 3, 4, 7, 11];

const findKthPositive = function (arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);

    if (arr[mid] - mid - 1 < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start + k;
};

const result = findKthPositive(nums, 2);
console.log(result);
