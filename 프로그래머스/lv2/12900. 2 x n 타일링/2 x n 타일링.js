function solution(n) {
    let tileing = [1,1,2,3]
    
    for(let i =2; i<=n; i++){
        if(tileing[i])continue;
        tileing[i] = (tileing[i-1] + tileing[i-2] )%1000000007
    }
    return tileing[n]
}