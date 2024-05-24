/*
🚩큰 수 만들기 🚩
number 에서 k개의 숫자를 제거해서 가장 큰 수 만들기

😀순서
수를 쌓아가는 방식으로
1. 첫번째 숫자를 num 변수에 넣는다.
2. 두번째 숫자와 num 비교
 2-1 num > 두번째 숫자 이면 num을 취하고 다음 숫자를 num에 넣는다.
 2-2 num <= 두번째 숫자 이면 num을 버리고 두번째 숫자를 num 에 넣는다.
3. 수를 버릴때 마다 k를 빼준다.
k가 0 이면 뒤의모든 숫자는 취해야함.

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        number: "1924",
        k: 2,
        result: "94"
    },
    {
        number: "1231234",
        k: 3,
        result: "3234"
    },
    {
        number: "4177252841",
        k: 4,
        result: "775841"
    },
    // {
    //     number: "333333",
    //     k: 4,
    //     result: "33"
    // },
]

num = 9


function solution(number, k) {
    let result = ''
    let num = number[0]
    while (k > 0) {
        for (let i = 1; i < number.length; i++) {
            if (k === 0 || i === number.length - 1) {
                result = result + number.slice(i - 1, number.length)
                return result
            }
            console.log(num, number[i])
            if (num > number[i]) {
                result = result + num
                num = number[i]
            } else {
                k--
                num = number[i]
            }
        }
    }
    return result
}

testCase.forEach(({number, k, result}, i) => {
    let answer = solution(number, k)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})