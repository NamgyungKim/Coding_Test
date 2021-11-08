// 가운데 글자 가져오기

function solution(s) {
  let answer = ''
  if (s.split('').length % 2 == 1) {
    answer = s.split('')[Math.floor(s.split('').length / 2)]
  } else {
    answer = s.split('')[s.split('').length / 2 - 1]
    answer += s.split('')[s.split('').length / 2]
  }
  return answer
}

// substr을 사용했으면 더 줄어들었을텐데...;;
