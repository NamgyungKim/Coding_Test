/*
🚩주식가격 🚩
초단위로 바뀐 주식 가격 = prices
떨어지지 않은기간은 몇 초인가?

😀순서
prices의 각 인덱스를 i라 한다.
i 이후로 가격이 내려간 위치의 index 를 s라 한다.
s-i값을 result 에 push 한다.

🚨 주의


⏳시간복잡도: O(n^2)

🍭점수: 8 점
*/

let testCase = [
    [[1, 2, 3, 2, 3], [4, 3, 1, 1, 0]]
]

function solution(prices) {
    const result = []
    prices.forEach((price, s) => {
        for (let i = s + 1; prices.length > i; i++) {
            if (price > prices[i] || prices.length - 1 === i) {
                result.push(i - s)
                return
            }
        }
    })
    result.push(0)
    return result
}

testCase.forEach(([prices, result], i) => {
    const answer = solution(prices)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`내답: ${answer}`)
    console.log(`정답: ${result}`)
})