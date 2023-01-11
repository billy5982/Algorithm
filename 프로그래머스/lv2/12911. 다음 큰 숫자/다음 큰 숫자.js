function reduceFun(acc,cur){
        if(acc[cur]){
            acc[cur] +=1
        }else{
            acc[cur] = 1
        }
        return acc
}
function solution(n) {
    let origin = [...n.toString(2)].reduce(reduceFun,{})
    let answerNum = n+1
    let answer = [...answerNum.toString(2)].reduce(reduceFun,{})
    while(origin['1']!==answer['1']){
        answerNum += 1
        answer = [...answerNum.toString(2)].reduce(reduceFun,{})
    }
    return answerNum
}

