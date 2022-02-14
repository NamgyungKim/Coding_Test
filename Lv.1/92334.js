/*
🚩 신고 결과 받기 🚩 
- 유저가 같은사람을 여러번 신고해도 1회로 처리
- 신고횟수자체에는 제한이 없음
- k번 이상 신고된유저는 정지처리
- 유저가 정지처리되면 해당유저를 신고한 유저들에게 메일 발송됨
- 메일을 받은 갯수를 유저id배열 순서대로 담은값 return

id_list = 모든 이용자 ID (arr)
report = 신고한 이용자의 ID와 신고당한 이용자의 ID (arr)
k = 신고 횟수

😀 순서
1. 정답을 적을 길이id_list인 빈배열 생성
2. 신고당한 유저와 신고횟수를 객체로 나타내기
  - 중복신고 제거 (같은값들 제거) -> Set() 
  - report의 오른쪽에 정지 먹은 유저의 ID의 수 새기 -> 신고받은 유저ID 객체로 만들기(blackList) 
3. 정지먹은 유저의 ID를 신고한 사람에게 +1씩 
  - report의 오른쪽에 BlackList유저가 있으면 


🍭점수: 8점
*/

const solution = (id_list, report, k) => {
  // 1. 정답을 적을 길이id_list인 빈배열 생성
  let answer = new Array(id_list.length).fill(0);
  const blackList = {};

  // 2. 신고당한 유저와 신고횟수를 객체로 나타내기
  Array.from(new Set(report)).forEach((id) => {
    blackList[id.split(" ")[1]] = (blackList[id.split(" ")[1]] || 0) + 1;
  });

  // 3. 정지먹은 유저의 ID를 신고한 사람에게 +1씩
  Array.from(new Set(report)).forEach((id) => {
    if (blackList[id.split(" ")[1]] >= k) {
      answer[id_list.indexOf(id.split(" ")[0])]++;
    }
  });
  return answer;
};
