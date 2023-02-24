const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => (idx === 0 ? el.split(' ').map(Number) : el.split('').map(Number)));

function solution(input) {
  /*
    input의 [0]만큼 사이클이 들어온다.
    우선 input 0 만큼 순회해야함. 순회하면서 해당 하는 만큼 visit + 사이클 조합(new Array를 이용)을 만들어야함
  */
  const [N, M] = input[0];
  const miro = input.slice(1);

  // 시작점을 미리 세팅 x,y 순으로
  let queue = [[0, 0, 0]];
  let count = 0;

  while (queue.length > 0) {
    // console.log(queue);
    let curAxis = queue.shift();
    let [curX, curY] = curAxis;
    if (curY === N - 1 && curX === M - 1) {
      count = curAxis[2] + 1;
      break;
    }
    function checkAxis(axis) {
      let [curX, curY, deps] = axis;
      let x = [1, 0, -1, 0],
        y = [0, 1, 0, -1];
      let result = [];
      // 현재 해당하는 위치에 좌표가 있다면 result에 리턴
      x.forEach((el, idx) => {
        let culX = curX + el,
          culY = curY + y[idx];
        if (culX > -1 && M > culX && culY > -1 && culY < N) {
          miro[culY][culX] && ((miro[culY][culX] = 0), queue.push([culX, culY, deps + 1]));
        }
      });
    }
    checkAxis(curAxis);
  }
  return count;
  // return input;
}

console.log(solution(input));
