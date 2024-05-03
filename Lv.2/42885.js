/*
🚩구명보트 🚩


😀순서

🚨 주의

⏳시간복잡도: O(nlogn)

🍭점수: 10 점
*/

let testCase = [
    {
        people: [70, 50, 80, 50],
        limit: 100,
        result: 3
    },
    {
        people: [70, 80, 50],
        limit: 100,
        result: 3
    },
]


function solution(people, limit) {
    const arr = [...people.sort((a, b) => b - a)]
    let count = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (limit - arr[i] >= arr[arr.length - 1]) {
            arr.pop()
            ++count
        }
    }
    return people.length - count
}

testCase.forEach(({people, limit, result}, i) => {
    let check = solution(people, limit) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})