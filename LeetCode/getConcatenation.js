const nums = [1, 2, 3];

const getConcatenation = (nums) => [...nums, ...nums];

const result = getConcatenation(nums);
console.log(result);
