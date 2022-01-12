// 포켓몬

function solution(nums) {
  // 포켓몬 종류
  const PoketmonType  = nums.filter((Pokemon, index)=>{
    return nums.indexOf(Pokemon) === index;
  }).length
  return Math.min(nums.length/2, PoketmonType);
}

console.log(solution([3,3,3,2,2,4]))