const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim();

const solution = (N) => {
  const row = new Array(N).fill(0);
  let cnt = 0;

  function isPossible(L) {
    for (let i = 0; i < L; i++) {
      if (row[L] === row[i]) return false;
      if (Math.abs(row[L] - row[i]) === L - i) return false;
    }
    return true;
  }

  function dfs(L) {
    if (L === N) {
      cnt++;
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (row[L]) continue;
        row[L] = i;
        if (isPossible(L)) dfs(L + 1);
        row[L] = 0;
      }
    }
  }

  dfs(0);
  return cnt;
};
console.log(solution(+input));

/*
   퀸의 움직임을 알아야한다. N개를 배치해야하므로 dfs를 이용
   N X N을 전부 순회할 필요는 없다. 왜냐 0번 열에 위치했으면 0번열엔 더이상 만들 수 없다.
   [2,0,3,1] 0열 2, 1열 0, 2열 3, 3열 1
*/

// 하단은 잘못된 코드...
/*
    백트래킹.
    퀸을 서로 공격할 수 없게 만드는 경우의 수를 찾아야한다.
    해당 자리가 false라면 해당 자리에 퀸을 놓을 수 있다.
    대신 해당 자리에 놓게 되면 중심으로 한칸씩을 아무것도 놓을 수 없다.

    재귀함수 흐름
    전체를 순회한다.
    해당 자리가 false라면 퀸을 놓고 퀸을 놓은 자리에서 다시 또 퀸을 놓을 수 있는 지 확인한다.
    해당 재귀가 끝난다면 뒤로 돌아가서 다음 자리의 퀸을 놓을 수 있는 지 확인해야한다.
    퀸을 놓은 개수가 N에 도달한다면 count+1을 해주고 return 한다.

    false로 변경하기 위한 좌표를 구할 때는 계산한 수를 넘어서면 안된다.
*/

// const solution = (input) => {
//   const chess = new Array(input).fill(false).map((_) => new Array(input).fill(false));

//   // boolean을 입력해서 해당 주변을 false,true값을 조정한다.
//   const calculateAxis = (axis, boolean) => {
//     const [curY, curX] = [...axis];

//     for (let x = 0; x < input; x++) {
//       chess[curY][x] = boolean;
//     }
//     for (let y = 0; y < input; y++) {
//       chess[y][curX] = boolean;
//     }
//     let minY = Math.max(0, curY - curX);
//     let minX = Math.max(0, curX - curY);
//     let maxY = Math.min(input - 1, curY + (input - 1 - curX));
//     let maxX = Math.min(input - 1, curX + (input - 1 - curY));

//     while (minY <= maxY && minX <= maxX) {
//       chess[minY][minX] = boolean;
//       minY += 1;
//       minX += 1;
//     }

//     minY = Math.max(0, curY - (input - 1 - curX));
//     minX = Math.max(0, curX - (input - 1 - curY));
//     maxY = Math.min(input - 1, curY + curX);
//     maxX = Math.min(input - 1, curX + curY);

//     while (minY <= maxY && minX <= maxX) {
//       chess[minY][minX] = boolean;
//       minY += 1;
//       minX += 1;
//     }
//     return;
//   };

//   let count = 0;
//   const dfs = (nums) => {
//     if (nums === input) {
//       count += 1;
//       return;
//     }

//     for (let yidx = 0; yidx < input; yidx++) {
//       for (let xidx = 0; xidx < input; xidx++) {
//         if (!chess[yidx][xidx]) {
//           calculateAxis([yidx, xidx], true);
//           dfs(nums + 1);
//           calculateAxis([yidx, xidx], false);
//         }
//       }
//     }
//   };
//   // console.log(chess);
//   dfs(0);
//   return count;
// };
// console.log(solution(+input));
// // console.log(input);
