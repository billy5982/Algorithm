function solution(n,edge){
    // 노드 별 자리를 만든다. 그리고 노드랑 인접해 있는 노드를 추출한다.
    const nodes = new Array(n).fill().map((_,idx)=>[])
    for(let el of edge){
        // 노드는 양방향이기 때문에 서로를 연결해 준다.세팅도 1번노드가 시작이 아닌 -1씩해서 0번 노드로 만든다.     
        nodes[el[0]-1].push(el[1]-1);
        nodes[el[1]-1].push(el[0]-1);
    }
    // visted의 인덱스는 노드의 위치이고 값은 해당 노드를 지난 회차이다.
    const visited = [1]
    // queue는 처음 노드(1)부터 순회할 거기 때문에 0으로 세팅
    const queue = [0]
    
    while(queue.length>0){
        // cur은 현재 순회할 노드를 의미한다.
        let cur = queue.shift()
    
        for(let el of nodes[cur]){
            // 노드를 순회하고 있는 데 해당 노드를 방문하지 않았다면?
            if(!visited[el]){
                // 다음 순회할 노드로 넣어준다.    
                queue.push(el)
                // 다음 순회할 노드는 현재 노드의 회차 +1이다 이를 기록해준다.
                visited[el] = visited[cur]+1
            }
        }        
    }
    let max = Math.max(...visited)
    return visited.filter(el=>el===max).length
}

// function solution(n, edge) {
// const connects = new Array(n).fill().map(_ => []);
//   for(const e of edge) {
//     connects[e[0]-1].push(e[1]-1);
//     connects[e[1]-1].push(e[0]-1);
//   }
  
//   const visited = [1];
//   const queue = [0];
//   while(queue.length) {
//     const cur = queue.shift();
    
//     for(const next of connects[cur]) {
//       if(!visited[next]) {
//         visited[next] = visited[cur] + 1;
//         queue.push(next);
//       }
//     }
//      console.log(visited)
//   }
  
//   const max = Math.max(...visited);
  
//   return visited.filter(el => el === max).length;
    
        
//     const nodeCheck = new Array(n).fill().map(_ => []);
//     for(const e of edge) {
//         nodeCheck[e[0]-1].push(e[1]-1);
//         nodeCheck[e[1]-1].push(e[0]-1);
//     }
     
//     // 갈 수 있는 목적지들
//     const bools = new Array(n).fill(false)
    
//     const queue = [nodeCheck[0]]
//     bools[0] = true
    
//     let totalArr = []
    
//     while(queue.length>0){
//         let count = queue.length;
//         let cntNums = [];
//         // 들어온 회차의 queue만큼 순회.        
//         for(let j =0 ;j<count; j++){
//             let shiftArr = queue.shift();
//             for(let i =0 ;i<shiftArr.length; i++){
//                 // 2,3을 아직 쓰지 않았다면?             
//                 if(bools[shiftArr[i]]){
//                     continue;
//                 }else{
//                     cntNums.push(shiftArr[i])
//                     queue.push(nodeCheck[shiftArr[i]])
//                     bools[shiftArr[i]] = true
//                 }
//             }
//         }
//         if(cntNums.length>0){
//             totalArr.push(cntNums)
//         }
 
//     }
//     return (totalArr[totalArr.length-1].length)
// }