/*
🚩네트워크 🚩
네트워크의 갯수

😀순서
stack = 돌아봐야할 컴퓨터
networkCount = 네트워크 갯수
computersNullCount = computers의 null 갯수
changeNull(index) -> computers[index] = null
pushConnectedComputer(index) -> computers[index]과 연결된 컴퓨터들 위치정보 stack 에 저장


stack 이 비어있을 경우.
networkCount 갓수 +1
computers 를 for 문으로 돌면서 null값이 아닌 컴퓨터와 연결되어있는 컴퓨터를 찾는다.
computers 가 모두 null일 경우 networkCount값을 반환한다.
computers에 값이 있을 경우, stack에 해당 컴퓨터와 연결되어있는 컴퓨터 index를 넣는다.

stack 에 값이 있을 경우.
해당 위치의 computer 를 null 로 바꾼다.

🚨 주의
- 고립된 네트워크도 찾기

⏳시간복잡도: O(n^3)

🍭점수: 3 점
*/

let testCase = [
    {
        n: 3,
        computers: [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
        result: 2
    },
    {
        n: 3,
        computers: [[1, 1, 0], [1, 1, 1], [0, 1, 1]],
        result: 1
    },
    {
        n: 4,
        computers: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]],
        result: 2
    },
    {
        n: 4,
        computers: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
        result: 4
    },
    {
        n: 1,
        computers: [[1]],
        result: 1
    },
    {
        n: 6,
        computers: [[1, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1],],
        result: 3
    },
]


function solution(n, computers) {
    const stack = [];
    let networkCount = 0;
    let computersNullCount = 0;

    const changeNull = (index) => {
        if (computers[index] === null) return
        computers[index] = null
        computersNullCount += 1
    }

    const pushConnectedComputer = (index) => {
        computers[index].forEach((isConnected, index) => {
            if (isConnected === 0) return
            stack.push(index)
        })
    }

    let test = 0
    while (computersNullCount < n) {
        test += 1
        if (stack.length === 0) {
            // stack 에 값이 없을때
            for (const computerIndex in computers) {
                // 초기 null 값이 아닌 맨 앞 데이터 stack에 넣어주기
                const computer = computers[computerIndex]
                if (computer === null) continue;
                // computerIndex에 연결된 컴퓨터 위치 stack에 넣어주기
                pushConnectedComputer(computerIndex)
                // 지금위치 컴퓨터 null 로 변경
                changeNull(computerIndex)
                break
            }
        } else {
            // stack 에 값이 있을때 stack 값 모두 빼주기
            while (stack.length > 0) {
                const computerIndex = stack.shift() //stack 의 맨앞자리 제거
                if (computers[computerIndex] !== null) {
                    pushConnectedComputer(computerIndex)
                    changeNull(computerIndex)
                }
            }
        }

        if (stack.length > 0) networkCount += 1
    }

    return networkCount;
}

testCase.forEach(({n, computers, result}, i) => {
    let answer = solution(n, computers)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})