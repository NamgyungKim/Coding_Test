/*
🚩섬 연결하기 🚩

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        n: 4,
        costs: [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]],
        result: 4
    },
    {
        n: 1,
        costs: [],
        result: 0
    },
]

function solution(n, costs) {
    let result = Infinity

    const callback = (arr, num, selected = [], cost = 0) => {
        if (result <= cost) return // 금액이 크면 짤
        if (num === 0) {
            // 섬이 다 연결되어있는지 확인
            const islands = new Set()
            selected.forEach(([islandA, islandB]) => {
                islands.add(islandA)
                islands.add(islandB)
            })
            if (islands.size === n) result = cost
            return
        }
        for (let i in arr) {
            if (arr[i][2] >= result) continue
            callback(arr.filter((item) => item != arr[i]), num - 1, [...selected, arr[i]], cost + arr[i][2])
        }
    }

    callback(costs, n - 1);

    return result === Infinity ? 0 : result
}


testCase.forEach(({n, costs, result}, i) => {
    let check = solution(n, costs) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})