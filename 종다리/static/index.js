arr1 =[[1],[2]];
arr2 =[[3],[4]];

solution(arr1,arr2);

 function solution(arr1, arr2) {
     var answer = [];
      for(let i=0; i< arr1.length; i++){
          let sum = [];
          for(let j=0; j<arr1[i].length; j++){
              sum.push(arr1[i][j] + arr2[i][j])
              // sum.push(arr1[i] + arr2[i])
          }
                 answer.push(sum)
           }
          return answer;

 }
console.log.length