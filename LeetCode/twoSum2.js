// 167. Two Sum II - Input Array Is Sorted

const numbers = [2, 7, 11, 15];

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      break;
    }
  }
  return [left + 1, right + 1];
};

const result = twoSum(numbers, 18);
console.log(result);
