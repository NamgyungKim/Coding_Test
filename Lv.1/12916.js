// 문자열 내 p와 y의 개수

function solution(s){
    var answer = true;
    s = s.split('')
    let p = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p++
        }else if(s[i] == 'y' || s[i] == 'Y'){
            p--
        }
    }
    return answer != Boolean(p);
}

solution("pPoooyY")