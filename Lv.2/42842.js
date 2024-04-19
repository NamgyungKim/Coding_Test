/**
 🚩카펫 🚩
 - 카펫의 가로 세로 길이 찾기
 - 내부 yellow 가 갖을 수 있는 모든 가로세로 길이 구하기.

 😀순서
 1. 내부 yellow 가 갖을 수 있는 모든 가로세로 길이 구하기.  = yellowCase[]
 2. yellowCase for 문으로 돌면서 해당 카펫에 필요한 brown 갯수 구하기 : yellow가로길이 * 2 + yellow세로길이 * 2 + 4 = brwon갯수

 🚨 주의

 ⏳시간복잡도: O(2n)

 🍭점수: 5 점
 */

let testCase = [
    {
        brown: 10,
        yellow: 2,
        result: [4, 3]
    },
    {
        brown: 8,
        yellow: 1,
        result: [3, 3]
    },
    {
        brown: 24,
        yellow: 24,
        result: [8, 6]
    }
]


function solution(brown, yellow) {
    const yellowCase = []
    if (yellow === 1) {
        yellowCase.push([yellow / 1, 1])
    } else {
        for (let width = 1; width <= Math.floor(yellow / 2); width++) {
            if (yellow % width === 0) {
                yellowCase.push([yellow / width, width])
            }
        }
    }
    for (let [height, width] of yellowCase) {
        const brownCount = width * 2 + height * 2 + 4
        if (brownCount === brown) {
            return [height + 2, width + 2]
        }
    }
}

testCase.forEach(({brown, yellow, result}, i) => {
    let [width, height] = solution(brown, yellow)
    console.log(width, height)
    const check = width === result[0] && height === result[1]
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})