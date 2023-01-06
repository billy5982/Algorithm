function solution(s) {
    // 첫글자를 x라고 함 x와 x가 아닌 다른 글자들이 나온 횟수를 각각 센다   
    // 첫번쨰 글자를 저장 => 그다음부터 for돌림, a가 나옴 ,n이 나옴 
    // var answer = 0;
    // return answer;
    let copyS = [...s]

    let firstWord = copyS[0]
    let sameCount = 0;
    let diffCount = 0;
    let idx = 0;
    let answer = 0;
  
    while(copyS.length!==0){
        if(copyS[idx]===firstWord)sameCount++
        if(copyS[idx]!==firstWord)diffCount++
        // 만약 문자열의 자리수를 벗어났다면
        if(idx+1>copyS.length){
            break
        }
    
        if(sameCount===diffCount){
            answer++;
            copyS.splice(0,idx+1)
            firstWord = copyS[0]
            idx=0;

        }else{
            idx+=1;
        }
    }
    if(copyS.length!==0){
        return answer+1
    }else{
        return answer
    }
}