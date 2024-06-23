/*
🚩여행경로 🚩
- 항공권을 모두 사용할 경우 경로 반환
- 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.

😀순서

🚨 주의

⏳시간복잡도:

🍭점수: 11 점
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
    let paths = [];

    function dfs(tickets, current, path) {
        if (tickets.length === 0) {
            paths.push(path)
            return
        }

        tickets.forEach(([departure, destination], index) => {
            if (current === departure) {
                const newTickets = tickets.slice();
                newTickets.splice(index, 1)
                dfs(newTickets, destination, path.concat(destination))
            }
        });
    }

    dfs(tickets, "ICN", ["ICN"])
    return paths.sort()[0];
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