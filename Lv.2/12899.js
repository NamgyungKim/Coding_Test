// 124나라의 숫자

const solution = (n) => {
  let result = [];
  let num = 1;
  let max = 3 ** num;
  let min = 0;
  while (max < n) {
    min = max;
    num++;
    max = max + 3 ** num;
  }
  for (let i = 0; i < num; i++) {
    let maxNum = max;
    let minNum = min;
    if (min + (max - min) / 3 >= n) {
      result.push(1);
      maxNum = min + (max - min) / 3;
      console.log("1:" + max, min);
    } else if (min + ((max - min) / 3) * 2 >= n) {
      result.push(2);
      minNum = min + (max - min) / 3;
      maxNum = min + ((max - min) / 3) * 2;
      console.log("2:" + max, min);
    } else {
      result.push(4);
      minNum = min + ((max - min) / 3) * 2;
      console.log("4:" + max, min);
    }
    min = minNum;
    max = maxNum;
  }
  return result.join("");
};
