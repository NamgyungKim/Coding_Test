/*
🚩퍼즐조각 채우기 🚩

포즐조각과 게임보드에 넣을 수 있는 같은 쉐입 짝맞추기
퍼즐 모양은 회전 가능.
? 회전도 가능한 모형을 어떻게 나타내야할까...
1. 게임보드의 구멍과 조각의 모양들을 다 따자.
2. 각각의 구멍과 조각모양들의 부피를 따져서 같은 부피이면 비교시작 아닐경우 그냥 다음으로 넘김.
3. 비교 시작 비교후 틀리면 모양틀 회전해가며 비교

블록은 부피별로 구분해서 정리.



🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        game_board: [[1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 0, 0]],
        table: [[1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0]],
        result: 14
    }, {
        game_board: [[0, 0, 0], [1, 1, 0], [1, 1, 1]],
        table: [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
        result: 0
    },
]

class Block {
    constructor() {
        this.block = {}
    }


    setData(board = [], color = 0) {
        for (let y = 0; y < board.length; ++y) {
            for (let x = 0; x < board[0].length; ++x) {
                const block = []
                if (board[y][x] === color) {

                }
            }
        }
    }
}

function solution(game_board, table) {
    const answer = 2

    const gameBoard = new Block()
    gameBoard.setData(game_board, 0)


    return answer;
}

testCase.forEach(({game_board, table, result}, i) => {
    let answer = solution(game_board, table)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})