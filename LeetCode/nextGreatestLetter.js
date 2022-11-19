const letters = ['c', 'c', 'c', 'd', 'd', 'd', 'f', 'f', 'f', 'j'];

const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      letters[letters.length - 1] === target ||
      target > letters[letters.length - 1]
    ) {
      return letters[0];
    }

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[left];
};

const result = nextGreatestLetter(letters, 'f');
console.log(result);
