/*
🚩정수 삼각형 🚩

😀순서
triangle 뒤에서 부터 가장 큰 조합 계산

🚨 주의

⏳시간복잡도: O(n^2)

🍭점수: 4 점
*/

let testCase = [
    {
        triangle: [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]],
        result: 30
    }
]

function solution(triangle) {
    let result = triangle[triangle.length - 1]
    for (let depth = triangle.length - 1; depth > 0; depth--) {
        const arr = []
        for (let i = 0; i < triangle[depth].length - 1; i++) {
            if (result[i] > result[i + 1]) {
                arr.push(result[i] + triangle[depth - 1][i])
            } else {
                arr.push(result[i + 1] + triangle[depth - 1][i])
            }
        }
        result = arr
    }
    return result[0]
}

testCase.forEach(({triangle, result}, i) => {
    let check = solution(triangle) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})