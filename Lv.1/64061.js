//크레인 인형뽑기 게임
function solution(board, moves) {
    let count = 0
    let answer = [];
    for(let j = 0 ; j < moves.length; j++){ //좌우
        //인형 위치
        function position(j){
            for(let i = 0; i < board.length; i++){ //깊이
                if(board[i][j] !== 0){
                    answer.push(board[i][j])
                    board[i][j] = 0
                    break
                }
            }
        }
        position(moves[j]-1)
        console.log(board)
        console.log(answer)
        //인형제거
        if(answer[answer.length-1] == answer[answer.length-2] && answer.length > 1){
            console.log('터짐'+ answer[answer.length-1])
            console.log('터짐'+ answer[answer.length-2])
            answer.pop()
            answer.pop()
            count+=2
        }
    }
    return count;
}

console.log(solution([
    [0,0,0,0,0,4],
    [0,0,1,0,3,3],
    [0,2,5,0,1,5],
    [0,2,4,4,2,2],
    [0,5,1,3,1,2],
    [0,5,1,3,1,2]
 ],[1,1,1,1,1,1,1,1,1]))

let arr = [
   [0,0,0,0,0,4,2],
   [0,0,1,0,3,3,5],
   [0,2,5,0,1,5,4],
   [4,2,4,4,2,2,2],
   [3,5,1,3,1,2,2],
   [3,5,1,3,1,2,2],
   [3,5,1,3,1,2,2],
   [3,5,1,3,1,2,2]
]