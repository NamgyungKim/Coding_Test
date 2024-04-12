/*
🚩이중 우선순위큐 🚩

😀순서

🚨 주의

⏳시간복잡도: O(n^2*logn)

🍭점수: 4 점
*/

let testCase = [
    {
        input: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
        result: [0, 0]
    },
    {
        input: ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
        result: [333, -45]
    },
]


function solution(operations) {
    let queue = []
    operations.forEach(action => {
        const [command, num] = action.split(' ')
        switch (command) {
            case 'I':
                queue.push(Number(num))
                queue.sort((a, b) => b - a)
                break;
            case 'D':
                if (num === '-1') {
                    queue.pop()
                } else if (num === '1') {
                    queue.shift()
                }
                break;
        }
    })

    if (queue.length === 0) {
        return [0, 0]
    }
    return [queue[0], queue[queue.length - 1]]

}

testCase.forEach(({input, result}, i) => {
    const [max, min] = solution(input)
    let check = () => {
        if (max === result[0] && min === result[2]) return true
        return false
    }
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})