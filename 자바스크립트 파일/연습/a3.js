



// function solution(n){
//     let a = String(n).split("").reverse().reduce((acc,cur)=> acc+= Number(cur),0);
//     let b = String(n).split("").reverse().join("+");

    
//     let c = b+"="+a
// 	return c
// }

// console.log(solution(718253))




// function solution(n){
//     let a = String(n).split("").reverse();
//     let b = a.reduce((acc,cur)=> acc+= Number(cur),0);
//     let c=a.map(o=> o[i]+["+"]);

    
//     let d = c+"="+b
// 	return d
// }

// console.log(solution(718253))
var arr = ["1", "2", "3", "4", "5"];
var a=[]
for (let i=0;i<arr.lenght; i++)
a+= arr.length[i+"+"];
// var a =arr.join("+");

console.log(a)