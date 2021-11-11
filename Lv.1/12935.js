// 제일 작은 수 제거하기(목요일)
function solution(arr) {
    let answer
    let error = [10]
    let small = Math.min.apply(null,arr) //가장 작은 수 찾기
    if ( arr.length == 0 ||  JSON.stringify(arr) == JSON.stringify(error) ){ 
        // 빈배열 or 배열이 같은지여부 확인
        answer = [-1]
    }else{
        answer = arr.filter((element) => element !== small) 
        // 가장 작은 수 배열에서 제거
    }
    return answer;
}
solution([10])

// 빈배열일 경우 -1 리턴
// 10일경우 -1 리턴
// 배열이 바뀌어도 안됨.!

//! 1. 배열 비교 JSON.stringify(arr) 외의 방법은 없을까?

//? 1. 다른 분들것들을 보니 splice(메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.)를 많이 사용하신다. filter을 안 써도 되었을듯 하다...;; splice사용할 쓰임이 많을듯 싶은데 사용법을 알아두는게 좋을 것 같다.

//? 2. filter는 특정 조건을 만족하는 새로운 배열이 필요할때 사용!!

//? 3. ... 은 뭐지? 다른분들 쓴 답중 (...arr)이라는 게 있는데 뭘뜻하는거지?
//? 내부 요소 하나 하나하나가 삽입 이라는데... 아직 사용방법을 잘 알지는 못하겠다.