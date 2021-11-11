// 문자열 다루기 기본

//s의 길이가 4혹은6 && 숫자로만 구성
function solution(s) {
    let answer = true;
    if(s.indexOf ("e") !== -1 ){
        answer = false
    }else if((Number(s)) && (s.length == 4 || s.length == 6)){
        answer = true
    }else{
        answer = false
    }
    return answer;
}

solution("6pi2")