function solution(s) {
    // {}가 하나의 배열이라고 생각할 것. 양끝 {}를 벗겨낸다.
    // 생각해보면 가장 많이 나온 숫자 일수록 제일 앞에 있는 숫자임
    // 
    
    const word = s.replaceAll('{','').replaceAll('}','').split(',').map(Number).reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur]+=1;
        }else{
            acc[cur]=1;
        }
        return acc
    },{})
    const answer = Object.entries(word).sort((a,b)=>a[1]>b[1]?-1:+1).map(el=>+el[0])
    return (answer)
}