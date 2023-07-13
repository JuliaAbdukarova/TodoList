export const strReplaceToDots = (str) => {
  const maxIndex = 20;
  let arr = str.split("");

  let newStr = arr
    .map((char, index) => {
      if (index > maxIndex) {
        return ".";
      } else {
        return char;
      }
    })
    .join("");

  return newStr;
};
