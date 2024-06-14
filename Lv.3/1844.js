/*
🚩게임맵 최단 거리 🚩
- 갔던 길은 또 가지 않도록 벽으로 만들어 막아두기

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        maps: [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]],
        result: 11
    }, {
        maps: [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]],
        result: -1
    },
]


function solution(maps) {
    const MAP_Y_LENGTH = maps.length;
    const MAP_X_LENGTH = maps[0].length

    const START = [0, 0]
    const GOLL = [MAP_Y_LENGTH - 1, MAP_X_LENGTH - 1]

    const WALL = 0;
    const WAY = 1;

    const result = []

    function turnIntoWall(y, x, map) {
        map[y][x] = WALL
        return map
    }

    function catheWayToGo(y, x, map) {
        const result = []
        const left = [y, x - 1]
        const right = [y, x + 1]
        const up = [y - 1, x]
        const down = [y + 1, x]

        if (map[left[0]][left[1]] === WAY) result.push(left)
        if (map[right[0]][right[1]] === WAY) result.push(right)
        if (map[up[0]] && map[up[0]][up[1]] === WAY) result.push(up)
        if (map[down[0]] && map[down[0]][down[1]] === WAY) result.push(down)

        return result
    }


    const stack = [{
        map: maps,
        nowLocation: START,
        count: 1
    }]
    do {
        let {map, nowLocation, count} = stack.pop()
        const [y, x] = nowLocation

        map = turnIntoWall(y, x, map)
        if (y === GOLL[0] && x === GOLL[1]) {
            result.push(count)
        }

        for (let way of catheWayToGo(y, x, map)) {
            const [Y, X] = way
            stack.push({
                nowLocation: [Y, X],
                count: count + 1,
                map: map.map(v => [...v])
            })
        }
    } while (stack.length > 0)

    return result.length === 0 ? -1 : Math.min(...result)
}

testCase.forEach(({maps, result}, i) => {
    let answer = solution(maps)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})