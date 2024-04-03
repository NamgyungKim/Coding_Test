/*
🚩더 맵게 🚩
섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

😀순서
최소힙
- 가장작은값 2개 가져온 후 섞은 스코빌 지수 다시 힙에 넣기
- 섞을 때 마다 카운트

🚨 주의
마지막에 숫자가 하나 남았는데 해당 음식의 스코빌이 K보다 작을 경우.
- 모든 음식을 K보다 작게 만들 수 없을 경우 -1 return

⏳시간복잡도: O(NlogN)

🍭점수: 8 점
*/

let testCase = [
    [[1, 2, 3, 9, 10, 12], 7, 2],
    [[1, 1, 1, 1, 1, 1], 100, -1],
    [[1, 1, 1, 1, 1, 1], 1, 0],
    [[5, 2, 3, 1, 5, 2, 1], 10, 5]
]

class MinHeap {
    constructor() {
        this.heap = [];
    }

    #getParent(index) {
        if (index === 0) return null
        if (index % 2 === 0) {
            return (index - 2) / 2
        } else {
            return (index - 1) / 2
        }
    }

    #getChildren(index) {
        return {
            left: index * 2 + 1,
            right: index * 2 + 2
        }
    }

    #swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    setData(num) {
        this.heap.push(num)
        let index = this.heap.length - 1
        let parentIndex = this.#getParent(index)

        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            if (this.heap[parentIndex] > this.heap[index]) {
                this.#swap(parentIndex, index)
                index = parentIndex
                parentIndex = this.#getParent(index)
            }
        }
    }

    getData() {
        if (this.heap.length === 0) return null
        this.#swap(0, this.heap.length - 1)
        const result = this.heap.pop()
        let index = 0
        while (index <= this.heap.length - 1) {
            let {left, right} = this.#getChildren(index)
            const moreSmall = this.heap[right] ? this.heap[left] < this.heap[right] ? left : right : left

            if (this.heap[left] && moreSmall === left && this.heap[left] < this.heap[index]) {
                this.#swap(left, index)
                index = left
            } else if (this.heap[right] && moreSmall === right && this.heap[right] < this.heap[index]) {
                this.#swap(right, index)
                index = right
            } else {
                break
            }
        }
        return result
    }
}


function solution(scoville, K) {
    let mixCount = 0
    let Heap = new MinHeap()
    scoville.forEach((num) => Heap.setData(num))

    while (Heap.heap[0] < K) {
        if (Heap.heap.length < 2) {
            return -1
        }
        const num1 = Heap.getData()
        const num2 = Heap.getData()
        mixCount++
        Heap.setData(num1 + (num2 * 2))
    }
    return mixCount
}


testCase.forEach(([scoville, K, result], i) => {
    const answer = solution(scoville, K)
    let check = answer === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`내답: ${answer}`)
    console.log(`정답: ${result}`)
})