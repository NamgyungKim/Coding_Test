// 실패율

const solution = (N, stages) => {
  let arr = Array.from({ length: N + 1 }, () => 0);
  stages.forEach((ele) => {
    arr[ele - 1] += 1;
  });
  let memo = 0;
  arr.forEach((ele, i) => {
    arr[i] = ele / (stages.length - memo);
    if (!arr[i]) arr[i] = 0;
    memo += ele;
  });
  arr.pop();
  return arr.map(() => {
    const index = arr.indexOf(Math.max.apply(null, arr));
    arr[index] = null;
    return index + 1;
  });
};

solution(5, [2, 1, 2, 4, 2, 4, 3, 3]);
