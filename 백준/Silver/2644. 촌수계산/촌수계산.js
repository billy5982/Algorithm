const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const [person1, person2] = input.shift().split(' ');
const m = +input.shift();
const relations = input.reduce((acc, v) => {
  const [parent, child] = v.split(' ');
  if (!acc[parent]) {
    acc[parent] = [child];
  } else {
    acc[parent].push(child);
  }
  if (!acc[child]) {
    acc[child] = [parent];
  } else {
    acc[child].push(parent);
  }
  return acc;
}, {});

const dfs = (start, target) => {
  const visited = Array(n + 1).fill(false);
  visited[start] = true;
  const stack = [[start, 0]];
  while (stack.length) {
    const [person, depth] = stack.pop();
    if (person === target) {
      return depth;
    }
    if (relations[person]) {
      relations[person].forEach((nextPerson) => {
        if (!visited[nextPerson]) {
          visited[nextPerson] = true;
          stack.push([nextPerson, depth + 1]);
        }
      });
    }
  }
  return -1;
};

console.log(dfs(person1, person2));

// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

// const findP = [...input[1].map((el) => el - 1)];
// // [x,y] = [자식, 부모]
// const loopLimit = input.slice(input[0] - input[2] + 1);

// let obj = {};

// for (let i = 0; i < input[0]; i++) {
//   obj[Number(i)] = [];
// }

// for (let el of loopLimit) {
//   obj[el[0] - 1].push(el[1] - 1);
//   obj[el[1] - 1].push(el[0] - 1);
// }

// function solution(relationship) {
//   const visited = new Array(input[0]).fill(false);
//   // deps를 기억해야함.
//   const queue = [[...relationship[findP[0]], 1]];
//   visited[findP[0]] = true;

//   while (queue.length > 0) {
//     // console.log(queue);
//     let curLoop = queue.shift();
//     // console.log(visited);
//     for (let i = 0; i < curLoop.length - 1; i++) {
//       if (!visited[curLoop[i]]) {
//         queue.push([...relationship[curLoop[i]], curLoop[curLoop.length - 1] + 1]);
//         visited[curLoop[i]] = true;
//       }
//       if (curLoop[i] === findP[1]) {
//         return curLoop[curLoop.length - 1];
//       }
//     }
//   }
//   return -1;
// }

// console.log(solution(obj));
