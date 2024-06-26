/*
🚩 JadenCase 문자열 만들기 🚩

- 단어의 첫글자는 대문자로 변경
- 숫자는 단어의 첫 문자로만 나오도록한다. 
- 첫 문자가 숫자일때는 뒤에 영어는 소문자로한다.
- 숫자로만 이루어진 단어는 없다.

😀순서
1. 전체 소문자로 변경
2. 공백기준으로 배열 생성
3. 각배열의 앞글자 대문자로 변경
  - 배열이 공백일 경우 따로 처리
4. 배열을 문자열로 변경join()

🚨 주의
- 런타임 에러 (replace 사용시)

🍭점수: 15점
*/

const solution = (s) =>
  s
    .toLowerCase()
    .split(" ")
    .map((el) =>
      el == "" ? "" : el[0].toUpperCase() + el.substr(1, el.length)
    )
    .join(" ");
