/*
๐ฉ ๊ธฐ๋ฅ ๊ฐ๋ฐ ๐ฉ

๐์์

1. ๊ฐ ์์์ ๊ฑธ๋ฆฌ๋ ์๊ฐ์ ๊ณ์ฐํด ๋ฐฐ์ด๋ก ๋ง๋ ๋ค. workingPeriod = [2,2,6,4,7]
    (100% - ํ ์งํ%)/์์์๋ ์์์ ์ฌ๋ฆผ ์ด ์์ผ๋ก ๊ฑธ๋ฆฌ๋ ์๊ฐ
2. wokingPeriod๋ฅผ forEach(period,index)๋ก ๋๋ฉด์
  - max < period ์ด๋ฉด max = period๋ฅผ ํด์ค๋ค.
  - forEach๊ฐ์ฅ ๋ง์ง๋ง ๋ฐฐ์ด์ผ๋, ๋ค์๋ฐฐ์ด์ด max ๋ณด๋ค ํด๋ num์ push ํด์ฃผ๊ณ  num์ ์ด๊ธฐํ ํด์ค๋ค.
  - ๊ทธ ์ด์ธ์๋ num++ ๋ฅผ ํด์ค๋ค.

๐ญ์ ์: 3์ 
*/

const solution = (progresses, speeds) => {
  let answer = [];
  let num = 1;
  let max = 0;
  let workingPeriod = progresses.map((day, index) =>
    Math.ceil((100 - day) / speeds[index])
  );
  //ref
  workingPeriod.forEach((period, index) => {
    // ์ต๋ ๊ฑธ๋ฆฌ๋ ๊ธฐ๊ฐ
    if (max < period) max = period;
    // ๋ค์ ์์์ด ๊ฑธ๋ฆฌ๋ ์๊ฐ๊ณผ ๋น๊ต
    if (workingPeriod.length - 1 === index || max < workingPeriod[index + 1]) {
      answer.push(num);
      num = 1; //์ด๊ธฐํ
    } else {
      num++;
    }
  });
  return answer;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
function solution(progresses, speeds) {
  var answer = [];
  let beforeCommitDay = 0;
  progresses.map((a, i) => {
    let day = Math.ceil((100 - a) / speeds[i]);
    if (day > beforeCommitDay) {
      answer.push(1);
      beforeCommitDay = day;
    } else {
      answer[answer.length - 1]++;
    }
  });
  return answer;
}
