const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((x) => (isNaN(+x) ? x : +x)) : +el));

/*
    백트래킹. 
    재귀 함수를 통해 순회한다.
    1과 무조건 팀인 사람을 골라야한다.
    
    재귀 함수의 조건은
    재귀함수의 시작은 무조건 1로 시작한다.
    다음 재귀함수에서는 방문한 곳은 재방문 하지 않는다.
    재귀함수의 종료조건 N/2 === arr.length;
    종료 조건에 도달하면? 뽑힌 1팀에서 뽑히지 않은 팀원을 찾아서 점수를 계산해야한다.


    점수 계산식.
    2중 for문을 돈다.
    현재 케이스는 continue 다른 케이스 일경우 [i][j]를 더해준다.
*/

const N = input.shift();

const getTeamPower = (teams) => {
  let power = 0;
  for (let rol of teams) {
    for (let col of teams) {
      power += input[rol][col];
    }
  }
  return power;
};

const solution = (input) => {
  const peoples = new Array(N).fill(0).map((_, idx) => idx);

  const team1Captain = peoples[0];

  // const completedTeam = new Array(N - 1).fill(false);

  let min = Number.MAX_SAFE_INTEGER;
  function recursion(
    arr,
    idx
    // ,visited
  ) {
    if (arr.length === N / 2) {
      // console.log(arr);
      let team1Power = getTeamPower(arr);
      const getTeam2 = peoples.filter((el) => !arr.includes(el));
      let team2Power = getTeamPower(getTeam2);

      let powerDiff = Math.abs(team1Power - team2Power);

      min = Math.min(min, powerDiff);

      return;
    }
    // console.log(idx);
    for (let i = idx; i < peoples.length; i++) {
      recursion([...arr, i], i + 1);
      /*
      수정 식 모든 수는 그 전수를 제외한다 왜냐면 이미 계산이 되었을거니깐.
       따라서 그 이후 수부터 진행하도록 idx를 추가한다.
       이전식 제거 사유 시간초과..
       if (completedTeam[i]) continue;
       completedTeam[i] = true;
       // completed fasle로 방문 노드를 초기화 해주면, 중복된 숫자도 계산되게 된다.
       // 따라서 재귀함수마다 고유의 방문노드를 배치해준다. => 시간 초과 발생..
       recursion([...arr, peoples[i]]);
       completedTeam[i] = false;
       */
    }
  }
  recursion([team1Captain], 1);

  return min;
};

console.log(solution(input));
