/*
🚩N으로 표현 🚩

N과 사칙연산 만으로 number 표현
N은 최대 9 개까지 사용가능
괄호사용 가능

// + * - / (숫자 이어 붙이기)

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        N: 5,
        number: 12,
        result: 4
    }, {
        N: 2,
        number: 11,
        result: 3
    }, {
        N: 2,
        number: 2,
        result: 1
    }, {
        N: 6,
        number: 5,
        result: 3
    }, {
        N: 4,
        number: 31,
        result: 3
    },
]


function solution(N, number) {
    let result = [N];

    // 최대 N 이 9개까지 쓰임
    for (let i = 2; i < 8; i++) {
        const set = new Set()
        set.add(Number(N.toString().repeat(i)))
        for (let num of result) {
            if (number === num) return i - 1
            set.add(num + N)
            set.add(Math.floor(num / N))
            set.add(Math.floor(N / num))
            set.add(num * N)
            set.add(num - N)
            set.add(N - num)
        }
        set.add(...result)
        result = [...Array.from(set).filter((check) => {
            if (check === Infinity) return false
            if (check === -Infinity) return false
            if (isNaN(check)) return false
            return check >= 0;
        })]
        // console.log(result.sort((a, b) => a - b))
    }

    return -1
}

testCase.forEach(({N, number, result}, i) => {
    const answer = solution(N, number)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`내답: ${answer}`)
    console.log(`정답: ${result}`)
})