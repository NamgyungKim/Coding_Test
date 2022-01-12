// K번째 수

function solution(array, commands) {
  return commands.map((element) => {
    const newArray = [...array.slice(element[0]-1,element[1])]
    return newArray.sort((a,b)=>a-b)[element[2]-1]
  });
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))