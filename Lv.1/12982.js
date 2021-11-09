// 예산

// 지원신청한 금액을 정확히 지원해야함
// d = 신청 금액 , budget = 예산
// 최대 지원할 수 있는 부서의 수 return
function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>(a-b))
    for(let i = 0; i < d.length; i++){
        budget -= d[i]
        if(budget < 0){
            return answer = i
        }
    }
    return answer = d.length;
}

console.log(solution([2,5,2,2,3,3],0))