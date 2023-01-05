function solution(X, Y) {
/*
    1. X,Y의 보유한 숫자를 객체로 
    2. 객체를 순회하면서 둘 중 하나가 서로를 가지고 있는지 확인 => 같다면 분할해서 삽입, 다르다면 작은수만큼 삽입
*/     
    let xObj = X.split('').reduce((acc,cur)=>{
        if(acc[cur]){ 
            acc[cur]+=1
        }else{
            acc[cur] =1;    
        };
        return acc
    },{})
    
    let yObj = Y.split('').reduce((acc,cur)=>{
        if(acc[cur]){ 
            acc[cur]+=1
        }else{
            acc[cur] =1;    
        };
        return acc
    },{})
    let nums = []
    for(let key in xObj){
        if(yObj[key]){
            const min = Math.min(yObj[key],xObj[key])
            for(let i =0; i<min; i++){
                nums.push(key)
            }
        }
    }
    let result = nums.sort((a,b)=>b-a)
    let zeroCount = 0;
    
    for(let el of result){
        if(el==='0'){
            zeroCount++;
        }
    }
    console.log(zeroCount,result.length)
    if(result.length<=0){
        return '-1'
    }else if(zeroCount ===result.length){
        return '0'
    }else{
        return result.join('')
    }
    
//     return result 
}