// 정수 내림차순으로 배치하기

function solution(n) {
    var answer = 0;
    //문자->배열->오름차순->문자->숫자
    return answer=(Number(String(n).split('').sort((a,b) => b-a).join('')))
}

solution(118372)