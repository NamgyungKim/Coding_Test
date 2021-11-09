// 행렬의 덧셈

//두 행렬의 같은 자리의 숫자 더하기
function solution(arr1, arr2) {
    let answer = arr1; // 크기 같도록
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j <arr1[i].length; j++){
            //answer[0][0] = arr1[0][0] + arr2[0][0]
            //answer[0][1] = arr1[0][1] + arr2[0][1]
            //answer[1][0] = arr1[1][0] + arr2[1][0]
            //answer[1][1] = arr1[1][1] + arr2[1][1]
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}

solution([[1,2],[2,3]],	[[3,4],[5,6]])