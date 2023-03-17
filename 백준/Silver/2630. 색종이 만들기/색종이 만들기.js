const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((e) => +e) : +el));

const N = input.shift();

// 정사각형으로 만들어야한다.
// 큰 사각형 -> 전체 확인 -> 0 또는 arr.length랑 같다면? 1 또는 0 을 증가
// 가장 작은 사각형 arr.length === 1 arr[0] 증가
// 4분할 arr를 넣어야함.
// 4분할 arr의 합이 0 혹은 arr.length 와 같다면 리턴한다.
const sol = (n, input) => {
  let answer = {
    0: 0,
    1: 0,
  };
  function dfs(arr) {
    if (arr.length <= 1) {
      answer[arr[0]] += 1;
      return;
    }

    let sum = arr.reduce((acc, cur) => acc + cur.reduce((ac, cu) => ac + cu, 0), 0);
    let arrLeng = arr.reduce((acc, cur) => acc + cur.length, 0);
    if (sum === 0 || sum === arrLeng) {
      answer[sum > 0 ? 1 : 0] += 1;
      return;
    } else {
      // 4분할
      let topArr = arr.slice(0, arr.length / 2);
      let leftTop = topArr.map((el) => el.slice(0, el.length / 2)),
        rightTop = topArr.map((el) => el.slice(el.length / 2));

      let btArr = arr.slice(arr.length / 2);
      let leftbt = btArr.map((el) => el.slice(0, el.length / 2)),
        rightbt = btArr.map((el) => el.slice(el.length / 2));

      let arrs = [leftTop, rightTop, leftbt, rightbt];

      for (let el of arrs) {
        if (el.length > 0) dfs(el);
      }
    }
  }

  dfs(input);

  // console.log(answer);

  return Object.values(answer).join('\n');
};

console.log(sol(N, input));
