function solution(s) {
    // 배열과 객체를 조합해서
    // 객체에 해당 글자가 없다면 객체에 인덱스를 저장하고 해당 글씨를 -1로 배열에 저장
    // lastIndexof 랑 indexOf랑 조합해도 좋을 듯    
    // 그리고 넣은 s는 제외를 해줘야 다음 indexOf랑 앞 순을 기억하고 있는 객체랑 비교하고 뺄수 있음
    let copyS = s.split('')
    let numsObj = {};
    let idxArr = [];
   for(let i=0; i<copyS.length; i++){
    // 0도 falsy한 값으로 입력됨
       if(!numsObj[copyS[i]]&&numsObj[copyS[i]]!==0){
           numsObj[copyS[i]] = i
           idxArr.push(-1)
       }else{
           idxArr.push(i-numsObj[copyS[i]])
           numsObj[copyS[i]] = i
       }
   }

    return idxArr
    // return answer;
}