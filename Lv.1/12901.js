// 2016년

// 달의 첫 요일 = (month+6)%7
function solution(a, b) {
    let answer = '';
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let month = [31,29,31,30,31,30,31,31,30,31,30,31]
    let first = [5]
    for(let i = 1; i < 12; i++){
        first.push((month[i-1]+first[i-1])%7)
    }
    if((b+first[a-1])%7-1 == -1){
        answer = 'SAT'
    }else{
        answer =  week[(b+first[a-1])%7-1]
    }
    return answer 
}

solution(12,31)