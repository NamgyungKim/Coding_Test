// 최소직사각형

function solution(sizes) {
    let v = [] // 가로
    let h = [] // 세로
    // 큰값을 v로 작은값을 h로
    sizes.forEach((item,i)=>{
        sizes[i].sort((a,b)=>b-a)
        v.push(item[0])
        h.push(item[1])
    })
    // 각 배열 v와 h에서의 최대값을 곱해줌
    return Math.max(...v)*Math.max(...h);
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])==4000)
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])==120)
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])==133)