/*
🚩등굣길 🚩
옛날에 했던 경우의 수와 같은 문제네.

😀순서
[1,1,1,1]
[1,x,1,2]
[1,1,2,4]
총 4가지 경우

1. 지뢰 위치 표기
2. [0][0] 은 1로 시작
3. 지금 위치의 위 + 왼쪽 숫자는 지금위치 x는 0으로 계산

[1,1,1,1]
[x,1,2,3]
[0,1,3,6]

- 출발과 도착지점 은 물에 안잠기는듯

🚨 주의
- puddles 숫자가 1씩 크게 적혀있음
- BigInt
- puddles 순서가 반대였다. [y,x]

⏳시간복잡도: O(n^2)

🍭점수: 12 점
*/

let testCase = [
    {
        m: 4,
        n: 3,
        puddles: [[2, 2]],
        result: 4
    }, {
        m: 4,
        n: 3,
        puddles: [[2, 1]],
        result: 4
    }, {
        m: 2,
        n: 1,
        puddles: [],
        result: 1
    },
]

const makeMap = (x, y) => {
    return Array.from({length: x}, () => Array.from({length: y}, () => undefined))
}

function solution(m, n, puddles) {
    let map = makeMap(n, m)
    puddles.forEach(([y, x]) => {
        map[x - 1][y - 1] = 0
    })
    map[0][0] = 1

    for (let y = 0; y < n; y++) for (let x = 0; x < m; x++) {
        if (map[y][x] === 0 || (x === 0 && y === 0)) continue
        const top = y - 1 < 0 ? 0 : map[y - 1][x]
        const left = x - 1 < 0 ? 0 : map[y][x - 1]

        map[y][x] = (top + left) % 1000000007
    }
    return map[n - 1][m - 1]
}

testCase.forEach(({m, n, puddles, result}, i) => {
    let answer = solution(m, n, puddles)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})