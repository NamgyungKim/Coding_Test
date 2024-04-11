/*
🚩H-Index 🚩

😀순서
1. citations 내림차순으로 정렬
2. 인용숫자 > index return
   인용숫자 === index 면 지금 index + 1 반환
   인용숫자 < index면 index 반환


🚨 주의
- 논문 갯수보다 인용숫자가 많을경우 조심

⏳시간복잡도: O(n)

🍭점수: 7 점
*/

let testCase = [
    {
        input: [3, 0, 6, 1, 5],
        result: 3
    },
    {
        input: [10, 8, 5, 4, 3],
        result: 4
    },
    {
        input: [25, 8, 5, 3, 3],
        result: 3
    },
    {
        input: [3, 4],
        result: 2
    },
]


function solution(citations) {
    const sortData = citations.sort((a, b) => b - a)
    for (let i in sortData) {
        if (sortData[i] > 1 + Number(i)) continue
        if (sortData[i] < 1 + Number(i)) return Number(i)
        return 1 + Number(i)
    }
    return Math.min(sortData.length, sortData[sortData.length - 1]);
}

testCase.forEach(({input, result}, i) => {
    let answer = solution(input)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`내답: ${answer}`)
    console.log(`정답: ${result}`)
})