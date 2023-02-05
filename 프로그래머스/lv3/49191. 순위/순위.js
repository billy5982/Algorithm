/* 
    플로이드 워셜 알고리즘 : 모든 간선의 최단 경로를 구하는 공식
    모든 노드는 다른 모든 노드와 통하는지가 기록되어있어야하고, 현재 노드의 위치는 0으로 표시
    모든 노드에 경우의수로 출발점, 중간점, 도착점을 반복해야한다.
*/
function solution(n, results) {
    // 모든 노드는 모든 노드를 기록하고 있어야함
    const graph = new Array(n).fill(false).map((el)=>new Array(n).fill(false))
    // 열에서 행으로 가는 경우를 승부로 표시한  것.
    // 이겼을 경우엔 1로 표시 졌을경우엔 -1 본인 자리에는 0을 표시한다. 경기가 없었다면 false로 남아있다.
    results.forEach((el)=>{
        let [A,B] = el
        A -=1, B-=1;
        // 본인 자리 수는 0으로
        graph[A][A] = 0;
        graph[B][B] = 0;
        // A자리는 B를 이겼으니깐 1 B자리는 A에게 졌으니깐 -1 
        graph[A][B] = 1;
        graph[B][A] = -1;
    })
    
    
    for(let mid = 0; mid<n; mid++){
        for(let start = 0; start<n; start++){
            for(let end = 0; end<n; end++){
                if(graph[start][mid]===1 && graph[mid][end]===1) graph[start][end] = 1;
                if(graph[start][mid]===-1 && graph[mid][end]===-1) graph[start][end] = -1;
            }
        }
    }
    let count = 0;
    graph.forEach((el)=>{
        let filterd = el.filter(el2=>el2!==false)
        if(el.length===filterd.length) count++
    })
    return count
}