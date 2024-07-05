/*
🚩가장 먼 노드 🚩
1번 노드와 가장 떨어진 노드

😀순서

🚨 주의

⏳시간복잡도: O(n^2)

🍭점수: 4 점
*/

let testCase = [
    {
        n: 6,
        edge: [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]],
        result: 3
    }
]


function solution(n, edge) {
    const graph = {};
    const depths = Array.from({length: n}, () => 0)
    edge.forEach(([a, b]) => {
        graph[a] = graph[a] ? [...graph[a], b] : [b]
        graph[b] = graph[b] ? [...graph[b], a] : [a]
    })
    depths[0] = 1


    let path = [1]
    let depth = 1

    while (depths.indexOf(0) !== -1) {
        depth += 1

        const current = path
        path = []
        for (const currentDate of current) {
            graph[currentDate].forEach((num) => {
                if (depths[num - 1] !== 0) return
                depths[num - 1] = depth
                path.push(num)
            })
        }
    }
    const maxNum = Math.max(...depths)
    return depths.filter((n) => n === maxNum).length
}

testCase.forEach(({n, edge, result}, i) => {
    let answer = solution(n, edge)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})