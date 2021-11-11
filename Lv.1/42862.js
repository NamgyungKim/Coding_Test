//체육복

function solution(n, lost, reserve) {
    let student = Array.from({length: n}, ()=>1)
    for(let i=0; i < lost.length; i++ ){
        student[lost[i]-1]--
    }
    for(let i=0; i < reserve.length; i++ ){
        student[reserve[i]-1]++
    }
    for(let i=0; i < n ; i++){
        console.log(student)
      if(student[i]===0 && student[i-1]==2){
        student[i]++
        student[i-1]--
      }else if(student[i]===0 && student[i+1]==2){
        student[i]++
        student[i+1]--
      }
    }
    return n-student.filter(element => 0 === element).length
}

solution(5,[2,4],[1,3,5])

//직관
