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
            //약수 구하기
            if(i%j==0){
                factors_num += 1
            }
            // num_1
            // factors가 짝수인지 홀수인지.
            if(i==j && factors_num%2 == 0){
                answer += i
            }else if(i==j && factors_num%2 == 1){
                answer -= i
            }
        }
    }
    return answer;
}

solution(13,17)


// num_1에서 코드를 더 줄일 수 있었는데...;; 생각을 못했다.
// if (factors_num % 2) answer -= i
// else answer += i
