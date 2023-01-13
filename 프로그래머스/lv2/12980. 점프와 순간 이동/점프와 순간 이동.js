function solution(n){
    // 현재수가 홀수라면 +1;
    // 현재수가 짝수라면 제곱
    // 2로 나눠지지 않는다면 --, count++
    let remainder = n
    let count = 0;
    while(remainder!==0){
        let cal = remainder%2;
        // 현재 거리가 짝수면         
        if(cal===0){
            remainder = remainder/2
        }else{
            remainder -= 1
            count++
        };
        
    }
    return count;
}