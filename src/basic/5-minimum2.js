function solution(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }
    answer = min
    return answer
}

function solution2(n) {
    return n.reduce((acc, datum) => {
        if (datum < acc) {
            acc = datum
        }
        return acc
    })
}

function solution3(n) {
    let answer = Math.min.apply(null, n)
    return Math.min(...n)
}

let arr = [5, 7, 1, 3, 2, 9, 11]
console.log(solution(arr))
console.log(solution2(arr))
console.log(solution3(arr))
