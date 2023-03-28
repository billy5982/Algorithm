const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

/*
  1<= N 까지를 순회하며 길이가 M인 수열을 만들어야함
  1,2,3  
  1,3,2 => 중첩이 안되게 해야함. visit 필요
  2,1,3
*/
const sol = (input) => {
  let [N, goalMoney] = input.shift();
  const upperCoin = input.sort((a, b) => b - a);

  let idx = 0;
  let cnt = 0;
  while (goalMoney !== 0) {
    // 만약 가장큰 코인보다 목표치가 크거나 같으면 뺸다
    if (upperCoin[idx] <= goalMoney) {
      goalMoney -= upperCoin[idx];
      cnt++;
    } else {
      // 현재 코인보다 돈이 더작으면 - 이기 때문에 idx를 이동시킨다.
      idx += 1;
    }
  }
  return cnt;
};

console.log(sol(input));
