// 나머지가 1이 되는 수 찾기

function solution(n) {
    for(let i = 0; i < n ;i++){
        if(n%i == 1){
            return i
        }
    }
}

solution(10)