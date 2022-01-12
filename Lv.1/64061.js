// 크레인 인형뽑기 게임
function solution(board, moves) {
    let count = 0
    let answer = [];
    moves.forEach((move)=>{
        //인형 위치
        function position(j){//인형 꺼내기
            for(let i = 0; i < board.length; i++){ //깊이
                if(board[i][j] !== 0){
                    answer.push(board[i][j])
                    board[i][j] = 0
                    break
                }
            }
        }
        position(move-1)
        //인형제거
        if(answer[answer.length-1] == answer[answer.length-2] && answer.length > 1){
            answer.pop()
            answer.pop()
            count+=2
        }
    })
    return count;
}


console.log(solution1([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))
