const fs = require('fs');
let s = [];
let answer = -1;

function check(s, b, n) {
  s = Number(s.join(''));
  // console.log('hi');
  // console.log(n);
  if (s.toString().length !== n) return -1;
  if (s < b && s > answer) answer = s;
}

function sol(A, b, visited) {
  if (s.length === A.length) return check(s, b, A.length);
  // console.log(answer);
  for (let i = 0; i < A.length; i++) {
    if (!visited[i]) {
      s.push(A[i]);
      visited[i] = true;
      sol(A, b, visited);
      s.pop();
      visited[i] = false;
    }
  }
}

function insert() {
  const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);
  let [a, b] = input.slice(0, 2);

  let A = a.toString().split('').map(Number);

  let visited = new Array(A.length).fill(false);
  sol(A, b, visited);
  console.log(answer);
}
insert();

// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map((el) => el.split('').map(Number));

// // console.log(input);
// /*
//   A로 만들 수 있는 조합중 B보다 작은 것을 유추해야한다. 그중 제일 큰것.
//   예외 조건) 제일 작은  수가 B의 첫수보다 작다면?
//   1. deps 는 동일하게 맞춘다.
//   2.
// */

// function solution(input) {
//   let numB = +input[1].join('');

//   if (input[1][0] < Math.min(...input[0])) {
//     return -1;
//   } else if (input[0].length !== input[1].length) {
//     return -1;
//   }

//   let makeNums = [];
//   let numsSeat = new Array(input[0].length).fill(false);
//   function recursive(deps, nums) {

//     //   s = Number(s.join(''));
// //   // console.log('hi');
// //   console.log(n);
// //   if (s.toString().length !== n) return -1;
//     if (deps === input[0].length || deps === input[1].length) {
//       let num = +nums;

//       return;
//     }
//     for (let i = 0; i < input[0].length; i++) {
//       if (numsSeat[i]) {
//         continue;
//       } else {
//         numsSeat[i] = true;
//         recursive(deps + 1, nums + `${input[0][i]}`);
//         numsSeat[i] = false;
//       }
//     }
//   }

//   for (let i = 0; i < input[0].length; i++) {
//     if (input[0][i] <= input[1][0]) {
//       numsSeat[i] = true;
//       recursive(1, `${input[0][i]}`);
//       numsSeat[i] = false;
//     }
//   }
//   if (makeNums.length > 0) {
//     makeNums = makeNums.filter((el) => el < numB);
//     return makeNums.length > 0 ? Math.max(...makeNums) : -1;
//   } else {
//     return -1;
//   }
// }

// console.log(solution(input));
