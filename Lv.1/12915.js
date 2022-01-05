//문자열 내 마음대로 정렬 하기

function solution(strings, n) {
    strings.sort()
    return strings.sort((a,b)=>{ return a[n] < b[n] ? -1 : 0 });
}

console.log(solution(["sun", "bed", "car"],1))
console.log(solution(["abce", "abcd", "cdx"],2))