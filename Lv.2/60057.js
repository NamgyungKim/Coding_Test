/*
🚩 문자열 압축 🚩

- 문자열 ababcdcdababcdcd을 2개단위로 압축 2ab2cd2ab2cd 또는 3개단위로 압축하면 2ababcdcd가 될 수 있다. 
- 이런식으로 가장 짧은 길이로 압축한 길이를 return
- ex) 2단위로 쪼개기 "ab.ab.cd.cd.ab.ab.cd.cd" -> "2ab2cd2ab2cd"

- answer = 문자열 압축 후 문자열의 길이들 배열에 넣어둠
- str = 압축한 문자열
- count = 2 (연속된문자의 수)
- arr = 단위k개로 쪼갠 배열

😀순서
1. 단위k개로 쪼개서 배열로 생성
2. k개단위로 잘라 압축한 문자열 str의 길이를 answer에 push
  - 현위치 가운데로 기준으로 앞뒤 비교하며 압축시의 길이
  - [이전index, 현위치, 다음index]
  - [b, b, b] 일 경우 count ++
  - [b, b, c] 일 경우 str = str + count + b, count 리셋
  - [a, b, b] 일 경우 null
  - [a, b, c] 일 경우 str = str + b
  - str의 길이를 answer배열에 push
3. 1,2번의 k를 (최소 1 ~ 최대(문자길이)/2)로 대입해서 계산
4. answer에서 가장 작은 수 return

🚨 주의
- 배열이 1개일 경우
- 압축길이가 2자리를 넘어갈 수 있음

🍭점수: 7점
*/

const solution = (s) => {
  const answer = [];
  // 3. 1,2번의 k를 (최소 1 ~ 최대(문자길이)/2)로 대입해서 계산
  for (let k = 1; k <= Math.round(s.length / 2); k++) {
    let str = "";
    let count = 2;
    // 1. 단위k개로 쪼개서 배열로 생성
    const arr = s.match(new RegExp(".{1," + k + "}", "g"));
    // 2. k개단위로 잘라 압축한 문자열 str의 길이를 answer에 push
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === arr[i] && arr[i] == arr[i + 1]) count++;
      if (arr[i - 1] == arr[i] && arr[i] !== arr[i + 1]) {
        str = str + count + arr[i];
        count = 2;
      }
      if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) str = str + arr[i];
    }
    answer.push(str.length);
  }
  // 4. answer에서 가장 작은 수 return
  return Math.min(...answer);
};

console.log(solution("a"));
