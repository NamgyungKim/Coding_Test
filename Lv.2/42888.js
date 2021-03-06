/*
๐ฉ ์คํ์ฑํ๋ฐฉ ๐ฉ

- ์๋ ฅ๊ฐ [ํ๋, userID, ๋๋ค์]
- ํ๋์๋ Enter, Leave, Change๊ฐ ์๊ณ  ๊ฐ๊ฐ
  Enter: ์ฑํ๋ฐฉ ๋ค์ด์ด.
  Leave: ์ฑํ๋ฐฉ ๋ ๋จ
  Change: ๋๋ค์๋ณ๊ฒฝ 
  ์ด ์๋ค.
- ์ต์ข์ ์ผ๋ก ๋ฐฉ์ ๊ฐ์คํ ์ฌ๋์ด ๋ณด๊ฒ ๋๋ ๋ฉ์์ง๋ฅผ ๋ฌธ์์ด ๋ฐฐ์ด ํํ๋ก return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํ๋ผ.
  "Enter uid1234 Muzi" -> Muzi๋์ด ๋ค์ด์์ต๋๋ค.
  "Enter uid4567 Prodo" -> Muzi๋์ด ๋ค์ด์์ต๋๋ค.
                           Prodo๋์ด ๋ค์ด์์ต๋๋ค.
  "Leave uid1234" -> Muzi๋์ด ๋ค์ด์์ต๋๋ค.
                     Prodo๋์ด ๋ค์ด์์ต๋๋ค.
                     Muzi๋์ด ๋๊ฐ์ต๋๋ค.
  "Enter uid1234 Prodo" -> Prodo๋์ด ๋ค์ด์์ต๋๋ค.
                           Prodo๋์ด ๋ค์ด์์ต๋๋ค.
                           Prodo๋์ด ๋๊ฐ์ต๋๋ค.
                           Prodo๋์ด ๋ค์ด์์ต๋๋ค.
  "Change uid4567 Ryan" -> Prodo๋์ด ๋ค์ด์์ต๋๋ค.
                           Ryan๋์ด ๋ค์ด์์ต๋๋ค.
                           Prodo๋์ด ๋๊ฐ์ต๋๋ค.
                           Prodo๋์ด ๋ค์ด์์ต๋๋ค.

๐์์

1. ๋ฐฐ์ดrecord์ ๋ฌธ์์ด์ ๊ณต๋ฐฑ๊ธฐ์ค์ผ๋ก ๋ฐฐ์ด๋ก ๋ณ๊ฒฝํด 2์ฐจ์ ๋ฐฐ์ด๋ก ๋ํ๋ธ๋ค => mapRecords = map(), split(" ")
2. records๋ฅผ forEach๋ก ๋๋ฉด์ ๋ง์ง๋ง id์ nickname ์ฐพ์์ ๊ฐ์ฒด๋ก ๋ํ๋ด๊ธฐ
  {
    id: nickname,
    uid1234 : Prodo,
    ...
  }
3. mapRecords forEach๋ก ๋๋ฉด์ answer์ `${nickname} ๋์ด ๋ค์ด์์ต๋๋ค.` ์ถ๊ฐ

๐ญ์ ์: 4์ 
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
      record[0] === "Enter" ? "๋์ด ๋ค์ด์์ต๋๋ค." : "๋์ด ๋๊ฐ์ต๋๋ค.";
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
