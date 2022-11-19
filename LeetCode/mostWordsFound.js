const sentences = [
  'alice and bob love leetcode',
  'i think so too',
  'this is great thanks very much',
];

const mostWordsFound = (array) => {
  let maxWords = 0;
  for (let i = 0; i < array.length; i++) {
    const words = array[i].split(' ').length;
    if (words > maxWords) {
      maxWords = words;
    }
  }
  return maxWords;
};

const result = mostWordsFound(sentences);
console.log(result);
