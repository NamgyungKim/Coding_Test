/*
🚩문제이름 🚩

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        input: [[0, 3], [1, 9], [2, 6]],
        result: 9
    }
]


function solution(jobs) {
    let answer = 0;
    console.log(jobs)
    return answer;
}

testCase.forEach(({input, result}, i) => {
    let check = solution(input) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})