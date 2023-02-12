const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

/*
   신호등의 개수 : [0][0] 도로의 길이 : [0][1]
   첫 진입시엔 신호등의 모든 색깔 빨간색. -> 진행불가 -> 싸이클이 끝나고 나서야 진행가능.
   줄마다 D R G  D는 신호등의 위치 R : 빨간색 지속 시간 G: 초록불 지속 시간

   시작을 알리는 변수가 필요. 해당 변수가 신호등에 도착했다? 객체에 해당 번호가 있다를 의미
   해당 객체가 있으면 해당 객체의 sign을 확인 빨간색이면 대기 time은 지속적으로 올라감.

   우선적으로 신호의 정보를 저장. false 시점과 true 시점을 확인할것.

   1. 모든 신호등을 빨간 불에서 시작. 빨간불은 false로 지정
   2. false 이면서 해당 시간이면 true로 변경하고 카운트를 다시 0으로 -> true일때도 반대로
   3. sign의 여부를 계속 확인해야함. sign이 fasle일때 현재 시간 % red가 0이라면 신호는 바뀌어야함.
*/
// console.log(input);
function solution(input) {
  let [lightEa, arrive] = input[0];
  let start = 0;
  let time = 0;
  let traffic = {};

  for (let i = 1; i <= lightEa; i++) {
    traffic[input[i][0]] = {
      sign: false,
      green: input[i][2],
      red: input[i][1],
      cnt: 0,
    };
  }

  while (start !== arrive) {
    // 신호등 위치에 도달했을떄
    if (traffic[start]) {
      if (traffic[start]['sign']) {
        start++;
        // delete traffic[start];
      }
    } else {
      start++;
    }
    // 신호등의 변화를 계속 감지해야함.
    for (let key in traffic) {
      // 초록불일때
      traffic[key]['cnt'] += 1;
      if (traffic[key]['sign']) {
        if (traffic[key]['cnt'] === traffic[key]['green']) {
          traffic[key]['sign'] = false;
          traffic[key]['cnt'] = 0;
        }
      } else {
        // 빨간불일때
        if (traffic[key]['cnt'] === traffic[key]['red']) {
          traffic[key]['sign'] = true;
          traffic[key]['cnt'] = 0;
        }
      }
    }
    // console.log(traffic, start, time);
    time++;
  }
  return time;
}
console.log(solution(input));
