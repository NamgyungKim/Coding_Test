/*
🚩디스크 컨트롤러 🚩
요청부터 처리 종료까지 걸리는 시간 평균을 가장 작게 했을 때의 값

평균값 공식
[... + (작업기간 + 작업대기시간 - 작업 요청시간]/n
결국 한작업 한작업을 그냥 최대한 빨리끝내야 평균값이 작아진다.
우선순위는 요청된작업들 중 t 시간에서 가장 빠르게 끝낼 수 있는 작업이다.
고로 (작업시간 + 작업시작시간)의 값이 가장 작은 값이다.
현시간은 한개의 프로세스가 끝날 때마다 계산되어 올라간다.

😀순서
현시간 t = 0 으로 시작
1. 작업 목록 중 이미 요청된 작업들을 최소힙에 넣어준다.
2. 힙에서 가장 빠르게 작업이 끝나는 애들을 가져와서 작업시간을 구해준다.
3. 마지막에 평균구하기


🚨 주의
소수점 이하는 제거

⏳시간복잡도: ??시간복잡도 뭐라해야하지?
while(N) * Heap(NlogN) = O(N^2 logN) ?? ㅇㅁㅇ

🍭점수: 10 점
*/

let testCase = [
    {
        input: [[0, 3], [1, 9], [2, 6]],
        result: 9
    },
    {
        input: [[1, 4], [4, 1]],
        result: 3
    },
    {
        input: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
        result: 3
    },
]

class MinHeap {
    constructor() {
        this.heap = []
    }

    #getParent(index) {
        if (index === 0) return null
        return index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2
    }

    #getChildren(index) {
        let {length} = this.heap
        return {
            left: index * 2 + 1 >= length ? null : index * 2 + 1,
            right: index * 2 + 2 >= length ? null : index * 2 + 2
        }
    }

    #swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    setData(data) {
        this.heap.push(data)
        let index = this.heap.length - 1
        let parentIndex = this.#getParent(index)
        while (this.heap[parentIndex] && this.heap[parentIndex][1] > this.heap[index][1]) {
            this.#swap(parentIndex, index)
            index = parentIndex
            parentIndex = this.#getParent(index)
        }
    }

    getData() {
        if (this.heap.length === 0) return null
        this.#swap(0, this.heap.length - 1)
        const result = this.heap.pop()
        let index = 0
        while (index <= this.heap.length - 1) {
            let {left, right} = this.#getChildren(index)
            const moreSmall = this.heap[right] ? this.heap[left][1] < this.heap[right][1] ? left : right : left
            if (this.heap[left] && moreSmall === left && this.heap[left][1] < this.heap[index][1]) {
                this.#swap(left, index)
                index = left
            } else if (this.heap[right] && moreSmall === right && this.heap[right][1] < this.heap[index][1]) {
                this.#swap(right, index)
                index = right
            } else {
                break
            }
        }
        return result
    }
}


function solution(jobs) {
    let {length} = jobs
    let t = 0
    let sumWorkTime = 0
    const Heap = new MinHeap()
    do {
        jobs = jobs.filter(([st, work]) => {
            if (st <= t) {
                Heap.setData([st, work])
                return false
            }
            return true
        })
        const getData = Heap.getData()
        if (getData) {
            sumWorkTime += t - getData[0] + getData[1]
            t += getData[1]
        } else { // Heap 에 데이터가 없을 경우 시간흐르게
            t += 1
        }
    } while (Heap.heap.length > 0 || jobs.length > 0)
    return Math.floor(sumWorkTime / length)
}

testCase.forEach(({input, result}, i) => {
    let check = solution(input) === result
    console.log(`============ ${i}번째 테스트 ===============`)
    console.log(`결과 : ${check ? '통과' : '실패'}`)
    if (check) return
    console.log(`정답: ${result}`)
})