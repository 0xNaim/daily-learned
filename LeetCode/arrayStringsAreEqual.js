const arrayStringsAreEqual = (word1, word2) => {
  return word1.join('') === word2.join('');
};

const result = arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']);
console.log(result);
