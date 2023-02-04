function solution(n, edge) {
    
    const nodeCheck = new Array(n).fill().map(_ => []);
    for(const e of edge) {
        nodeCheck[e[0]-1].push(e[1]-1);
        nodeCheck[e[1]-1].push(e[0]-1);
    }
   
    
    
    // 갈 수 있는 목적지들
    const bools = new Array(n).fill(false)
    
    const queue = [nodeCheck[0]]
    bools[0] = true
    
    let totalArr = []
    
    while(queue.length>0){
        let count = queue.length;
        let cntNums = [];
        // 들어온 회차의 queue만큼 순회.        
        for(let j =0 ;j<count; j++){
            let shiftArr = queue.shift();
            for(let i =0 ;i<shiftArr.length; i++){
                // 2,3을 아직 쓰지 않았다면?             
                if(bools[shiftArr[i]]){
                    continue;
                }else{
                    cntNums.push(shiftArr[i])
                    queue.push(nodeCheck[shiftArr[i]])
                    bools[shiftArr[i]] = true
                }
            }
        }
        if(cntNums.length>0){
            totalArr.push(cntNums)
        }
 
    }
    return (totalArr[totalArr.length-1].length)
}