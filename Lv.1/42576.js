// 완주하지 못한 선수

function solution(participant, completion) {
    let answer = '';
    for(let i=0; i<participant.length;i++){
      if(participant.indexOf(completion[0]) === -1){
        answer = participant[0]
        break
      }else{
        participant.shift()
      }
    }
    return answer;
  }