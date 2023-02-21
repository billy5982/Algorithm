const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => el.split(' ').map(Number));

/*
    B를 해킹하면 A도 해킹할 수 있다.
    1 : []
    2 : []
    3 : [1,2]
    4 : [3]
    5 : [3]
  */
function solution(input) {
  // N 은 컴퓨터 종류 수 , M은 연관관계 수
  // A가 B를 신뢰한다. B를 해킹하면 A도 해킹할 수 있다. 단 A를 해킹한다고 B가 해킹되는 것은 아님.
  // 한번에 가장 많은 컴퓨터를 해킹할 수 있는 경우? 해킹은 신뢰방향의 반대로.
  // 0을 해킹하면 3을 해킹할 수 있음. 1을 해킹하면 3을해킹할수 있음. 2를 해킹하면 4를 해킹할수 있음. 2를 해킹하면 5를 해킹할 수 있음.
  // 컴퓨터를 몇번 호출했느냐로 해킹할 수 있는 컴퓨터의 개수를 구할 수 있다.
  const [N, M] = input[0];
  const graph = Array.from({ length: N + 1 }, () => []);
  let answer = [];
  for (let i = 1; i <= M; i++) {
    let [a, b] = input[i];
    graph[b].push(a);
  }

  let max = 0;
  // 현재 들어온 arr를 해킹하면
  function recursive(i) {
    // 현재 컴퓨터가 가능한 수를 확인할 수 있음.
    let queue = [i];
    let visited = new Array(N + 1).fill(false);
    let count = 0;
    let result = 0;
    while (queue.length) {
      let shifted = queue.shift();
      if (result < count) result = count;
      visited[shifted] = true;
      for (let i = 0; i < graph[shifted].length; i++) {
        // maxHacking[el] += 1;
        let value = graph[shifted][i];
        if (visited[value]) continue;
        visited[value] = true;
        count += 1;
        queue.push(value);
      }
    }
    if (max < result) {
      max = result;
      answer = [];
      answer.push(i);
    } else if (max === result) {
      answer.push(i);
    }
  }
  for (let i = 1; i <= N; i++) {
    recursive(i);
  }

  return answer.join(' ');
}

console.log(solution(input));
