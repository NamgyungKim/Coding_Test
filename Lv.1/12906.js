// 같은 숫자는 싫어
function solution(arr){
    var answer = [];
    for(let i = 0; i<arr.length; i++){
        // answer배열의 맨 마지막 값과 arr[i]값이 같은가?
        // 같지않으면 arr[i] push
        if(answer[answer.length-1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    return answer;
}

solution([1,1,3,3,0,1,1])