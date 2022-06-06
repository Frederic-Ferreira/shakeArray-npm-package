const shakeArray = (arr) => {
  const originalArr = [...arr];

  const generateSpliceArrIndex = () =>
    Math.floor(Math.random() * originalArr.length);

  const newArr = [];

  const originalLength = originalArr.length;

  let randomIndex = generateSpliceArrIndex();

  for (let i = 0; i < originalLength; i++) {
    const [value] = originalArr.splice(randomIndex, 1);

    newArr.push(value);

    randomIndex = generateSpliceArrIndex();
  }

  return newArr;
};

module.exports = shakeArray;
