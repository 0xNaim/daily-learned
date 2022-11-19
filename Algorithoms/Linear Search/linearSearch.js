// Linear search
const linearSearch = (array, targetValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      return i;
    }    
  }
    return -1;
};

const result = linearSearch([1, 5, 6, 2, 3, 8, 9, 7, 4], 4);
console.log(result);
