//두개 뽑아서 더하기

function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length ; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    return [...new Set(answer)].sort((a,b)=>{return a-b});
}

console.log(solution([2,1,3,4,1]))



// function solution(numbers) {
//     let answer = [];
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = i+1; j < numbers.length ; j++){
//             answer.includes(numbers[i]+numbers[j])? '':answer.push(numbers[i]+numbers[j])
//         }
//     }
//     return answer.sort((a,b)=>{return a-b});
// }