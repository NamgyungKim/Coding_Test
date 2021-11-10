// 이상한 문자 만들기

// 단어는 공백으로 구분
// 짝수번째 알파뱃은 대문자, 홀수번째는 소문자
function solution(s) {
    let answer = '';
    s = s.split(' ')
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s[i].length; j++){
            j%2 == 0 ? answer+= s[i][j].toUpperCase() : answer+=s[i][j].toLowerCase()
        }
        if(i!==s.length-1){answer+= " "} //마지막 공백 제거
    }
    return answer;
}

solution("try hello world")

console.log("TrY HeLlO WoRlD")