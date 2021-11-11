// 하드샤의 수
function solution(x) {
    let answer = true;
    let num = 0
    x = String(x)
    for(let i = 0; i<x.length; i++){
        num += Number(x[i])
    }
    x%num==0? answer=true: answer=false
    return answer;
}

solution(10)