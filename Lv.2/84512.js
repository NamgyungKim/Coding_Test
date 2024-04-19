/*
🚩모음사전 🚩
- 'A', 'E', 'I', 'O', 'U' 로만되어있는 영어사전이 있다.
- 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.
주어진 단어가 몇번째 단어인지 맞추시오.

😀순서
- 뒤에 공간이 남으면 A 가 들어간다.
- 맨 뒤에 U가 들어오면 다음 단어는 뒤에 있는 U들은 다 제거 된다.

🚨 주의:

⏳시간복잡도: O(n^5) 쯤..?

🍭점수: 1 점 ㅎㅎㅎ
*/

let testCase = [
    {
        word: "AAAAE",
        result: 6
    },
    {
        word: "AAAE",
        result: 10
    },
    {
        word: "I",
        result: 1563
    },
    {
        word: "EIO",
        result: 1189
    },
]


function solution(word) {
    let count = 0;
    const spells = {
        'A': 1,
        'E': 2,
        'I': 3,
        'O': 4,
        'U': 5
    }
    let transform = [...word].map((w) => spells[w]).join('')
    let dictionary = ''


    while (dictionary !== transform) {
        // while (count < 20) {
        count++
        if (dictionary.length < 5) {
            // 길이가 5보다 작으면 뒤에 1 추가
            dictionary += '1'
            continue
        }
        if (dictionary[4] === '5') {
            // 뒤에 있는 5 다 제거
            dictionary = dictionary.replace(/5+$/g, "");
        }
        dictionary = (+dictionary + 1).toString()

    }
    return count;
}

testCase.forEach(({word, result}, i) => {
    let check = solution(word) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})