/*
🚩올바른괄호 🚩
괄호가 올바른지에 따라서 bool return

😀순서
1. "("가 나올경우 숫자를 올려준다.
2. ")"가 나올경우 숫자를 내린다.
- 숫자가 음수가 나올경우 false
- 마지막에 숫자가 0이 아닐 경우 false

🚨 주의

⏳시간복잡도: O(n)

🍭점수: 6 점
*/

let testCase = [
    ["()()", true],
    ["(())()", true],
    [")()(", false],
    ["(()(", false],
]


function solution(s) {
    let strArr = s.split('')
    let needClosedNum = 0
    for (let str of strArr) {
        if (str === '(') {
            needClosedNum++
        }
        if (str === ')') {
            needClosedNum--
            if (needClosedNum < 0) return false
        }
    }
    return needClosedNum === 0;
}

testCase.forEach(([test, result], i) => {
    let check = solution(test) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})