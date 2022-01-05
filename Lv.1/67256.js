//[카카오 인턴] 키패드 누르기
function po (n) { // 키 위치 반환
    let btn = [[1,2,3],[4,5,6],[7,8,9],[null,0,null]]
    for(let i = 0; i < 4 ; i++){
        for(let j = 0; j < 3; j++ ){
            if(n == btn[i][j]){ return [i,j] }
        }
    }
}

function len([a,b],[c,d]){ //거리 계산
    return Math.abs(a-c)+Math.abs(b-d)
}

function solution(numbers, hand) {
    let hands = [[3,0],[3,2]] //기본 위치
    let answer = ''
    let right_hand = (num) => { //오른손으로 눌렀을때
        answer += "R"
        hands[1] = po(numbers[num])
    }
    let left_hand = (num) => { //오른손으로 눌렀을때
        answer += "L"
        hands[0] = po(numbers[num])
    }
    numbers.forEach((num, i)=>{
        if(num == 1 || num == 4 || num == 7){
            left_hand(i)
        }else if(num == 3 || num == 6 || num == 9){
            right_hand(i)
        }else if(len(hands[1],po(num)) == len(hands[0],po(num)) ){
            (hand[0]=='r') ? right_hand(i) : left_hand(i)
        }else if(len(hands[1],po(num)) > len(hands[0],po(num))){
            left_hand(i)
        }else{
            right_hand(i)
        }
    })
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"))

