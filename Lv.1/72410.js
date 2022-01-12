// 신규 아이디 추천


function solution(new_id) {
  // new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  new_id = new_id.toLowerCase()
  // new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  .replace(/[^-._0-9a-z]/g,'')
  // new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  .replace(/\.{2,}/g,'.')
  // new_id에서 마침표(.)가 처음에 위치한다면 제거합니다.
  .replace(/^\./,'')
  // new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  .match(/.{0,15}/)[0]
  // new_id에서 마침표(.)가 마지막에 위치한다면 제거합니다.
  .replace(/\.{1,}$/g,'')
  // new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  .replace(/^$/,'a')

  // new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  return new_id.length < 3 
  ? (new_id + new_id.substr(-1) + new_id.substr(-1)).match(/.{3}/)[0] 
  : new_id
}

console.log(solution("z-+.^."))
