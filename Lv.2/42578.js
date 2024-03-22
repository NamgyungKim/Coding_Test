/*
 🚩 의상  🚩
 최소 1개의 의상을 입을 것.
 종류별로 최대 하나만 착용할 수 있다.
 옷의 조합 갯수를 구하시오.

 😀순서
 결과 : 시간초과
 1. 종류별로 의상의 갯수 + 1(안입었을경우)를 구한다.
 2. 종류별 경우의수들을 다 곱해서 전체 조합갯수를 구한다.
 3. 전체 조합 갯수에서 -1(최소 1개의 의상은 입어야 하므로)

 🚨 주의

 ⏳시간복잡도: O(2n)

 🍭점수: 5 점
 */

let testCase = [
    [[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]], 5],
    [[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]], 3],
]


function solution(clothes) {
    let clothesType = {}
    let answer = 1;
    clothes.forEach(([aClothes, type]) => {
        if (clothesType[type]) {
            clothesType[type]++
        } else {
            clothesType[type] = 2
        }
    })
    for (let type in clothesType) {
        answer = answer * clothesType[type]
    }
    return answer - 1
}

testCase.forEach(([test, result], i) => {
    console.log(solution(test))
    console.log(`------ ${i + 1}번 정답 -------`)
    console.log(solution(test) === result)
})