//시저 암호

function solution(s, n) {
    let arr = s.split("")
    let answer = arr.map((str, i)=>{
        let a = n
        let ascii = s.charCodeAt(i) // 아시키 코드
        if(str === " ") return ' ' // 공백처리
        // n을 더했을때 다시 a로 돌아가야할 경우.
        if((ascii + n > 122)||(ascii + n > 90 && ascii <= 90)) a -= 26 
        return String.fromCharCode(s.charCodeAt(i)+a)
    })
    return answer.join('')
}
console.log(solution("a B z",1))