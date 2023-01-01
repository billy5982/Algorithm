function solution(N, stages) {
    //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 1부터 N까지 돌면서 순회하는 숫자 이상의 참가자를 찾는다 (포함)
    // 순회하는 숫자와 같으면 실패한 사람, 순회하는 숫자보다 높으면 통과한 사람이다.
    let failureArr = [];
    // 스테이지 순회    
    for(let i=1; i<=N; i++){
        // 인원 순회를 진행해야함
        // 도전자          
        let challengers = 0;
        // 실패자
        let failer = 0; 
        for(let el of stages){
            if(el > i){
                challengers++;
            }else if(el===i){
                failer++
            }
        }
        challengers += failer
        failureArr.push([i,failer/challengers])
    }
    const sortStages = failureArr.sort((a,b)=>{
        if(a[1]>b[1]){
            return -1;
        }else if(a[1]<b[1]){
            return 1;
        }else{
            return a[0]>b[0]?1:-1
        }
    })
   
   return sortStages.map((el)=>el[0]);
}