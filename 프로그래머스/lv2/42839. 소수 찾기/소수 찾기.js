function solution(numbers) {
    let answer = [];
    let bools = new Array(numbers.length).fill(false)

    function dfs(num){
        let makingNum = num;
        for(let j=0; j<numbers.length; j++){
            if(bools[j])continue;
            bools[j]= true
            dfs(`${makingNum}${numbers[j]}`);
            answer.push(`${makingNum}${numbers[j]}`)
            bools[j] = false
        }
    }
    
    for(let i =0; i<numbers.length; i++){
        bools[i]=true;
        dfs(numbers[i]);
        answer.push(numbers[i])
        bools[i]=false
    }
    answer = answer.map(Number).filter((el)=>checkNum(el))
    
    return (new Set(answer).size)
}

function checkNum(decimal){
    if(decimal<=1) return false
    for(let i =2; i*i<=decimal; i++){
        if(decimal%i===0)return false
    }
    return true
}