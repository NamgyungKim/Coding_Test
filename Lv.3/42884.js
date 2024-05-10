/*
🚩단속 카메라 🚩

😀순서
1. 기존 카메라 범위에 없으면 추가 설치
2. 기존 카메라 범위에 있으면 해당 카메라 범위 재조정
1과2 반복

🚨 주의
왜 sort 를 안하면 틀리는거지...?

⏳시간복잡도: n^2

🍭점수:  점
*/

let testCase = [
    {
        routes: [[-20, -15], [-14, -5], [-18, -13], [-5, -3]],
        result: 2
    }, {
        routes: [[-2, -1], [1, 2], [-3, 0]],
        result: 2
    }, {
        routes: [[0, 0]],
        result: 1
    }, {
        routes: [[0, 0], [0, 2], [-10, 22], [1, 2]],
        result: 2
    }, {
        routes: [[-20, 15], [-20, -15], [-14, -5], [-18, -13], [-5, -3]],
        result: 2
    }, {
        routes: [[-20, 15], [-14, -5], [-18, -13], [-5, -3]],
        result: 2
    }, {
        routes: [[0, 10], [1, 10], [2, 3], [3, 5]],
        result: 1
    }, {
        routes: [[1, 2], [0, 10], [1, 10], [2, 3], [3, 5], [0, 100]],
        result: 2
    },
]


function solution(routes) {
    const sortRoutes = routes.sort((a, b) => a[0] - b[0])
    const cameras = []
    sortRoutes.forEach(([a, b]) => {
        for (let cameraIndex in cameras) {
            const [cameraA, cameraB] = cameras[cameraIndex]
            if (!(b < cameraA || cameraB < a)) {
                if (cameraA < a) cameras[cameraIndex][0] = a
                if (cameraB > b) cameras[cameraIndex][1] = b
                return
            }
        }
        cameras.push([a, b])
    })
    return cameras.length
}

testCase.forEach(({routes, result}, i) => {
    let check = solution(routes) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})