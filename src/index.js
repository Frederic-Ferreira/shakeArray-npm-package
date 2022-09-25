const shakeArray = (arr) => {
  const originalArr = [...arr];

  const originalLength = originalArr.length;

  const generateSpliceArrIndex = (length) =>
    Math.floor(Math.random() * length);

  const newArr = [];

  let randomIndex;

  for (let i = 0; i < originalLength; i++) {
    randomIndex = generateSpliceArrIndex(originalLength - i);

    const [value] = originalArr.splice(randomIndex, 1);

    newArr.push(value);
  }

  return newArr;
};

module.exports = shakeArray;
