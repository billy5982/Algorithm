function solution(lottos, win_nums) {
    // 0을 다 맞는다 과정하고 worst -
    // 0을 제외한 숫자는 꼴등이라고 생각 맞으면 best +
    let best = 0;
    let zero = 0;
    let ranking = [];
    
    for(let i =0; i<lottos.length; i++){
        if(lottos[i]===0){
            zero+=1;
        }else{
            win_nums.includes(lottos[i]) && best++
        }
    }
    
    let worst = best;
    best += zero
    
    for(let i=6; i>=1; i--){
        ranking.push(i)
    }
    let worstRank = worst>1? ranking.indexOf(worst)+1 : 6
    let bestRank =  best>1?ranking.indexOf(best)+1 : 6

    return [bestRank,worstRank]
    
    // return answer;
}