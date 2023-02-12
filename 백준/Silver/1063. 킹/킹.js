const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n');

/*
  킹과 돌은 같이 움직인다. 둘중하나라도 바깥으로 튀어나가면 해당 움직임은 건너뛴다. && 연산자 사용
  문자 변환 : (String.fromCharCode(65));
  숫자 변환 : 'A'.charCodeAt() - 65;
  입력 : [숫자][알파벳]
  [숫자][알파벳] => 변환은 알파벳+숫자로
*/
// console.log(input);

function checkZero(arr) {
  return arr.filter((el) => el >= 0).length === 2 ? true : false;
}

// 좌표가 음수가 아니라면 음수가 아닌 좌표를 리턴
// 좌표가 음수라면 기존 좌표 리턴
function checkAxis(kingStone, moveArrs) {
  let arr = [];

  for (let i = 0; i < 2; i++) {
    let sample = [];
    for (let j = 0; j < 2; j++) {
      sample.push(kingStone[i][j] + moveArrs[j]);
    }
    arr.push(sample);
  }
  // 돌과 킹이 같은 위치 라면 돌도 킹과 같은 위치로 이동시켜야함.
  let flag = arr[0].filter((el, idx) => el === kingStone[1][idx]).length;
  if (flag !== 2) {
    //2일 경우엔 둘이 같은 경우임 따라서 이동시켜줘야함.
    // 만약 위치가 같지 않다면. stone은 가만히 있어야됨.
    arr = [arr[0], kingStone[1]];
  }

  let filteredLimit = arr.filter((el) => {
    return el.filter((el2) => el2 >= 0 && el2 <= 7).length === 2;
  }).length;

  if (filteredLimit === 2) {
    return arr;
  } else {
    return kingStone;
  }
}

function solution(input) {
  // 좌표 세팅 8*8
  // const chess = new Array(8).fill([]).map((el) => new Array(8).fill(true));
  const moveAct = input.slice(1);
  let [king, stone, moveCnt] = input[0].split(' ').map((el) => (isNaN(+el) ? el : +el));
  // let king, stone, moveCnt;

  king = [+king[1] - 1, king[0].charCodeAt() - 65];
  stone = [+stone[1] - 1, stone[0].charCodeAt() - 65];
  const alpha = ['R', 'L', 'B', 'T', 'RT', 'LT', 'RB', 'LB'];
  const axis = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
    [+1, 1],
    [+1, -1],
    [-1, 1],
    [-1, -1],
  ];

  let axisObj = {};
  alpha.forEach((el, idx) => {
    axisObj[el] = axis[idx];
  });

  for (let el of moveAct) {
    let result = checkAxis([king, stone], axisObj[el]);
    king = result[0];
    stone = result[1];
  }

  const maps = (el, idx) => (idx === 1 ? String.fromCharCode(el + 65) : el + 1);
  king = king.map(maps).reverse().join('');
  stone = stone.map(maps).reverse().join('');
  return king + '\n' + stone;
}

console.log(solution(input));
