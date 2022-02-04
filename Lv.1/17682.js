// 다트게임
const solution = (dartResult) => {
  let score = [];
  let answer = 0;
  dartResult.match(/[0-9].?[S,D,T][*,#]?/gi).forEach((el, index) => {
    let num = Number(el.split(/^[0-9]?=|[SDT]/)[0]);
    if (/[D]/.test(el)) {
      num = num ** 2;
    } else if (/[T]/.test(el)) {
      num = num ** 3;
    }
    if (/\*/.test(el)) {
      num = num * 2;
      score[index - 1] = score[index - 1] * 2;
    }
    if (/\#/.test(el)) num = "-" + num;
    score.push(num);
  });
  score.forEach((el) => (answer += Number(el)));
  return answer;
};

solution("1T2D3D#");
