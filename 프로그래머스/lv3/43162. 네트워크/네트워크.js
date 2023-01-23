function solution(n, computers) {
    // 간접적으로 연결이 되있어도 데이터를 공유할 수 있기 때문에 공유망을 1로 표시한다. 순회한 네트워크 망은 다시 순회하지 않아도 된다.
    let originBool = new Array(n).fill(false);
    // 첫번째를 순회하면서 연결된 네트워크 망을 찾았기 떄문에 answer++
    let answer = 0;
    function networkFind(idx){
        originBool[idx] = true
        for(let i = 0; i<computers[idx].length; i++){
            // 검사한 네트워크 망이라면 continue, 현재 idx도 패스해야함.            
            if(originBool[i] || idx===i) continue;
            // 검사하지 않은 네트워크 망에 걸린다면?            
            if(computers[idx][i]){
                networkFind(i)
            }
        }
    }
    for(let j=0; j<n; j++){
        if(!originBool[j]){
            networkFind(j);
            answer++; 
        }
    }
    
    return answer
}