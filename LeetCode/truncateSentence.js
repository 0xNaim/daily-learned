const truncateSentence = (string, num) => {
  return string.split(' ').slice(0, num).join(' ');
};

const result = truncateSentence('Hello how are you Contestant', 4);
console.log(result);
