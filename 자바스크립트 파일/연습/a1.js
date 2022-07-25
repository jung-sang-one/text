
arr=[4,3,2,1,1,1,1,1,1]

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1/0); //변수 arr에서 제일 작은수를 찾아서 삭제
    if(arr.length<1)return[-1];                //splice() 인덱스가 가리키는걸 삭제
    return arr;                                // arr의 배열갯수가 1보다 작으면 -1을 출력하고
                                               // 아니면 arr을 출력한다
}


console.log(solution(arr));