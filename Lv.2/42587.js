/*
🚩프로세스 🚩
- 숫자가 클수록 우선순위가 높다.
- index는 0 부터 시작한다.
- 0부터 값을 차래로 꺼낸다.

😀순서
1. 원하는 location 위치 까지 순서가 올때까지 while 돌리기
2. priorities 중 가장 큰값 -1로 만들며 count 올리기
3. 가장 큰값 구했으면 그다음 큰값 구해서 계속 -1로 만들기
4. 원하는 location 위치의 순서가 오면 count 와함께 return

🚨 주의

⏳시간복잡도: O(n^2)

🍭점수: 2 점
*/

let testCase = [
    [[2, 1, 3, 2], 2, 1],
    [[1, 1, 9, 1, 1, 1], 0, 5],
]


function solution(priorities, location) {
    let count = 0
    let max = Math.max(...priorities)
    while (true) {
        for (let i in priorities) {
            if (priorities[i] === Math.max(...priorities)) {
                count++
                if (location == i) {
                    return count
                }
                max = Math.max(...priorities)
                priorities.splice(i, 1, -1)
            }
        }
    }
}

testCase.forEach(([priorities, location, result], i) => {
    let check = solution(priorities, location) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})