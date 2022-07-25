function solution(phone_number) {
    var answer = '';
  
  // 번호 뒷 4자리 가져오기
    let back = phone_number.substr(-4,4);
    console.log(back);
  
  // 번호 뒷 4자리를 제외한 앞부분을 가져오기
    let front = phone_number.substring(0,phone_number.length-4);
    console.log(front);

  // 뒷 4자리를 제외한 앞부분을 * 문자로 변환해주기
    let result = front.replace(/[0-9]/g,'*');
    console.log(result);
    
  // * 문자로 변환해 준 부분과 뒷자리를 더해서 값을 구하기
    answer = result + back

    return answer;
}