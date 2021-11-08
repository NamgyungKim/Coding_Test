// 두 정수 사이의 합

function solution(a, b) {
    var answer = 0;
    if(a>b){[a,b]=[b,a]} // b가 a보다 클시 a와 b의 값 변경
    for(let i = a; i <= b; i++){
        answer += i
    }
    return answer;
}