// 부족한 금액 계산하기

// price = 이용료
// 이용료는 증가 => 이용료 * n
// 처음이용 = price , 2번째 = price*2 ...
// money = 갖고있는 금액
// count = n번 이용

// 순서
//1. 필요한 금액(need) 계산 => 필요 금액 += (n*이용료)
//2. 현재 갖고있는금액과 필요한 금액의 차를 구한다.
function solution(price, money, count) {
    let answer = -1
    let need = 0
    for(let i = 1; i <= count; i++){
        need += i*price
    }
    need-money < 0?answer = 0:answer = need-money
    return answer;
}

solution(3,20,4,10)