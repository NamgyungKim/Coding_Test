//자릿수 더하기

function solution(n){
    var answer = []
    n = String(n) //숫자를 바로 배열로 바뀌는게 안보임 그래서 숫자->문자로 바꿈
    for(let i = n.length-1; i >= 0; i--){
        // 뒤에서부터 돌면서 문자를 숫자로바꾸며 푸쉬
        answer.push(Math.round(n[i]))
    }
    return answer;
}

solution(123)