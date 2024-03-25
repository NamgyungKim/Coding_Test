/*
🚩베스트앨범 🚩
장르별로 2개씩 선정
속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

😀순서

1. for를 돌며, 장르별 노래 재생수, 장르에서 가장 많이 재생된 노래2개의 index를 가져온다.

🚨 주의

⏳시간복잡도: O(3n)

🍭점수: 8
*/

function solution(genres, plays) {
    let genresPlay = {}
    genres.forEach((genre, index) => {
        if (genresPlay[genre]) {
            setGenresPlayNum(genre, index)
            setGenresPlayMax(genre, index)
        } else {
            setFirestData(genre, index)
        }
    })

    const genreNum = []
    Object.keys(genresPlay).forEach((genre) => {
        genreNum.push(genresPlay[genre])
    })
    return genreNum.sort((a, b) => b.num - a.num).map(({max}) => max).flat()

    function setFirestData(genre, index) {
        genresPlay[genre] = {
            num: plays[index],
            max: [index]
        }
    }

    function setGenresPlayNum(genre, index) {
        genresPlay[genre].num = genresPlay[genre].num + plays[index]
    }

    function setGenresPlayMax(genre, index) {
        if (genresPlay[genre].max.length === 1) {
            const firstIndex = genresPlay[genre].max[0]
            if (plays[firstIndex] > plays[index]) {
                genresPlay[genre].max.push(index)
            } else {
                genresPlay[genre].max.unshift(index)
            }
        } else {
            const firstIndex = genresPlay[genre].max[0]
            const secondIndex = genresPlay[genre].max[1]

            if (plays[firstIndex] < plays[index]) {
                genresPlay[genre].max.pop()
                genresPlay[genre].max.unshift(index)
            } else if (plays[secondIndex] < plays[index] || plays[firstIndex] === plays[index]) {
                genresPlay[genre].max.pop()
                genresPlay[genre].max.push(index)
            }
        }
    }
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));