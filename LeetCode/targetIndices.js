const array = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9];

const targetIndices = (nums, target) => {
  nums.sort((a, b) => a - b);
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      indexes.push(i);
    }
  }
  return indexes;
};

const result = targetIndices(array, 8);
console.log(result);
