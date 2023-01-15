function reduceObj(acc,cur){
    if(acc[cur]){
        acc[cur]+=1;
    }else{
        acc[cur] =1;
    }
    return acc
}

function solution(s) {
    let arr = [...s]
    
    let count = 0;
    let complete = 0;
    // 만약 전체를 검사했을 때, 짝이 맞지 않는다면 shift(), push()
    // count ++ 반복, 종료시점은 이동시킨 시점이 s.length를 넘어갈때
    let idx = 0;
    // 본격 검사     
    while(count<s.length){
        let origin = [...arr]
        let stack = [];
        while(idx<origin.length){
            if(origin[idx]==='['&&origin[idx+1]===']'){
                stack.push(...origin.splice(idx,2));
                idx = 0;
            }else if(origin[idx]==='{'&&origin[idx+1]==='}'){
                stack.push(...origin.splice(idx,2));
                idx = 0;
            }else if(origin[idx]==='('&&origin[idx+1]===')'){
                stack.push(...origin.splice(idx,2));
                idx = 0;
            }else{
                idx++;
            }
        }
        if(stack.length===arr.length){
            complete++
        }
        count++;
        let a = arr.shift()
        arr.push(...a)
    }
    return (complete)
}