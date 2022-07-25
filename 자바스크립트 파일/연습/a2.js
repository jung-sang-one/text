



function solution(n)
{

    const answer = String(n).split('').sort().reverse().map(a=>a=parseInt(a));
    return answer

}

n= 12341
console.log(solution(n))