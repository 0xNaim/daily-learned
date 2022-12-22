const array = [5, 8, 1, 3, 7, 45, 31, 68, 95, 75];

const bubbleSort = (arr) => {
  // Set a flag to true to begin the loop
  let swapped = true;

  while (swapped) {
    // Set the flag to false to end the loop if no swaps are made
    swapped = false;

    // Iterate through the array, comparing adjacent pairs
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current element is greater than the next element, swap them
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // Set the flag to true to continue the loop
        swapped = true;
      }
    }
  }
  // Return the sorted array
  return arr;
};

const sortedArray = bubbleSort(array);
console.log(sortedArray); // [ 1, 3, 5, 7, 8, 31, 45, 68, 75, 95]
