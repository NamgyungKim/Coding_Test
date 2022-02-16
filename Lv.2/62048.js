/*
🚩 멀쩡한 사각형 🚩

😀순서
- 선에 걸리는 사각형의 갯수 = gcd * (w / gcd + (h / gcd - 1)) 이다.
- => w+h-gcd

1. w 와 h의 최대공약수를 구한다.
2. w*h - w+h-gcd 를 return 한다

🍭점수: 10점
*/

const solution = (w, h) => {
  let gcd = 1;
  for (let i = 2; i <= Math.min(w, h); i++) {
    if (w % i === 0 && h % i === 0) {
      gcd = i;
    }
  }
  return w * h - w - h + gcd;
};

console.log(solution(8, 12));
