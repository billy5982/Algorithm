const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => (idx === 0 ? +el : el.split('').map(Number)));

function solution(input) {
  const miro = input.slice(1);
  const limit = input[0];
  let answer = [];
  miro.forEach((y, yIdx) => {
    let cnt = 0;

    y.forEach((x, xIdx) => {
      function checkAxis(axis) {
        let [curX, curY] = axis;
        let x = [1, 0, -1, 0],
          y = [0, 1, 0, -1];
        // 현재 인덱스를 0으로 바꿈
        miro[curY][curX] = 0;
        cnt++;
        x.forEach((el, idx) => {
          let culX = curX + el,
            culY = curY + y[idx];
          if (culX > -1 && limit > culX && culY > -1 && culY < limit) {
            // 1일 때만 해당 노드를 실행
            miro[culY][culX] && checkAxis([culX, culY]);
          }
        });
      }

      if (x === 1) {
        checkAxis([xIdx, yIdx], 0);
        answer.push(cnt);
        cnt = 0;
      }
    });
  });
  return [answer.length, ...answer.sort((a, b) => a - b)].join('\n');
  // 전체 열을 순회해야한다. => 1이라면 해당 다음 버튼을 또 검사해야함.
  // return input;
}

console.log(solution(input));
