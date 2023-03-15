const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => {
    if (el.includes(' ')) {
      return el.split(' ').map((x) => (isNaN(+x) ? x : +x));
    }
    return el;
  });

/*
    백트래킹.
    모든 수를 탐색한다. 만약 해당 자리의 수가 0 이라면 3가지의 검사를 거친다.
    
    1. 해당 좌표 x축을 검사한다.
    2. 해당 좌표 y축을 검사한다.
    3. 해당 좌표 3X3을 검사한다.
      x = x/3 * 3 기준 좌표임 For을 통해 3을 증가시키면됨
      y = y/3 * 3 기준 좌표임 For을 통해 3을 증가시키면됨
*/

/*
  다시 풀어보기  
  백 트래킹 문제는 해를 찾는 도중 해가 될 거 같지 않으면 되돌아가서 해를 다시 찾는다.
  해당 방법은 이전에 많이 사용했다. visit을 사용해서 해당 자리수를 true로 만들고 순회하고 나면 다시 false로 만들었던 것을 기억해내야한다. 
  dfs를 이용한다.

  스도쿠를 이에 적용할 수 있다. 인풋이 0이라면 -> 해당 수에 0을 넣을 수 있는 모든 수를 찾아서 다음으로 넘어간다. 해당 수는 위에 조건에 걸리면 안된다. 0~9까지 중 가로, 세로, 정사각형에 없어야함.
  또 다음 0에서 찾을 수 있는 모든 수를 찾아서 다음으로 넘어간다 -> 다음 수로 만들 수 없다면 다시 돌아와야된다. 
  따라서 해당 수로 실행할 때는 input를 해당 수로 바꾸고, 해당 함수가 끝났을 때는 원래대로 돌려놔야한다. 
*/

const solution = (input) => {
  // 값을 구해야하는 수 0인 곳의 좌표를 반환하는 함수
  const getZerosAxis = (arr) => {
    const zeros = [];
    arr.forEach((rows, col) => {
      return rows.forEach((el, row) => {
        if (el === 0) {
          zeros.push([col, row]);
        }
      });
    });
    return zeros;
  };

  const zeros = getZerosAxis(input);

  const getStandard = (axis) => Math.floor(axis / 3) * 3;

  // 0인 곳에 1~9 까지 넣고 해당 수가 있는 지를 확인해야함. 좌표에 대한 검사가 필요함.
  // value는 1~9의 임의의 숫자.
  const check = (value, axis) => {
    const [y, x] = axis;

    // 가로열 검사. forEach의 리턴을 해당 forEach만 종료시킨다>
    for (let el of input[y]) {
      if (el === value) return false;
    }
    // 세로열 검사.
    for (let el of input) {
      if (el[x] === value) return false;
    }
    let standardX = getStandard(x),
      standardY = getStandard(y);

    // 정사각형 검사
    for (let i = standardY; i < standardY + 3; i++) {
      for (let j = standardX; j < standardX + 3; j++) {
        if (input[i][j] === value) return false;
      }
    }
    // 모든 검사에 통과했을 경우 true가 리턴되어야함. 해당 수를 사용할 수 있기 때문
    return true;
  };
  /*
    dfs 구성 zeros 전체를 순회해야한다. 빈칸을 하나씩 채워야하는 데 임의 수를 넣어서 최종적으로 이동되어야 한다.
    인덱스를 기록하는 무언가가 있어야함. 인덱스에 따라서 진행하는 칸의 좌표를 확인할 수 있음
    true일 경우에는 해당 수로 바꾼다음 다음 빈칸의 검사를 진행해야한다. 
  */
  let fin = false;
  let answer = [];

  const dfs = (count, zeros) => {
    //breakCase 모든 경우의 수를 대입해서 끝까지 들어갔으면 함수를 종료하고 결과물을 출력한다. 한가지만 필요함으로 fin이라는 flag를 둔다
    if (count === zeros.length && !fin) {
      fin = true;
      // 인풋의 모든 좌표를 변경한 상태이기 때문에 마무리에서는 복사하여 단계를 끝낸다.
      answer = input.map((el) => el.map((el2) => el2));
      return;
    }
    if (!fin) {
      let [axisY, axisX] = zeros[count];
      for (let num = 1; num <= 9; num++) {
        // 임의의 수를 넣는다.
        if (check(num, zeros[count])) {
          // console.log(check(num, zeros[count]));
          // 해당 임의의 수가 범위에 걸리지 않는다면 해당 수로 input을 변경하고 다음 함수를 기록한다.
          input[axisY][axisX] = num;
          dfs(count + 1, zeros);
          // 만약 함수가 종료되었을 경우엔 다른 임의수도 대입해볼 수 있게 0으로 변경한다.
          input[axisY][axisX] = 0;
        }
      }
    }
  };

  dfs(0, zeros);

  return answer.map((el) => el.join(' ')).join('\n');
};
console.log(solution(input));
