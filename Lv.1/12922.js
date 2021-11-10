// 수박수박수박

function solution(n) {
    let answer = '';
    for(let i = 0; i< n; i++){
        i%2 == 0 ? answer+='수': answer+='박'
    }
    console.log(answer)
    return answer;
}

solution(4)