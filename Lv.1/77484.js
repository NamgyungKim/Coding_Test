function solution(lottos, win_nums) {
  let zero = 0
  let min = 7
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      lottos[i] === win_nums[j] ? min-- : console.log()
    }
    lottos[i] === 0 ? zero++ : console.log()
  }
  let max = min - zero
  min > 6 ? (min = 6) : {}
  max > 6 ? (max = 6) : {}
  let answer = [max, min]
  return answer
}

// filter
