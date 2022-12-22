function solution(participant, completion) {
    // participant 참가자 명단과 completion 도착한 사람들을 비교
    // 풀이 방법 1
    // participant을 객체로 만들고, completion를 for of 문으로 순회하면서 완주자의 숫자를 제거, 마지막의 숫자가 양수라면? 
    // 0이 아니라면 완주하지 않은 참가자 임.
    // 예외 케이스 : 동명이인의 참가자가 있을 경우. 
//     const participantPeople = {}
    
//     for(let el of participant){
//         if(participantPeople[el]){ // 완주자의 이미 이름이 존재할경우
//         participantPeople[el] += 1;
//         }else{
//         participantPeople[el] = 1; // 완주자의 이름이 존재하지 않을 경우
//         }
//     }
    
//     for(let el of completion){ // 참가자 명단을 순회
//         participantPeople[el] -= 1
//     }
//     for(let key in participantPeople){
//         if(participantPeople[key]){ //완주하지 않은 참가자 라면? 객체 value가 1이상
//             return key
//         }
//     }
    // reduce로 리팩토링 //
      const participantPeople = participant.reduce((acc,cur)=>{
          if(acc[cur]){
            acc[cur]+=1
          }else{
            acc[cur]=1   
          }
          return acc
      },{})
    completion.forEach((el)=>participantPeople[el]-=1)
    const result = Object.entries(participantPeople).filter((el)=>el[1]); 
    return result[0][0]
}