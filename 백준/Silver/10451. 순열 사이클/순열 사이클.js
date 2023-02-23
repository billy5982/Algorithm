const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

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
  /*
    input의 [0]만큼 사이클이 들어온다.
    우선 input 0 만큼 순회해야함. 순회하면서 해당 하는 만큼 visit + 사이클 조합(new Array를 이용)을 만들어야함
  */
  let result = []; // 카운트를 보관할 배열

  for (let i = 1; i < input[0] * 2; i += 2) {
    // 사이클을 제작하는 배열
    let sortedArr = new Array(input[i]).fill(0).map((_, idx) => idx + 1);
    let visit = new Array(input[i]).fill(false);
    let cycle = sortedArr.map((el, idx) => [el, input[i + 1][idx]]);
    let count = 0;
    for (let el of cycle) {
      // cycle[0] = [1,3] cycle[0][0] => [1]
      function dfs(idx) {
        // console.log(visit, count);
        if (visit[idx]) {
          count++;
          return;
        }
        visit[idx] = true;
        dfs(cycle[idx][1] - 1);
      }
      // 방문한 노드를 굳이 방문할 필요가 없음. 사이클을 축적할 우려가 있음
      if (visit[el[0] - 1]) continue;
      dfs(el[0] - 1);
    }
    result.push(count);
  }
  return result.join('\n');
}

console.log(solution(input));
