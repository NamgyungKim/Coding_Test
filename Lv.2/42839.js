/*
🚩소수찾기 🚩
흩어진 종이 조각을 붙여 만들 수 있는 소수 갯수

😀순서
- 소수인지 여부 구하는 함수
- 종이를 이어 붙여 만들 수 있는 모든 숫자의 경우의 수 구하기

🚨 주의

⏳시간복잡도: 완전탐색

🍭점수: 6 점
*/

let testCase = [
    {
        input: "17",
        result: 3
    },
    {
        input: "011",
        result: 2
    },
]


function solution(numbers) {
    let answer = 0
    const isPrimeNumber = (number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return true
        }
        return false
    }

    const set = new Set();

    const callback = (length, currentLength, arr, num) => {
        if (length == currentLength - 1) {
            if (Number(num) < 2) return
            set.add(Number(num))
            return
        }
        for (let i in arr) {
            const spliceArr = [...arr]
            spliceArr.splice(Number(i), 1)
            callback(length, currentLength + 1, spliceArr, String(num) + String(arr[i]))
        }
    }

    for (let i = 1; i <= numbers.length; i++) {
        callback(i, 1, numbers.split(''), '')
    }

    [...set].forEach((num) => {
        if (!isPrimeNumber(num)) {
            answer++
        }
    })

    return answer
}

testCase.forEach(({input, result}, i) => {
    let check = solution(input) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})