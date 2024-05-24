/*
🚩타겟 넘버 🚩

numbers 의 숫자를 더하고 빼서 해당 target 과 같은 숫자로 만들 방법 갯수 return

😀순서
answer = 결과값
addNum = numbers 를 다 더한 값
combination(length, n) = length 에서 n개를 뽑을 때 나올 수 있는 모든 경우르 arr 로 return

1. numbers 를 내림차순 정렬
2. numbers 에 모든 조합의 값으로 빼보고 target 의 값과 같은 조합들 갯수 카운트
 - 1개값 뺄경우, 2개값을 뺄경우...
 - 만약 x개의 값으로 만들 수 있는 가장 작은 수를 addNum 에 뺐을때 target 보다 작아진다면 이후 조합은 보나마나 함 return 시켜버림


🚨 주의

⏳시간복잡도: O(n^3)

🍭점수: 1 점
*/

let testCase = [
    {
        numbers: [1, 1, 1, 1, 1],
        target: 3,
        result: 5
    }, {
        numbers: [4, 1, 2, 1],
        target: 4,
        result: 2
    },
]

function combination(length, n) {
    const answer = []
    const callback = (depth = 0, memo = []) => {
        const lastNum = memo[memo.length - 1] >= 0 ? memo[memo.length - 1] - 1 : length - 1
        if (depth >= n) {
            answer.push(memo)
            return
        }
        for (let i = lastNum; i >= 0; i--) {
            callback(depth + 1, [...memo, i])
        }
    }
    callback()
    return answer
}

function solution(numbers, target) {
    const addNum = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    )
    let answer = 0;
    numbers.sort((a, b) => b - a)

    for (let i = 1; i <= numbers.length; i++) {
        const testCase = combination(numbers.length, i)

        for (const index in testCase) {
            const arr = testCase[index]
            let addTestNum = 0
            arr.forEach((num) => {
                addTestNum += numbers[num]
            })
            if (addNum - addTestNum * 2 === target) answer += 1
            if (index === '1' && addNum - addTestNum * 2 < target) {
                return answer
            }
        }
    }
    return answer;
}


testCase.forEach(({numbers, target, result}, i) => {
    let answer = solution(numbers, target)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})