/*
🚩가장 큰 수 🚩
주어진 숫자를 이어 붙어 만들 수 있는 가장 큰 수
부모값의 조건 (a,b와 비교했을 때)
- 자리수가 같을 경우 -> 큰 숫자
- 자리수가 다를 경우
    -> 같은 index 를 비교 했을 때 클 경우
    -> 하나의 자리 수가 작을 경우, 모자른 자리는 해당숫자의 첫자리로 대체해서 비교한다.

😀순서
최대힙
기준은 해당 문자열이 앞에 있을 때 큰 수로

🚨 주의
- 문자열로 return
- [0,0,0] 의 경우 답은 '0'


문제가 이상하다.
[1, 11, 110, 1110] -> "1111101110" 나와야 테스트가 성공하는데
1111110110 이게 맞는거 아닌가

⏳시간복잡도: O(nlogn)

🍭점수: ? 점
*/

let testCase = [
    {
        input: [6, 10, 2],
        result: '6210'
    },
    {
        input: [3, 30, 34, 5, 9],
        result: '9534330'
    },

    {
        input: [1, 0, 0, 0],
        result: '1000'
    },
    {
        input: [1, 100000, 10, 20, 0],
        result: '201101000000'
    },
    {
        input: [12, 1213],
        result: '121312'
    },
    {
        input: [5432, 543254328, 543],
        result: '5435432543285432'
    },
    {
        input: [0, 0, 0],
        result: '0'
    },
    {
        input: [1, 11, 110, 1110],
        result: '1111110110'
    },

]

class MaxHeap {
    constructor() {
        this.heap = []
    }

    #swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    #getParentIndex(index) {
        if (index === 0) return null
        if (index % 2 === 0) {
            return (index - 2) / 2
        }
        return (index - 1) / 2
    }

    #getRightChildrenIndex(index) {
        return index * 2 + 2
    }

    #getLeftChildrenIndex(index) {
        return index * 2 + 1
    }

    #swapCondition(a, b) {
        let aStr = this.heap[a]?.toString() ?? '0'
        let bStr = this.heap[b]?.toString() ?? '0'
        let forNum = Math.max(aStr.length, bStr.length)
        for (let i = 0; i < forNum; i++) {
            const parent = aStr[i % aStr.length]
            const children = bStr[i % bStr.length]
            if (parent > children) {
                return false
            } else if (parent < children) {
                return true
            }
        }
        return aStr.length >= bStr.length;
    }

    #bubbleUp() {
        let index = this.heap.length - 1
        let parent = this.#getParentIndex(index)

        while (!!index) {
            if (!this.#swapCondition(parent, index)) break
            this.#swap(index, parent)
            index = parent
            parent = this.#getParentIndex(index)
        }
    }

    #bubbleDown() {
        let index, leftChildrenIndex, rightChildrenIndex, leftChildren, rightChildren
        const setData = (setIndex) => {
            index = setIndex
            leftChildrenIndex = this.#getLeftChildrenIndex(index)
            rightChildrenIndex = this.#getRightChildrenIndex(index)
            leftChildren = this.heap[leftChildrenIndex]
            rightChildren = this.heap[rightChildrenIndex]
        }
        setData(0)
        while (typeof leftChildren === 'number') {
            if (leftChildren && this.#swapCondition(rightChildrenIndex, leftChildrenIndex) && this.#swapCondition(index, leftChildrenIndex)) {
                this.#swap(index, leftChildrenIndex)
                setData(leftChildrenIndex)
            } else if (rightChildren && this.#swapCondition(leftChildrenIndex, rightChildrenIndex) && this.#swapCondition(index, rightChildrenIndex)) {
                this.#swap(index, rightChildrenIndex)
                setData(rightChildrenIndex)
            } else {
                break
            }
        }
    }

    setData(data) {
        this.heap.push(data)
        this.#bubbleUp()
    }

    getData() {
        if (this.heap.length === 0) return null
        this.#swap(0, this.heap.length - 1)
        const result = this.heap.pop()
        this.#bubbleDown()
        return result
    }


}


function solution(numbers) {
    const result = []
    const maxHeap = new MaxHeap()
    numbers.forEach((num) => {
        maxHeap.setData(num)
    })
    while (maxHeap.heap.length) {
        result.push(maxHeap.getData())
    }

    return result[0] === 0 ? '0' : result.join('')
}

testCase.forEach(({input, result}, i) => {
    let check = solution(input) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})