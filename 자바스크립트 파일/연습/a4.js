arr=[4,3,2,1]

function solution(arr) {
    if (arr.length === 1) 
    {  return [-1] }
    const tmp = arr.slice()
    tmp.sort((a,b) => a-b)
    const val = tmp[0]


    arr.splice(arr.indexOf(val),1)

    return arr
}

console.log(solution(arr))