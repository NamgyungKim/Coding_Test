/*
🚩여행경로 🚩
항공권을 모두 사용할 경우 경로 반환

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        tickets: [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]],
        result: ["ICN", "JFK", "HND", "IAD"]
    },
    {
        tickets: [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]],
        result: ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
    }
]


function solution(tickets) {
    const result = []
    const graph = {};
    // graph setting
    tickets.forEach(([st, ed]) => {
        if (graph[st]) {
            graph[st] = [...graph[st], ed]
        } else {
            graph[st] = [ed]
        }
    })
 
    const stack = ['ICN']
    while (stack.length > 0) {
        const currentLocation = stack.shift()
        result.push(currentLocation)
        graph[currentLocation].forEach(() => {

        })
    }
    console.log(graph)
    return result;
}

testCase.forEach(({tickets, result}, i) => {
    let answer = solution(tickets)
    let check = JSON.stringify(answer) === JSON.stringify(result)
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})