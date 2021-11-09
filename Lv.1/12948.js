// 휴대폰 번호 가리기
function solution(phone_number) {
    let answer = ''
    let star = ''
    for(let i = 0; i < phone_number.length-4; i++){ star += '*'}
    answer = phone_number.substr(phone_number.length-4,phone_number.length)
    return answer = star+answer;
}

// 이게.. 최선인가?