/*
🚩순위 🚩

해당 노드의 자식 요소들 전체 곗수가 점수

😀순서

🚨 주의

⏳시간복잡도:

🍭점수: 8 점
*/

let testCase = [
    {
        n: 5,
        results: [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]],
        result: 2
    }
]

function solution(n, results) {
    let answer = 0;
    const graph = Array.from({length: n}, () => Array(n).fill(0));

    // 승패 결과를 그래프에 기록
    results.forEach(([winner, loser]) => {
        graph[winner - 1][loser - 1] = 1;
    });

    // 플로이드-워셜 알고리즘
    for (let intermediary = 0; intermediary < n; intermediary++) {
        console.log(graph)

        for (let start = 0; start < n; start++) {
            for (let end = 0; end < n; end++) {
                if (graph[start][intermediary] === 1 && graph[intermediary][end] === 1) {
                    graph[start][end] = 1;
                }
            }
        }
    }
    console.log(graph)

    // 각 선수의 순위를 정확히 매길 수 있는지 확인
    for (let player = 0; player < n; player++) {
        let count = 0;
        for (let opponent = 0; opponent < n; opponent++) {
            if (graph[player][opponent] === 1) count++;
            if (graph[opponent][player] === 1) count++;
        }
        if (count === n - 1) answer++;
    }

    return answer;
}

testCase.forEach(({n, results, result}, i) => {
    let answer = solution(n, results)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
}) 