const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map((x) => (isNaN(x) ? x : +x)) : [el]));

/*
  stack 구현 
  출력을 한번에 해야 런타임 에러가 발생하지 않음
  reduce를 이용
  배열에 0을 확인 0을 확인해서 해당수의 관련된 명령어를 수행
  각열의 결과값을 acc에 저장
*/
const sol = (input) => {
  const stack = [];
  const result = [];

  for (let el of input) {
    let [action, num] = el;

    switch (action) {
      case 'pop':
        result.push(stack.pop() || -1);
        break;

      case 'size':
        result.push(stack.length);
        break;

      case 'empty':
        result.push(stack.length > 0 ? 0 : 1);
        break;

      case 'top':
        result.push(stack[stack.length - 1] || -1);
        break;

      default:
        num >= 0 ? stack.push(num) : null;
        break;
    }
  }

  return result.join('\n');
};

console.log(sol(input));
