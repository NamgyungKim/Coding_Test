// 같은 숫자는 싫어

function solution(arr){
    // 바로 이전의 배열과 비교 후 다르면 return
    return arr.filter((num, index) => arr[index-1] !== num)
}

console.log(solution([1,1,3,3,0,1,1]))