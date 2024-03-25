/*
🚩다리를 지나는 트럭 🚩

😀순서
- 변수: 다리에 지나고 있는 차량 무게, 시간, 다리
1. 다리 한 칸 움직임은 push, shift 로 구현, 움직일때마다 시간+1
2. 다리를 지나고 있는 차량의 무게가 0이 되었을때 시간 return

🚨 주의
차 빠지면 바로 차량 추가
[ 0, 7 ]
[ 7, 0 ]
[ 0, 0 ] <==
[ 0, 4 ]


⏳시간복잡도: O(n^2)

🍭점수: 7 점
*/

let testCase = [
    [2, 10, [7, 4, 5, 6], 8],
    [100, 100, [10], 101],
    [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 110]
]

function solution(bridge_length, weight, truck_weights) {
    let bridgeWeight = 0
    let bridge = Array.from({length: bridge_length}, () => 0)
    let time = 0

    truck_weights.forEach((truck_weight, i) => {
        move(truck_weight)
        // 마지막 차량일 경우 차가 다 지날때 까지 이동
        if (i === truck_weights.length - 1) {
            while (bridgeWeight !== 0) {
                move()
            }
            return
        }

        // 다음차가 있을 경우
        const nextTruck = truck_weights[i + 1]
        while (weight < (nextTruck + bridgeWeight - bridge[0])) {
            move()
        }
    })

    function move(truck = 0) {
        const shiftTruck = bridge.shift()
        bridge.push(truck)
        bridgeWeight += truck
        bridgeWeight -= shiftTruck
        time++
    }

    return time
}

testCase.forEach(([bridge_length, weight, truck_weights, result], i) => {
    const answer = solution(bridge_length, weight, truck_weights)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`내답: ${answer}`)
    console.log(`정답: ${result}`)
})