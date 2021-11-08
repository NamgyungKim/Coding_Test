// 없는 숫자 더하기

// numbers에는 1~9까지의 숫자가 배열에 들어감
// 배열의 모든 숫자가 다름
// 이중에 없는 숫자들끼리 더하기

function solution(numbers) {
  let answer = 0
  for (let i = 0; i < 10; i++) { //1부터 9까지 for
    // 1부터 9까지 numbers에 있는 값인지 보면서 
    // numbers에 없는 값이면 answer에 더해줌!
    //? indexOf()는 값이 없으면 -1 반환, 있으면 index
    numbers.indexOf(i) == -1 ? (answer += i) : '' 
  }
  return answer
}


solution([1,2,3,4,6,7,8,0])
// 5,9
// 5+9 = 14
solution([5,8,4,0,6,7,9])
// 1,2,3
// 1+2+3 = 6