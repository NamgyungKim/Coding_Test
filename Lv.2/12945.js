// 피보나치 수
const solution = (n) => {
  let num = [0, 1];
  for (let i = 0; i < n; i++) {
    num.push((num[0] % 1234567) + (num[1] % 1234567));
    num.shift();
  }
  return num[0] % 1234567;
};
