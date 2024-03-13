/*
🚩 전화번호 목록 🚩
한 번호가 다른 번호의 접두어인 경우 false 반환
phone_book 의 길이는 100만개 까지
같은 번호 중복은 없음.

😀순서
결과 : 시간초과
1. 길이가 작은 번호 부터 재정렬
2. 길이가 작은 번호 부터 접두어가 같은게 있는지 정규표현식으로 확인해 본다.
3. 확인한 번호들은 제거 해가면서.

결과 : 시간 초과
1. 같은 숫자로 시작하는애들끼리 묶어서 비교
2. 길이가 작은 번호 부터 재정렬
3. 길이가 작은 번호 부터 접두어가 같은게 있는지 정규표현식으로 확인해 본다.
4. 확인한 번호들은 제거 해가면서.

결과 : 정답 (결국 답을 봤다.)
1. 오름 차순으로 정렬
2. 이전 번호로 다음 번호가 시작하면 false 반환

🚨 주의

🍭점수: 11 점
*/

let testCase = [
    [["119", "97674223", "1195524421"], false],
    [["123", "456", "789"], true],
    [["12", "123", "1235", "567", "88"], false]
]


function solution(phone_book) {
    phone_book.sort()
    for (let i = 0; i < phone_book.length; i++) {
        const splitNum = phone_book[i].split(phone_book[i - 1])
        if (splitNum.length === 2 && splitNum[0] === '') {
            return false
        }
    }
    return true;
}

testCase.forEach(([test, result]) => {
    // console.log(solution(test) === result)
    console.log(solution(test))
})