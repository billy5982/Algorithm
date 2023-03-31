const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

/*
  그리디 알고리즘
  다음 주유소가 현재 주유소보다 싼지 확인해야된다.
  싸다면 해당 주유소까지 가는 거리만 주유하면 되고 현재 위치를 이동시킨다.
  주유소가 이동됐을 때 다음수를 순회한다.
  만약 작은수가 나왔다면 break 

*/
const sol = (input) => {
  //만약 현재 인덱
  let [N, meter, oils] = input;
  let curIdx = 0;
  let totalMoney = 0;
  while (curIdx < N - 1) {
    for (let i = curIdx + 1; i < N; i++) {
      // 작다면 해당 지점까지 이동해야함. 해당 지점까지 이동하는 거리 파악해야함
      if (oils[i] < oils[curIdx]) {
        let moveMeter = 0;
        for (let j = curIdx; j < i; j++) {
          moveMeter += meter[j];
        }
        totalMoney += oils[curIdx] * moveMeter;
        curIdx = i;
        break;
      }
      if (i === N - 1) {
        // 최종 도착지 까지 도착했는데도 작은 수를 못찾았다면?
        let moveMeter = 0;
        for (let j = curIdx; j < i; j++) {
          moveMeter += meter[j];
        }
        totalMoney += oils[curIdx] * moveMeter;
        curIdx = i;
      }
    }
  }
  return totalMoney;
};

console.log(sol(input));
