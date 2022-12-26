function solution(genres, plays) {
    // 스트리밍 사이트 => 장르 별 가장 많이 재생된 노래를 2개씩 모아 베스트 앨범을 출시 예정
    // 1. 속한 노래가 많이 재생된 장르 수록
    // 2. 장르 내에서 많이 재생된 노래
    // 3. 장르 내에서 재생횟수가 같은 노래 중에서는 고유 번호가 낮은 것을 우선
    
    const all = genres.reduce((acc,cur,idx)=>{
        //첫 입력 일경우 total 세팅
        if(acc[cur]){
        acc[cur] = {
            ...acc[cur],
            [idx] : plays[idx],
            total : acc[cur].total+plays[idx]
        };
        }else{
            acc[cur] = {
            ...acc[cur],
            [idx] : plays[idx],
            total : plays[idx]
        }
        }
        return acc;
    },{});
    
    const entrie = Object.entries(all).sort((a,b)=>b[1].total-a[1].total)
    .map((el)=>{
        delete el[1]['total'] 
        return Object.entries(el[1]).sort((a,b)=>b[1]-a[1])}) 
    const result = []
    for(let el of entrie){
        for(let i=0; i<2; i++){
            if(el[i]){
                result.push(el[i][0])
            }
        }
    }
    return result.map(x=>Number(x))
    // genres와 plays 의 입력 순서대로 인덱스 번호를 지정할 것.
    // 입력 순서대로 지정한 것을 분류 -> 장르별로 분류 오름차순 대로
    // all : {
    //   classic : {
            // 3 : 800,
            // 0 : 500,
            // 2 : 150,
            // total : 1450,
        // }
            // pop : {
            //         1 : 600,
            //         4 : 2500,
            //         total : 3100
        //     }
    // }
    /*
        
    */
    
}