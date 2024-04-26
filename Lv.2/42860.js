/*
🚩조이스틱 🚩
방향의 경우는 2가지
1. 정방향으로 쭉 가거나,
2. 정방향으로 가다가 뒤로 가거나.
어느 포인트에서 뒤로 갈지만 판단하면 될듯.
1. 번방식은 쭉 가다가 12 앞 S에서 멈추면 될 것 같다.
2. ASDFAAAASDFSAAA 가 있을 경우 뒤로 갈 포인트는 [0,4,12]에서 뒤로 가보면 될 것 같다.
name 에 A 가 없다면 답은 무조건 정방향으로 가는 방식이 답이다.


😀순서

🚨 주의
- length -1 부터 가느경우도 있음.

⏳시간복잡도: O(4n)

🍭점수: 18 점
*/

let testCase = [
    {
        name: "JEROEN",
        result: 56
    }, {
        name: "JAN",
        result: 23
    }, {
        name: "JEROENAA",
        result: 56
    }, {
        name: "JAAAAAAAN",
        result: 23
    }, {
        name: "AAJEROENAAAA",
        result: 58
    }, {
        name: "AA",
        result: 0
    }, {
        name: "BAABBAAA",
        result: 7
    }, {
        name: "AAB",
        result: 2
    }, {
        name: "AAAAABBAAAAAAABAAA",
        result: 16
    }, {
        name: "BABAB",
        result: 6
    },
    {
        name: "BBBAAAB",
        result: 8
    },

]


const Alphabet = {
    "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12,
    "N": 13, "O": 12, "P": 11, "Q": 10, "R": 9, "S": 8, "T": 7, "U": 6, "V": 5, "W": 4, "X": 3, "Y": 2,
    "Z": 1
}

function solution(name) {

    let answer = 0; // 움직인 숫자
    const aPoint = []; // 뒤로 갈 포인트
    const {length} = name

    const changeAlphabetToNum = name.split('').map((alphabet, i) => {
        if (alphabet === 'A' && (i !== 0 && name[i - 1] !== 'A' || i === 0)) {
            aPoint.push([i])
        }
        if (alphabet === 'A' && (i + 1 !== length && name[i + 1] !== 'A' || i === name.length - 1)) {
            aPoint[aPoint.length - 1].push(i)
        }
        answer += Alphabet[alphabet]
        return Alphabet[alphabet]
    })

    if (answer === 0) return 0

    // A가 없는 경우
    if (aPoint.length === 0) {
        return answer + length - 1
    }

    // caseOne 로 이동할 경우.
    let caseOne = 0
    const last = aPoint[aPoint.length - 1]
    if (last[1] === length - 1) {
        caseOne = length - last[1] + last[0] - 2
    } else {
        caseOne = length - 1
    }

    // 처음 간만큼 더 앞으로 가야함.
    let caseTwo = Infinity;
    aPoint.forEach(([st, ed]) => {
        const turn = length - ed - 1 + Math.max(st - 1, 0) * 2
        if (caseTwo > turn) caseTwo = turn
    })

    let caseThree = Infinity;
    aPoint.forEach(([st, ed]) => {
        const turn = (length - ed) * 2 - 2 + Math.max(st - 1, 0)
        if (caseTwo > turn) caseThree = turn
    })


    return answer + Math.min(caseTwo, caseOne, caseThree);
}

testCase.forEach(({name, result}, i) => {
    let check = solution(name) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})