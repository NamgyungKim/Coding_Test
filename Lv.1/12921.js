function solution(n) {
    var answer = 0;
    let arr = Array.from({length: n}, () => false)

    for(let i = 2; i <= Math.sqrt(n); i++){
        for(let j = 2; i <= n/2; i++){
            if(i <= n){
                arr[i*j] = true
            }
        }
    }
    console.log(arr)
    return answer;
}

console.log(solution(10))