const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => el.split(' ').map(Number));

/*
    bfs 문제 특징 상 보통 인접행렬로 구현할 수 있다.
    0 0 0 0 0
    0 0 1 1 1
    0 1 0 0 1
    
    1 : [2,3,4]
    2 : [1,4]
    3 : [4]
    4 : []
    1,2,4
  */
function solution(input) {
  // N 정점의 개수,M 간선의 개수,V : 시작할 정점
  // bfs의 특징 재귀적으로 동작하지 않는다. 방문한 곳을 기억해야한다.
  // dfs는 재귀적으로 동작한다. 끝에 도달하면 리턴한다
  const [N, M, V] = input[0];
  let graph = new Array(N).fill(false).map((el) => []);
  let visit = new Array(N).fill(false);
  let dfsResult = [];
  for (let i = 1; i <= M; i++) {
    graph[input[i][0] - 1].push(input[i][1] - 1);
    graph[input[i][1] - 1].push(input[i][0] - 1);
  }
  graph = graph.map((el) => el.sort((a, b) => a - b));

  const dfs = (vStart) => {
    if (visit[vStart]) return;
    visit[vStart] = true;
    dfsResult.push(vStart);
    graph[vStart].forEach((el) => {
      if (!visit[el]) {
        dfs(el);
      }
    });
  };
  // 방문 초기화

  const bfs = (vStart) => {
    let queue = [vStart];
    let result = [];

    while (queue.length > 0) {
      let vis = queue.shift();

      if (visit[vis]) continue;
      visit[vis] = true;
      result.push(vis);
      graph[vis].forEach((el) => {
        // 방문하지 않은 노드라면?
        if (!visit[el]) queue.push(el);
      });
    }
    return result;
  };

  dfs(V - 1);
  visit.fill(false);
  return `${dfsResult.map((el) => el + 1).join(' ')}\n${bfs(V - 1)
    .map((el) => el + 1)
    .join(' ')}`;
  // return input;
}

console.log(solution(input));
