const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x, idx) => (idx !== 0 ? x.split('').map(Number) : +x));

input.shift();
/*
  쿼드 트리
  0으로 압축되있으면 0 1로 압축되있으면 1
  섞여있으면 좌 상,우 상, 좌 하, 우 하  로 나눠서 진행
  나눠질 경우 앞에 (를 추가 끝나면 )으로 닫아줘야함.
  분할 정복 4분할해서 지속적으로 분할 확인이 필요함.
  최종적으로 분할됐을 땐 해당수를 파악해서 종료해야함.
*/
const sol = (input) => {
  const result = [];
  const recursive = (arr) => {
    // breakCase
    if (arr.length <= 1) {
      result.push(...arr[0]);
      return;
    }
    const checkArr = arr.reduce((acc, cur) => acc + cur.reduce((acc1, cur1) => acc1 + cur1, 0), 0);
    let n = arr.length * arr.length;

    if (checkArr === 0 || checkArr === n) {
      return checkArr === 0 ? result.push(0) : result.push(1);
    } else {
      // 분할 작업 시작 분할 될경우 ()를 넣어줘야함
      let top = arr.slice(0, arr.length / 2);
      let bottom = arr.slice(arr.length / 2);

      let lt = top.map((x) => x.slice(0, x.length / 2));
      let rt = top.map((x) => x.slice(x.length / 2));

      let lb = bottom.map((x) => x.slice(0, x.length / 2));
      let rb = bottom.map((x) => x.slice(x.length / 2));

      result.push('(');
      recursive(lt);
      recursive(rt);
      recursive(lb);
      recursive(rb);
      result.push(')');
    }
  };
  recursive(input);
  return result.join('');
};
console.log(sol(input));
