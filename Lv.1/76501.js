// 음양 더하기

function solution(absolutes, signs) {
    let answer = 0
    for(let i = 0; i<absolutes.length;i++){
        if(signs[i]==false){absolutes[i]=absolutes[i]*-1}
        answer += absolutes[i]
    }
    return answer;
}
