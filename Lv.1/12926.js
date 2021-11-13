//시저 암호

function solution(s, n) {
    let answer = [];
    for(let i = 0; i< s.length; i++){
        if(s.charCodeAt(i)+n > 122){
            let a = n - 26
            answer.push(String.fromCharCode(s.charCodeAt(i)+a))
        }else if(s.charCodeAt(i)+n>90 && s.charCodeAt(i)<=90){
            let b = n - 26
            answer.push(String.fromCharCode(s.charCodeAt(i)+b))
        }else if(s[i] == ' '){
            answer.push(' ')
        }else{
            answer.push(String.fromCharCode(s.charCodeAt(i)+n))
        }
    }
    console.log(answer.join(''))
    return answer.join('');
}
solution("z",1)