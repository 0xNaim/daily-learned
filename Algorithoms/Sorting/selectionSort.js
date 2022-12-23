const arr = [5, 2, 9, 7, 3, 6];

const selectionSort = (array) => {
  // Loop through the entire array
  for (let i = 0; i < array.length; i++) {
    // Assume the current element is the minimum
    let min = i;

    // Check the rest of the array to see if there is a smaller value
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        // If there is a smaller value, set it as the new minimum
        min = j;
      }
    }

    // If a smaller value was found, swap the values
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  // Return the sorted array
  return array;
};

const sortedArray = selectionSort(arr);
console.log(sortedArray); // [ 2, 3, 5, 6, 7, 9 ]
