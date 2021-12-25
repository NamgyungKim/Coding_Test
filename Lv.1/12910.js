// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  // 각배열의 값 % divisor == 0 인것들만 answer 배열로 반환
  let answer = arr.filter((num)=> num%divisor === 0)
  return answer == '' 
  // 빈배열이면 [-1] 반환
  ? [-1] 
  // 빈배열이 아니면 answer을 오름차순으로 반환
  : answer.sort(function(a,b){return a - b})
}
