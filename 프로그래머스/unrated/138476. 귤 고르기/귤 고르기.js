function solution(k, tangerine) {
    const tangerineObj = tangerine.reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur]+=1
        }else{
            acc[cur] =1
        }
        return acc
    },{})
    let entriesTanger = Object.entries(tangerineObj).sort((a,b)=>b[1]>a[1]?+1:-1)
    let whileN = 0;
    let count = 0;
    while(whileN<k){
        whileN += entriesTanger[count][1]
        count++
    }
    return (count)
}