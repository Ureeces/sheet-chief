// Create a array that finds median
const findMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const midPoint = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[midPoint - 1] + sortedArr[midPoint]) / 2;
  }

  return sortedArr[midPoint];
};

console.log(findMedian([3, 2, 1, 5]));
