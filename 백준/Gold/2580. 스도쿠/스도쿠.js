const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => {
    if (el.includes(' ')) {
      return el.split(' ').map((x) => (isNaN(+x) ? x : +x));
    }
    return el;
  });

/*
    백트래킹.
    모든 수를 탐색한다. 만약 해당 자리의 수가 0 이라면 3가지의 검사를 거친다.
    
    1. 해당 좌표 x축을 검사한다.
    2. 해당 좌표 y축을 검사한다.
    3. 해당 좌표 3X3을 검사한다.
      x = x/3 * 3 기준 좌표임 For을 통해 3을 증가시키면됨
      y = y/3 * 3 기준 좌표임 For을 통해 3을 증가시키면됨
    
    만약 해당 검사를 통해서도 모두가 원하는 답이 나오지 않는다면
    queue에 보관한다. 보관된 queue는 나중에 while문을 통해 처리한다.
*/

//정답 보여주기
function showAnswer(x) {
  let answer = x.map((v) => v.join(' ')).join('\n');
  console.log(answer);
}

// 비어 있는 부분 찾기
const zero = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] == 0) {
      zero.push([j, i]);
    }
  }
}

//강제종료 어떻게 해야할지 모르겠음..
//그래서 일단 전역변수 하나 만들음
let exit = false;

dfs(0, input);

//dfs
function dfs(cnt, sudoku) {
  if (cnt == zero.length) {
    showAnswer(sudoku);
    exit = true;
    return;
  }
  if (!exit) {
    const [x, y] = zero[cnt];
    for (let i = 1; i < 10; i++) {
      if (check(x, y, i, sudoku)) {
        sudoku[y][x] = i;
        dfs(cnt + 1, sudoku);
        sudoku[y][x] = 0;
      }
    }
  }
  return;
}

//백트래킹 체크
function check(x, y, n, board) {
  //x: column, 가로방향 좌표
  //y: row, 세로방향 좌표
  //n: 현재 확인해야하는 값
  //board: 스도쿠 판.

  for (let i = 0; i < 9; i++) {
    if (board[i][x] == n) return false;
  }
  for (let i = 0; i < 9; i++) {
    if (board[y][i] == n) return false;
  }

  const X = Math.floor(x / 3) * 3;
  const Y = Math.floor(y / 3) * 3;

  for (let i = Y; i < Y + 3; i++) {
    for (let j = X; j < X + 3; j++) {
      if (board[i][j] == n) return false;
    }
  }
  return true;
}
