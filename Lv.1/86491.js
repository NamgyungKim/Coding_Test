// 최소직사각형

function solution(sizes) {
    let answer = 0;
    let v = [] // 가로
    let h = [] // 세로
    for(let i = 0 ; i < sizes.length; i++){
        // 큰값을 v로 작은값을 h로
        if(sizes[i][0] > sizes[i][1]) {
            v.push(sizes[i][0])
            h.push(sizes[i][1])
        }else{
            v.push(sizes[i][1])
            h.push(sizes[i][0])
        }
    }
    // 각 배열 v와 h에서의 최대값을 곱해줌
    return answer = Math.max.apply(null,v)*Math.max.apply(null,h);
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])