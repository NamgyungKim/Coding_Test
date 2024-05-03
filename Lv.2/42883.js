/*
🚩큰 수 만들기 🚩
number 에서 k개의 숫자를 제거해서 가장 큰 수 만들기

😀순서
1. 1개 뺐을 때 가장 큰수, 1개 더뺐을때 가장 큰수 ... 를 계속 구한다.

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
    {
        number: "333333",
        k: 4,
        result: "33"
    },
]

function solution(number, k) {
    let result = number
    while (result.length > number.length - k) {
        if (result.replaceAll(result[0], '').length === 0) {
            result = result.slice(0, result.length - 2)
            continue
        }
        for (let i = 0; i < result.length; i++) {
            if (result[i] < result[i + 1]) {
                result = result.replace(result[i], '')
                i = result.length
            }
        }
    }
    return result
}

// function solution(number, k) {
//     let result = number
//     while (result.length > number.length - k) {
//         let replaceNum1 = result
//         let replaceNum2 = result
//         let stop = true
//         while (stop) {
//             replaceNum2 = replaceNum1.replaceAll(replaceNum1[0], '')
//             if (replaceNum1[0] < replaceNum2[0]) {
//                 result = result.replace(replaceNum1[0], '')
//                 stop = false
//             }
//             if (replaceNum2.length === 0) {
//                 result = result.slice(0, result.length - 2)
//                 stop = false
//             }
//             replaceNum1 = replaceNum2
//         }
//     }
//     return result
// }

testCase.forEach(({number, k, result}, i) => {
    let check = solution(number, k) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})