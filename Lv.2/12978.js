/*
🚩문제이름 🚩
배달

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        N: 5,
        road: [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]],
        K: 3,
        result: 4
    },
    {
        N: 6,
        road: [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]],
        K: 4,
        result: 4
    },
    {
        N: 5,
        road: [[1, 2, 1], [2, 3, 3], [5, 2, 2], [5, 3, 1]],
        K: 3,
        result: 3
    },
    {
        N: 5,
        road: [[1, 2, 2], [2, 3, 3], [5, 2, 2], [5, 3, 1], [4, 1, 2], [4, 2, 2], [4, 3, 2], [1, 4, 1]],
        K: 4,
        result: 5
    },

];

function solution(N, road, K) {
    const max = 500000;

    const Road = Array.from({length: N}, (_, i) => Array.from({length: N}, (_, j) => i === j ? 0 : max))
    const visited = Array(N).fill(false);
    let distance

    road.forEach(([start, end, length]) => {
        start -= 1;
        end -= 1;
        Road[start][end] = Math.min(Road[start][end], length);
        Road[end][start] = Math.min(Road[end][start], length);
    });

    // 방문하지 않은 곳 중 가장 작은 거리
    function getSmallDistance() {
        let result = 0
        let min = max
        for (let i = 0; i < N; i++) {
            if (!visited[i] && min > distance[i]) {
                result = i
                min = distance[i]
            }
        }
        if (result !== undefined) {
            visited[result] = true
        }
        return result
    }

    // 초기값 세팅
    distance = [...Road[0]];
    for (let i = 0; i < N; i++) {
        const current = getSmallDistance()
        for (let j = 0; j < N; j++) {
            if (i !== j && !visited[j] && ((distance[current] + Road[current][j]) < distance[j])) {
                distance[j] = distance[current] + Road[current][j]
            }
        }
    }
    for (let i = 0; i < N; i++) {
        let min = max;
        let current = -1;

        // 방문하지 않은 노드 중 가장 짧은 거리 노드 선택
        for (let j = 0; j < N; j++) {
            if (!visited[j] && distance[j] < min) {
                min = distance[j];
                current = j;
            }
        }

        if (current === -1) break;
        visited[current] = true;

        // 현재 노드를 통해 인접 노드로 가는 최단 거리 갱신
        for (let j = 0; j < N; j++) {
            if (Road[current][j] !== max && distance[current] + Road[current][j] < distance[j]) {
                distance[j] = distance[current] + Road[current][j];
            }
        }
    }

    return distance.filter((num) => num <= K).length
};

testCase.forEach(({N, road, K, result}, i) => {
    let answer = solution(N, road, K)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
});