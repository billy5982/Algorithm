function solution(n, results) {
    const graph = new Array(n+1);
    for(let i=0; i<graph.length; i++){
        graph[i] = new Array(n+1).fill(false);
    }
    results.forEach((v)=>{
        const [A,B] = v;
        graph[A][B] = 1;
        graph[B][A] = -1;
        graph[A][A] = 0;
        graph[B][B] = 0;
    });
    console.log(graph)
    
}