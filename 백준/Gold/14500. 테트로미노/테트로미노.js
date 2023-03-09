const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((x) => (isNaN(+x) ? x : +x)) : +el));

/*
    한 정점에서 dfs를 이용해서 4방향을 들어가면 된다. deps가 총 4일때까지 반복하면 현재 위치에서 모든 도형을 놨을떄가 나온다.(대칭 모양까지 포함)
    그렇지만 ㅗ 모양만은 예외로 운다 따로 함수를 두어야할 것 같다.
    따라서 값을 순회할 때마다 dfs를 실행시킨다.
    dfs 로 하면 안됨... 끝이나버림 return 문과 조건문을 이용하면 deps가 4이후일때 아무것도 실행시키지 않아 return이 아닌 그냥 해당 함수 종료를 할 수 있음
    전체 조건 제한 바깥의 수라면 함수를 종료한다.
    계산이 완료된 숫자를 반환한다.
    1. 전체 dfs
      반복 조건 : 좌표가 들어온다. 해당 좌표를 계산했을 때 범위를 나가지 않아야한다.
      현재 위치에서 4방향을 지속적으로 순회한다.
    2. ㅏ모양 dfs
*/

const solution = (input) => {
  const [limitY, limitX] = input.shift();

  let max = 0;

  const find4 = (axisArr, deps, num) => {
    // 우 상 좌 하
    if (deps === 4) {
      // console.log('hi');
      if (max < num) {
        max = num;
      } else {
        max = max;
      }
    }

    let [curY, curX] = axisArr;
    const axisX = [1, 0, -1, 0];
    const axisY = [0, -1, 0, 1];
    if (deps < 4) {
      for (let i = 0; i < axisX.length; i++) {
        let calX = curX + axisX[i],
          calY = curY + axisY[i];
        if (calX >= 0 && calX < limitX && calY >= 0 && calY < limitY && input[calY][calX] !== false) {
          let nb = num + input[curY][curX];
          let origin = input[curY][curX];
          input[curY][curX] = false;
          find4([calY, calX], deps + 1, nb);
          input[curY][curX] = origin;
        }
      }
    }
    // 계산에 실패하면 0을 리턴
    return 0;
  };

  const find1 = (currentAxis) => {
    const axis = [
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [-1, 1],
        [0, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, -1],
      ],
    ];

    let [curY, curX] = currentAxis;

    for (let i = 0; i < axis.length; i++) {
      let sum = [];
      for (let moveEl of axis[i]) {
        let [moveY, moveX] = moveEl;
        let calX = curX + moveX,
          calY = curY + moveY;

        if (calX >= 0 && calX < limitX && calY >= 0 && calY < limitY) {
          sum.push(input[calY][calX]);
        }
      }
      if (sum.length === 4) {
        let calculated = sum.reduce((acc, cur) => acc + cur, 0);
        if (max < calculated) {
          max = calculated;
        }
      }
    }
  };

  input.forEach((y_, idxY) => {
    y_.forEach((_, idxX) => {
      // console.log('hi');
      find4([idxY, idxX], 0, 0);
      find1([idxY, idxX]);
    });
  });

  return max;
};

console.log(solution(input));
