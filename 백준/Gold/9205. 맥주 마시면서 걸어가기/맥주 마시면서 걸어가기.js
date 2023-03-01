const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

// 맨허튼 거리는 |(현 x) - (과거 x)| + |(현 y) - (과거 y)|
let testCase = input[0];
let originArr = input.slice(1);
const testArr = [];

// 첫 i 가 주어지면 해당 i + 2를 해줘야지 계산 범위가 나온다. splice로 원본 배열을 제거하면서 push 해보자
while (originArr.length > 0) {
  testArr.push(originArr.splice(0, originArr[0] + 3));
}

// 맥주 1박스는 20병 한병당 50m 씩 이동가능. 편의점이 있다면 다시 충전 가능
let beerMove = 20 * 50;
let answer = [];

for (let el of testArr) {
  function solve(arr) {
    let start = arr[1];
    let [endX, endY] = arr[arr.length - 1];

    let store = arr.slice(1);
    let queue = [[...start, 0]];
    let visited = new Array(store.length).fill(false);

    while (queue.length > 0) {
      let [x, y] = queue.shift();

      if (x === endX && y === endY) return 'happy';
      for (let i = 0; i < store.length; i++) {
        if (!visited[i]) {
          if (Math.abs(store[i][0] - x) + Math.abs(store[i][1] - y) <= beerMove) {
            queue.push([store[i][0], store[i][1]]);
            visited[i] = true;
          }
        }
      }
    }
    return 'sad';
  }
  console.log(solve(el));
}
