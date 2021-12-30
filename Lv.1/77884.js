// 약수의 개수와 덧셈

// left와 right 사이의 수의 각각의 약수들을 구하고
// 약수의 갯수가 짝수일 경우 는 다 더하고
// 약수의 갯수가 홀수일 경우 는 다 뺀다.

function solution(left, right) {
    let answer = 0;
    
    // left에서 right까지의 숫자들  
    for(let i=left; i <= right; i++){
        let factors_num = 0 // 약수의 갯수 
        for(let j = 0; j <= i; j++){
            if(i%j==0) factors_num ++
        }
        factors_num%2 == 0 ? answer+=i : answer-=i
    }
    return answer;
}

console.log(solution(13,17))