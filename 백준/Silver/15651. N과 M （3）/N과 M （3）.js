const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

/*
  1<= N 까지를 순회하며 길이가 M인 수열을 만들어야함
  1,2,3  
  1,3,2 => 중첩이 안되게 해야함. visit 필요
  2,1,3
*/
const sol = (input) => {
  const [N, M] = input;

  const visit = new Array(N).fill(false);
  const answer = [];
  //  숫자계산 시 인덱스로 계산해야하기 때문에 방문지 확인은 -1을 이용
  const dfs = (arr) => {
    if (arr.length === M) {
      answer.push(arr.join(' '));
      return;
    }
    if (arr.length < M) {
      for (let i = 1; i <= N; i++) {
        // 방문한 노드라면
        dfs([...arr, i], i);
      }
    }
  };

  dfs([]);

  return answer.join('\n');
};

console.log(sol(input));
