/*
🚩전력망을 둘로 나누기 🚩
송전선을 하나를 끊어서 전력망을 둘로 나눈다.
이때 두 망의 송전탑의 갯수 차이가 최대한 나지 않도록 한다.
전력망을 나눴을때 두 망의 송전탑의 차이를 구하시오.
n = 송전탑 갯수
wires = 와이어

😀순서
1. 완전 탐색이니까... wires 한개씩 제거해본다.
2. 제거후 2개로 나뉘었는지 확인 후 각각의 망의 송전탑 수를 센다.
3. 두 망의 송전탑 차를 결과 값에 넣는다.
4. 1,2,3 을 반복하며 결과값이 이전값들보다 작게 나왔을 경우 해당값으로 결과값을 교체한다.

🚨 주의
- n이 2 인경우 무조건 결과는 1
- 그룹이 3개 1개 이렇게 잘린경우.

⏳시간복잡도: O(n^2*logn) 정도..?

🍭점수: 3 점
*/

let testCase = [
    {
        n: 9,
        wires: [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]],
        result: 3
    },
    {
        n: 4,
        wires: [[1, 2], [2, 3], [3, 4]],
        result: 0
    },
    {
        n: 7,
        wires: [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]],
        result: 1
    },
    {
        n: 4,
        wires: [[1, 2], [1, 3], [1, 4]],
        result: 2
    },
    {
        n: 2,
        wires: [[1, 2]],
        result: 0
    }
]


function solution(n, wires) {
    if (n === 2) return 0
    let result = n
    for (let x = 0; x < wires.length; x++) {
        const tree = {...Array.from({length: n + 1}, () => [])}
        for (let i = 0; i < wires.length; i++) {
            if (x === i) continue;
            tree[wires[i][0]].push(wires[i][1])
            tree[wires[i][1]].push(wires[i][0])
        }

        let group = []
        const callback = (tree, path, groupNum = -1) => {
            // 중간에 끊긴 경우.
            if (path.length === 0) {
                for (let i = 1; i <= n; i++) {
                    if (tree[i].length > 0) {
                        const data = [...tree[i]]
                        tree[i] = []
                        group.push([])
                        callback(tree, data, groupNum + 1)
                        break;
                    }
                }
                return
            }

            const data = tree[path[0]]
            let set = new Set([...group[groupNum], ...path]);
            group[groupNum] = [...set]
            tree[path[0]] = []
            path.shift()
            path = [...path, ...data]
            callback(tree, path, groupNum)
        }
        callback(tree, [])

        if (group.length === 1 && group[0].length === n - 1) {
            if (result > n - 2) {
                result = n - 2
            }
        }
        if (group.length === 2) {
            if (result > Math.abs(group[0].length - group[1].length)) {
                result = Math.abs(group[0].length - group[1].length)
            }
        }
    }
    return result
}

testCase.forEach(({n, wires, result}, i) => {
    let check = solution(n, wires) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})