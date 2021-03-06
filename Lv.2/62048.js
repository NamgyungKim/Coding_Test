/*
π© λ©μ©‘ν μ¬κ°ν π©

πμμ
- μ μ κ±Έλ¦¬λ μ¬κ°νμ κ°―μ = gcd * (w / gcd + (h / gcd - 1)) μ΄λ€.
- => w+h-gcd

1. w μ hμ μ΅λκ³΅μ½μλ₯Ό κ΅¬νλ€.
2. w*h - w+h-gcd λ₯Ό return νλ€

π­μ μ: 10μ 
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
