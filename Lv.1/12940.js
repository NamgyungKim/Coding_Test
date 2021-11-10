// 최대공약수와 최소공배수 GG!!! 
// 다시 풀어보자 ㅅㅂ 
// 최대공약수, 최소공배수 공부를 다시해야겠..


// 나누기
function division (num) {
    for(let i = 2; i<= num;i++){
        if( Number.isInteger(num/i)){
            num = num/i
            return i
        }
    }
}

//배열의 곱
function add (arr){
    let num = 1
    for(let i = 0; i < arr.length; i++){
        num = num * arr[i]
    }
    return num
}

function solution(n, m) {
    let answer ;
    let n_num = []
    let m_num = []
    //소인수 분해
    while (n > 1){
        n_num.push(division(n))
        n = n/division(n)
    }

    while (m > 1){
        m_num.push(division(m))
        m = m/division(m)
    }

    // console.log(n_num)
    // console.log(m_num)

    n_num = new Set(n_num)
    m_num = new Set(m_num)

}

 solution(30,50)
