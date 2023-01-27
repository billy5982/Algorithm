function solution(msg) {
    // 객체를 만들어야함.
    const objAph = new Array(26).fill(0).map((_,idx)=>String.fromCharCode(idx+65)).reduce((acc,cur,idx)=>{
       if(!acc[cur]){
           acc[cur] = idx+1
       } 
        return acc
    },{})
    let str = msg[0];
    let makeIdx = 27;
    const answer = []
    // 새로운 단어를 만들었을떄는 27부터 시작한다. idx가 필요하다.
    //str에 다음 글자를 더한다. 다음글자가 없다면 추가한다. 하지만 다음 글자가 있다면 더한다음 다음글자를 확인한다. 
    //또 있다면 또 다음글자를 확인한다.
    for(let i=1; i<msg.length; i++){
        if(objAph[str+msg[i]]){
            str+=msg[i]
        }else{
            objAph[str+msg[i]]=makeIdx;
            makeIdx++;
            answer.push(objAph[str])
            str = msg[i]
        }
        if(i===msg.length-1){
            answer.push(objAph[str])
        }
    }
    return (answer.length>0?answer : [objAph[str]])
    
}