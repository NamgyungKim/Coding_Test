/*
🚩피로도 🚩
k = 피로도
["최소 필요 피로도", "소모 피로도"] = 던전
최대한 탐험할 수 있는 던전의 수

😀순서
1. 던전을 돌 수 있는 모든 경우의수로 돈다.;;

🚨 주의

⏳시간복잡도: O(n^2)

🍭점수: 9 점
*/

let testCase = [
    {
        k: 80,
        dungeons: [[80, 20], [50, 40], [30, 10]],
        result: 3
    }
]


function solution(k, dungeons) {
    let result = 0
    let dCase = []


    backtrack([], Array.from({length: dungeons.length}, (_, n) => n))

    function backtrack(curr, remaining) {
        if (remaining.length === 0) {
            dCase.push(curr);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const newCurr = curr.concat(remaining[i]);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                backtrack(newCurr, newRemaining);
            }
        }
    }

    for (let path of dCase) {
        let fatigue = k
        let completeNum = 0
        for (let index of path) {
            const [minK, useUp] = dungeons[index]
            if (fatigue < minK) continue;
            fatigue -= useUp
            completeNum++
            if (result < completeNum) result++
        }
    }
    return result
}

testCase.forEach(({k, dungeons, result}, i) => {
    let check = solution(k, dungeons) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})