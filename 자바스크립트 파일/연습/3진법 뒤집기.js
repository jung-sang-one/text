
n=45

function solution(n) {
    var a=n.toString(3);
console.log(a);
    var c=a.split("").reverse().join('');
console.log(c);
    var d=parseInt(c,3)
    console.log(d);
    return d

}
console.log(solution(n));