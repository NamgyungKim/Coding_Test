/*
🚩 기능 개발 🚩

😀순서

1. 각 작업에 걸리는 시간을 계산해 배열로 만든다. workingPeriod = [2,2,6,4,7]
    (100% - 현 진행%)/작업속도 소수점올림 이 앞으로 걸리는 시간
2. wokingPeriod를 forEach(period,index)로 돌면서
  - max < period 이면 max = period를 해준다.
  - forEach가장 마지막 배열일때, 다음배열이 max 보다 클때 num을 push 해주고 num을 초기화 해준다.
  - 그 이외에는 num++ 를 해준다.

🚨 주의

⏳시간복잡도: O(2n)

🍭점수: 4점
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
        // 최대 걸리는 기간
        if (max < period) max = period;
        // 다음 작업이 걸리는 시간과 비교
        if (workingPeriod.length - 1 === index || max < workingPeriod[index + 1]) {
            answer.push(num);
            num = 1; //초기화
        } else {
            num++;
        }
    });
    return answer;
};

console.log(solution([93, 30, 55], [1, 30, 5]));