/*
🚩우선순위큐 🚩

😀순서

🚨 주의

⏳시간복잡도:

🍭점수:  점
*/

let testCase = [
    {
        input: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
        result: [0, 0]
    },
    {
        input: ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
        result: [333, -45]
    },
]

class Heap {
    constructor() {
        this.heap = []
    }

    #swap(indexA, indexB) {
        [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]]
    }

    #getLeftChildrenIndex(index) {
        return index * 2 + 1
    }

    #getRightChildrenIndex(index) {
        return index * 2 + 2
    }

    #bubleDown() {
        let index = 0
        let i = 0
        while (i < 10) {
            i++
            const indexData = this.heap[index]
            const leftIndex = this.#getLeftChildrenIndex(index)
            const rightIndex = this.#getRightChildrenIndex(index)
            const leftData = this.heap[leftIndex]
            const rightData = this.heap[rightIndex]
            if (!leftData) break
            if (leftData && indexData <= leftData) {
                this.#swap(index, leftIndex)
                index = leftIndex
            } else if (rightData && indexData <= rightData) {
                this.#swap(index, rightIndex)
                index = rightIndex
            } else {
                break
            }

        }
    }

    setData(data) {
        this.heap.unshift(data)
        this.#bubleDown()
        console.log(this.heap)
    }

    getMaxData() {
        return this.heap.shift()
    }

    getMinData() {
        return this.heap.pop()
    }
}


function solution(operations) {
    const heap = new Heap()
    // operations.forEach(action => {
    //     const [command, num] = action.split(' ')
    //     switch (command) {
    //         case 'I':
    //             heap.setData(Number(num))
    //             break;
    //         case 'D':
    //             if (num === '-1') {
    //                 heap.getMinData()
    //             } else if (num === '1') {
    //                 heap.getMaxData()
    //             }
    //             break;
    //     }
    // })

    heap.setData(2)
    heap.setData(6)
    heap.setData(1)
    heap.setData(-20)
    heap.setData(-20)
    heap.setData(70)
    heap.setData(-20)
}

testCase.forEach(({input, result}, i) => {
    let check = solution(input) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})