function solution(A,B){
    // 한쪽은 오름차순, 한쪽은 내림차순으로 배치해야함
    // 그래야 제일 작은수를 만들 수 있음
    const sortA = A.sort((a,b)=>a-b)    
    const sortB = B.sort((a,b)=>b-a)
    const result = sortA.reduce((acc,cur,idx)=>acc+cur*sortB[idx],0)

    return result;
}