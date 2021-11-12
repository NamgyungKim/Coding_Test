// 모의고사

function solution(answers) {
    let answer = [];
    let score = [0,0,0] //점수표
    //학생들의 답
    let student = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    for(let i = 0 ; i < 3; i++){
        for(let j = 0; j < answers.length; j++){
            if(answers[j] == student[i][j%student[i].length]){
                score[i] += 1
            }
        }
    }
    //점수표에서 가장 높은 점수를 받은 학생 찾기
   for(let i = 0; i < score.length ; i++){
       score[i] == Math.max(...score) ? answer.push(i+1) : ''
   }
   console.log(answer)
return answer;
}
