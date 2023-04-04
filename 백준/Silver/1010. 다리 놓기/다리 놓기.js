const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

/*
  다리가 서로 크로스 되면 안된다.
  N과 M의 경우의 수를 구하는 공식은 nCr 인데 => n! / r!(n-r)! 처럼 표시할 수 있다.
  팩토리얼 함수가 필요하다.
*/
const sol = (input) => {
  const N = input.shift();
  const answer = [];
  function factorial(n) {
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  }

  for (let el of input) {
    const [n, m] = el;
    const getBridge = Math.round(factorial(m) / (factorial(m - n) * factorial(n)));
    answer.push(getBridge);
  }

  return answer.join('\n');
  // 수의 연산이 너무 오래걸림.
  // const answers = [];
  // for (let i = 0; i < N; i++) {
  //   const [N, M] = input[i];
  //   let cnt = 0;

  //   let visited = new Array(M).fill(false);

  //   const dfs = (arr) => {
  //     // console.log(arr);
  //     if (arr.length >= N) {
  //       cnt += 1;
  //       return;
  //     }
  //     for (let i = 0; i < M; i++) {
  //       if (visited[i]) continue;
  //       visited[i] = true;
  //       dfs([...arr, i]);
  //       visited[i] = false;
  //     }
  //   };

  //   answers.push(answers);
  //   dfs([]);
  // }
  // console.log(arr);
};

console.log(sol(input));
