function solution(cacheSize, cities) {
    /*
        LRU 알고리즘 : 가장 오래동안 사용하지 않은 데이터를 없애는 기법이다.
        cache에 데이터가 존재하지 않다면 miss. 존재하다면 hit이다.
        cache를 보관하는 arr를 만든다. 해당 arr의 길이가 cacheSize를 넘지 않는다면 저장해둔다.
            여기서 캐시안에 보관하고자 하는 데이터가 있다면 cache hit, 없다면 cache miss
            
            단계 1. 캐쉬 배열안에 넣고자하는 정보가있는 지 확인한다.
            단계 2-1 : 만약 캐쉬사이즈를 넘지 않는다면?
                    - 캐쉬 앞에다 보관한다.
                2-2 : 만약 캐쉬사이즈를 넘는다면?
                    - 캐쉬 마지막을 제거한다.
                    - 새로운 정보를 앞에다 둔다.
            예외 : 캐쉬 사이즈가 0이라면 모두가 cache miss
    */     
    const hit = 1, miss = 5;
    let duringTime = 0;
    let cache = [];
    
    if(cacheSize===0){
        return miss*cities.length
    }
    
    cities.forEach((el,idx)=>{
        let city = el.toLowerCase();    
        // cache miss 상태         
        if(cache.indexOf(city)===-1){
            duringTime+=miss
            // 캐쉬 용량 초과일때
            if(cache.length>=cacheSize){
                cache.unshift(city);
                cache.pop();
            }else{
                cache.unshift(city)
            }
        }else{
            // 만약 존재할때는 hit상태
            duringTime+=hit
            cache = cache.filter((el2,idx)=>el2.toLowerCase()!==city)
            cache.unshift(city)
        }
    })
    return duringTime
}