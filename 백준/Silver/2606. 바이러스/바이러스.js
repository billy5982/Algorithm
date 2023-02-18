const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (isNaN(+el) ? el.split(' ').map(Number) : +el));

/*
  A로 만들 수 있는 조합중 B보다 작은 것을 유추해야한다. 그중 제일 큰것.
  예외 조건) 제일 작은  수가 B의 첫수보다 작다면?
  1. deps 는 동일하게 맞춘다.
  2.
*/

function solution(input) {
  let [computers, pair] = input;
  let obj = {};
  for (let i = 0; i < computers; i++) {
    obj[i + 1] = [];
  }
  let pairs = input.slice(2);
  // console.log(obj);
  for (let el of pairs) {
    obj[el[0]].push(el[1]);
    obj[el[1]].push(el[0]);
  }

  let queue = [obj[1]];
  let virus = 0;
  let visited = new Array(computers).fill(false);
  visited[0] = true;

  while (queue.length) {
    let loop = queue.shift();

    for (let el of loop) {
      if (!visited[el - 1]) {
        virus++;
        visited[el - 1] = true;
        queue.push(obj[el]);
      }
      // console.log(loop, virus, queue);
    }
  }

  return virus;
}

console.log(solution(input));
