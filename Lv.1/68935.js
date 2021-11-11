// 3진법 뒤집기

function solution(n) {
    var answer = 0;
    // 10진법 => 3진법 => 배열 => 배열뒤집기 => 배열 합쳐 문자로
    n = n.toString(3).split('').reverse().join('')
    //3진법 문자 => 10진법 숫자
    return answer = Number.parseInt(n, 3);
}

solution(45)