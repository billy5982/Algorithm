const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((x) => (isNaN(+x) ? x : +x)) : +el));

/*
    문제
      이동한 칸에 사과(1)가 있으면 꼬리는 그자리에 있는다 . (2)로 표시
      이동한 칸에 사과(0)가 없으면 꼬리가 위치한 칸을 비운다. (2)로 표시된 곳을 지워야 함.
      시간에 따라 이동 방향이 바뀌어야 되는 경우가 존재한다. D는 시계방향, L은 반시계 방향이다.

      벽, 몸에 충돌하면 게임을 끝난다. 도착지가 2이거나 계산한 값이 밖으로 이탈했을때.
      이동은 이동방향으로만 전진한다. 이동 후 방향전환이 이루어진다.
*/

const miroLeng = input.shift();
const miroMap = new Array(miroLeng).fill().map((el) => new Array(miroLeng).fill(0));

// 상 우 하 좌
const axisX = [0, 1, 0, -1];
const axisY = [-1, 0, 1, 0];

function directionChange(direct, c) {
  // c = "L","D"에 따라 반시계, 시계 방향이 결정된다.
  let nw = 0;
  switch (c) {
    case 'L':
      if (direct - 1 < 0) nw = 3;
      else nw = (direct - 1) % 4;
      break;
    case 'D':
      nw = (direct + 1) % 4;
      // console.log(nw);
      break;
  }
  return nw;
}

// 시계 방향이면 현재 위치에서 시계방향으로 이동하는 idx가 나온다.
// console.log(directionChange(1, 'D'));
const appleN = input.shift();
const appleAxis = [];
for (let i = 0; i < appleN; i++) {
  appleAxis.push(input.shift());
}
const directionN = input.shift();
const directions = [];
for (let i = 0; i < directionN; i++) {
  directions.push(input.shift());
}

// times에 현재 시간이 있을 경우 이동 방향을 바꾼다.
const times = directions.reduce((acc, cur) => {
  acc[cur[0]] = cur[1];
  return acc;
}, {});

// 사과 위치 세팅
for (let el of appleAxis) {
  const [y, x] = el;
  miroMap[y - 1][x - 1] = 1;
}

function solution() {
  let direct = 1; // 초기 방향은 우측이다.
  let time = 1;
  const visitedQueue = [[0, 0]];
  let tails = [`${0}/${0}`];
  while (true) {
    let shifted = visitedQueue.shift();
    // 현재 위치를 이용시켜야함. 현재 위치를 이동시키고 이동시킨 위치가 1이라면 그전 위치를꼬리로 보관.
    let [curY, curX] = [...shifted];
    let [prevY, prevX] = [...shifted];
    curY += axisY[direct];
    curX += axisX[direct];

    if (curY >= 0 && curX >= 0 && miroLeng > curY && miroLeng > curX && !tails.includes(`${curY}/${curX}`) && miroMap[curY][curX] !== 2) {
      // 1이라면? 사과를 먹으니깐 꼬리가 길어진다.
      if (miroMap[curY][curX] !== 1) {
        if (tails.length > 0) {
          const [tailY, tailX] = tails.shift().split('/');
          miroMap[tailY][tailX] = 0;
        }
      }
      tails.push(`${curY}/${curX}`);
      miroMap[curY][curX] = 2;
      // 다음 방문지를 저장한다.
      visitedQueue.push([curY, curX]);
      if (times[time]) {
        direct = directionChange(direct, times[time]);
      }
      time += 1;
    } else {
      return time;
    }
  }
}

console.log(solution());
