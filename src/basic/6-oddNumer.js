//7개의 자연수가 주어질 때, 이들중 홀수인 자연수들을 모두 골라 그합을 구하고, 고른 홀수들
//중 최솟값을 찾는 프로그램을 작성하시오
function solution(arr) {
    let answer = []
    let sum = 0,
        min = 1000
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x
            if (x < min) min = x
        }
    }
    answer.push(sum)
    answer.push(min)
    return answer
}

function solution2(arr) {
    let odd = arr.filter((v) => v % 2 === 1)
    let sum
    let min
    sum = odd.reduce((acc, datum) => acc + datum)
    min = odd.reduce((acc, datum) => {
        if (datum < acc) {
            acc = datum
        }
        return acc
    })
    return [sum, min]
}

arr = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr))
console.log(solution2(arr))
