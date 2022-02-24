function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++) {
        answer = answer + i
    }

    return answer
}

function solution2(n) {
    return Array.from({ length: n }, (v, i) => i + 1).reduce((acc, datum) => {
        acc += datum
        return acc
    })
}

console.log(solution(10))
console.log(solution2(10))
