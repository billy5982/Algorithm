const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

const N = input.shift();
const listM = input.shift();

// console.log(N, listM, input);
// 상근이의 친구를 구해야함. 상근이는 1. 1,2 2,4 1과 2는 친구고 2와 4도 친구니깐 1과 4도 친구임
// 상근이의 친구를 훑는다. 2가 나오면 2에 들어가서 또 훑는다. 방문노드를 검사해야 한다.
function solution(input) {
  let answer = 0;
  const visited = new Array(N).fill(false);
  const relation = new Array(N)
    .fill(0)
    .map((el, idx) => idx)
    .reduce((acc, cur) => {
      acc[cur] = [];
      return acc;
    }, {});

  for (let i = 0; i < listM; i++) {
    relation[input[i][0] - 1].push(input[i][1] - 1);
    relation[input[i][1] - 1].push(input[i][0] - 1);
  }
  visited[0] = true;
  let queue = [[0, 0]];

  // 방문하지 않은 노드를 push 할때가 새로운 친구를 사귀었을때임 근데 더 깊은 관계는 출력되지 않네... deps 가 필요할듯...
  while (queue.length > 0) {
    let [idx, deps] = queue.shift();

    if (deps <= 2) {
      answer++;
      for (let el of relation[idx]) {
        if (!visited[el]) {
          queue.push([el, deps + 1]);
          visited[el] = true;
        }
      }
    }
  }

  return answer === 0 ? answer : answer - 1;
}

console.log(solution(input));
