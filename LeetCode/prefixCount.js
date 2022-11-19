const words = ['pay', 'attention', 'practice', 'attend'];

const prefixCount = (words, prefix) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(prefix)) {
      count++;
    }
  }
  return count;
};

const result = prefixCount(words, 'at');
console.log(result);
