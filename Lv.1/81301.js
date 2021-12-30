// 숫자 문자열과 영단어

function solution(s) {
    let text = ["zero","one","two","three","four","five","six","seven","eight","nine"] 
    text.forEach((element,index) => {
        s = s.replace(RegExp(element,"g"),index)
    });
    return Number(s)
}

console.log(solution("one4seveneight"))