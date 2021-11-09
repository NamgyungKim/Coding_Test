// 나누어 떨어지는 숫자 배열


// arr의 각 숫자를 divisor로 나누어 떨어지는 값을 오름차순으로 정렬

function solution(arr, divisor) {
    var answer = [];
		// 나누어서 떨어지면 answer에 push
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%divisor == 0){answer.push(arr[i])}
    }
		// 만약 나누어떨어지는 숫자가 없으면 answer=[-1] 을 줌
    if(answer == ''){answer=[-1]}
		// answer를 오름차순으로 정렬
    answer.sort(function(a,b){return a - b})
    console.log(answer)
    return answer;
}

solution([5, 9, 7, 10],19)