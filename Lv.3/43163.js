/*
🚩단어변환 🚩

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        begin: "hit",
        target: "cog",
        words: ["hot", "dot", "dog", "lot", "log", "cog"],
        result: 4
    }, {
        begin: "hit",
        target: "cog",
        words: ["hot", "dot", "dog", "lot", "log"],
        result: 0
    },
]


function solution(begin, target, words) {
    let visited = Object.fromEntries(words.map((word) => [word, 0]));
    let path = [begin];

    while (path.length > 0) {
        let currentWord = path.shift();

        const neighbors = words.filter(
            (word) => checkDiffOnlyOneOut(currentWord, word) && visited[word] === 0,
        );

        if (currentWord === target) {
            return visited[currentWord];
        }

        for (let i = 0; i < neighbors.length; i++) {
            if (visited[neighbors[i]] === 0) {
                const prevStep = visited[currentWord] || 0;
                visited[neighbors[i]] = prevStep + 1;
                path.push(neighbors[i]);
            }
        }
    }

    return 0;
}

const checkDiffOnlyOneOut = (word, diffWord) => {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === diffWord[i]) count++;
    }

    return count === word.length - 1;
};

testCase.forEach(({begin, target, words, result}, i) => {
    let answer = solution(begin, target, words)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
    console.log(`내답: ${answer}`)
})