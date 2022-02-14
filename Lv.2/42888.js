/*
🚩 오픈채팅방 🚩

- 입력값 [행동, userID, 닉네임]
- 행동에는 Enter, Leave, Change가 있고 각각
  Enter: 채팅방 들어옴.
  Leave: 채팅방 떠남
  Change: 닉네임변경 
  이 있다.
- 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
  "Enter uid1234 Muzi" -> Muzi님이 들어왔습니다.
  "Enter uid4567 Prodo" -> Muzi님이 들어왔습니다.
                           Prodo님이 들어왔습니다.
  "Leave uid1234" -> Muzi님이 들어왔습니다.
                     Prodo님이 들어왔습니다.
                     Muzi님이 나갔습니다.
  "Enter uid1234 Prodo" -> Prodo님이 들어왔습니다.
                           Prodo님이 들어왔습니다.
                           Prodo님이 나갔습니다.
                           Prodo님이 들어왔습니다.
  "Change uid4567 Ryan" -> Prodo님이 들어왔습니다.
                           Ryan님이 들어왔습니다.
                           Prodo님이 나갔습니다.
                           Prodo님이 들어왔습니다.

😀순서

1. 배열record의 문자열을 공백기준으로 배열로 변경해 2차원 배열로 나타낸다 => mapRecords = map(), split(" ")
2. records를 forEach로 돌면서 마지막 id와 nickname 찾아서 객체로 나타내기
  {
    id: nickname,
    uid1234 : Prodo,
    ...
  }
3. mapRecords forEach로 돌면서 answer에 `${nickname} 님이 들어왔습니다.` 추가

🍭점수: 4점
 */

const solution = (records) => {
  let answer = [];
  let user = {};
  const mapRecords = records.map((record) => record.split(" "));

  mapRecords.forEach((record) => {
    if (record[0] !== "Leave") user[record[1]] = record[2];
  });

  mapRecords.forEach((record) => {
    if (record[0] === "Change") return;
    const action =
      record[0] === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
    answer.push(`${user[record[1]]}${action}`);
  });

  return answer;
};

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
