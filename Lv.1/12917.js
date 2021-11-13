// 문자열 내림차순으로 배치하기

function solution(s) {
    return s.split("").sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
      }).join('');
}

console.log(solution("Zbcdefg"))