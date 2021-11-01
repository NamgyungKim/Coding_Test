function solution(s) {
  let text = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  for (let i = 0; i < 10; i++) {
    s = s.replace(RegExp(text[i], 'g'), i)
  }
  const answer = Number(s)
  return answer
}
