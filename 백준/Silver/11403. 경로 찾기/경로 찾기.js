const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => (idx === 0 ? +el : el.split(' ').map(Number)));

/*
   현재 그래프의 열을 하나하나 순회한다.
   해당열은 계속적으로 순회하고, 1이담긴 것을 stack에 담는다.
   stack이 비어있으면 해당 함수를 끝낸다. 해당 스택에 집어 넣을 때 해당 자리수를 방문표시 해준다.
*/

function solution(input) {
  //
  const graph = input.slice(1);
  const visited = new Array(input[0]).fill(false);
  let answer = '';
  function recursive(arr, visit, idx) {
    const queue = [arr];

    // While이 끝난다면 순회한 노드는 visit에 기록된다.
    while (queue.length > 0) {
      let now = queue.shift();
      for (let i = 0; i < now.length; i++) {
        if (now[i] && !visit[i]) {
          queue.push(graph[i]);
          visit[i] = true;
        }
      }
    }
    return visit;
  }

  for (let i = 0; i < input[0]; i++) {
    answer +=
      recursive(graph[i], [...visited], i)
        .map((el) => (el ? 1 : 0))
        .join(' ') + '\n';
  }

  return answer.slice(0, answer.length - 1);
}

console.log(solution(input));
