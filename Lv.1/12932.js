//자연수 뒤집어 배열로 만들기


function solution(n)
{
    var answer = []
    n = String(n) 
    for(let i = n.length-1; i >= 0; i--){
        answer.push(Math.round(n[i]))
    }
    return answer;
}

solution(12345)