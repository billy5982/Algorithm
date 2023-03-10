const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((x) => (isNaN(+x) ? x : +x)) : +el));

/*
    
*/
const numN = input.shift();
const nums = input.shift();
const operators = [];
for (let i = 0; i < input[0].length; i++) {
  for (let j = 0; j < input[0][i]; j++) {
    switch (i) {
      case 0:
        operators.push('+');
        break;
      case 1:
        operators.push('-');
        break;
      case 2:
        operators.push('*');
        break;
      case 3:
        operators.push('/');
        break;
    }
  }
}

function calculateNum(operator, init, nextNum) {
  switch (operator) {
    case '+':
      return init + nextNum;
    case '-':
      return init - nextNum;
    case '*':
      return init * nextNum;
    case '/':
      if (init < 0) {
        return -Math.floor(Math.abs(init) / nextNum);
      }
      return Math.floor(init / nextNum);
  }
}
const solution = (input, operators) => {
  // 처음 수는 주어진다 (=== 계산된 수) 연산자와 숫자를 통해서 다음 수로 넘어가야한다.
  let result = [];

  function dfs(initialNum, visit, deps) {
    if (deps === numN - 1) {
      result.push(initialNum);
      return;
    }
    let curNum = input[deps];
    for (let i = 0; i < operators.length; i++) {
      if (visit[i]) continue;
      visit[i] = true;
      // console.log(initialNum, operators[i], curNum);
      dfs(calculateNum(operators[i], initialNum, curNum), visit, deps + 1);
      visit[i] = false;
    }
  }

  const visited = new Array(operators.length).fill(false);
  dfs(input.shift(), visited, 0);

  return Math.max(...result) + '\n' + Math.min(...result);
};

console.log(solution(nums, operators));
