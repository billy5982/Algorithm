// 백준 11723번 node.js는 메모리 제한으로 풀 수 없는 문제.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const combinations = function* (elements, selectNumber) {
  for (let i = 0; i < elements.length; i++) {
    if (selectNumber === 1) {
      yield [elements[i]];
    } else {
      const fixed = elements[i];
      const rest = elements.slice(i + 1);

      for (const a of combinations(rest, selectNumber - 1)) {
        yield [fixed, ...a];
      }
    }
  }
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [N, K] = input.splice(0, 1)[0].split(' ').map(Number);
  K -= 5;

  const words = input.map((el) => el.split('').splice(4, el.length - 8));
  const defaultStr = ['a', 'n', 't', 'i', 'c'];
  if (K < 0) {
    console.log(0);
    return;
  } else if (K === 0) {
    const isAble = [...defaultStr];
    let count = 0;
    word: for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (!isAble.includes(words[i][j])) {
          continue word;
        }
      }
      count++;
    }

    console.log(count);
    return;
  } else if (K === 26) {
    console.log(N);
    return;
  } else {
    const restAlpha = ['b', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

    let maxValue = 0;
    for (const a of combinations(restAlpha, K)) {
      const isAble = [...defaultStr, ...a];
      let count = 0;
      word: for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
          if (!isAble.includes(words[i][j])) {
            continue word;
          }
        }
        count++;
      }

      if (maxValue < count) {
        maxValue = count;
      }
    }
    console.log(maxValue);
  }
});

// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((el) => {
//     if (el.includes(' ')) {
//       return el.split(' ').map((x) => (isNaN(+x) ? x : +x));
//     }
//     return el;
//   });
// // .map(
// //   (el) => (el.includes(' ') ? el.split(' ').map(Number) : el)
// //   // 숫자
// //   // (el.includes(' ') ? el.split(' ').map((x) => (isNaN(+x) ? x : +x)) : +el)
// // );

// /*
//     백트래킹.
//     재귀 함수를 통해 순회한다.
//     1과 무조건 팀인 사람을 골라야한다.

//     재귀 함수의 조건은
//     재귀함수의 시작은 무조건 1로 시작한다.
//     다음 재귀함수에서는 방문한 곳은 재방문 하지 않는다.
//     재귀함수의 종료조건 N/2 === arr.length;
//     종료 조건에 도달하면? 뽑힌 1팀에서 뽑히지 않은 팀원을 찾아서 점수를 계산해야한다.

//     점수 계산식.
//     2중 for문을 돈다.
//     현재 케이스는 continue 다른 케이스 일경우 [i][j]를 더해준다.
// */
// const [words, learnLimit] = input.shift();

// const solution = (input) => {
//   const fixed = ['a', 'n', 't', 'i', 'c'];
//   let answer = [];
//   let originNum = 0;
//   const alphabets = new Array(26).fill(false);

//   // 초기값 세팅
//   fixed.forEach((el) => {
//     alphabets[el.charCodeAt(el) - 97] = true;
//   });

//   const words = input.map((el) => {
//     const sliced = el.slice(4, -4).split('');
//     // console.log(sliced);
//     const filtered = sliced.filter((el) => !fixed.includes(el));
//     return filtered.join('');
//   });

//   // 배워야할 단어들.
//   let setting = new Set();
//   for (let el of words) {
//     [...el].forEach((str) => {
//       if (!setting.has(str)) {
//         setting.add(str);
//       }
//     });
//   }

//   // 단어가 들어온다.
//   // 단어를 통해 베이스를 만들 수 있는 지 확인한다. 총 몇개의 단어를 만들 수 있는 지 순회한다.
//   //  base를 만들 수 있다면 true를 반환한다.
//   // 만약 횟수를 초과했을 경우에는 false를 반환한다.
//   setting = Array.from(setting);
//   let settingVisit = new Array(setting.length).fill(false);

//   function findWord(el, cnt, originStr) {
//     // 단어가 들어온다. 단어를 만들 수 있다면 해당 단어는 제거한다. 개수를 한 수라고 표시하자.

//     let wordCheck = el.join('');
//     if (cnt === learnLimit - 5) {
//       // 계산이 필요함.
//       const filteredArr = originStr.filter((el) => !wordCheck.includes(el));
//       return answer.push(originStr.length - filteredArr.length + originNum);
//     }
//     // 몇개를 제거할 수 있는 지 확인한다. 전부를 제거할 수 있다면 함수를 끝낸다.
//     const filteredArr = originStr.filter((el) => !wordCheck.includes(el));
//     if (filteredArr.length === 0) {
//       answer.push(originStr.length);
//       return;
//     } else {
//       for (let i = 0; i < setting.length; i++) {
//         if (settingVisit[i]) continue;
//         settingVisit[i] = true;
//         findWord([...el, setting[i]], cnt + 1, originStr);
//       }
//     }
//   }

//   // 연산전에 원본 Array를 확인한다. 배워야 할 단어가 0이라면 해당 단어는 배울 필요가 없다.
//   const removeOrigin = words.filter((word) => {
//     originNum = word.length === 0 ? originNum + 1 : originNum;
//     return word.length !== 0;
//   });

//   // words는 각각의 단어들을 배우면 통과할 수 있다.
//   for (let i = 0; i < setting.length; i++) {
//     if (learnLimit > 5) {
//       settingVisit[i] = true;
//       findWord([setting[i]], 1, [...removeOrigin]);
//       settingVisit[i] = false;
//     }
//   }

//   answer.push(originNum);

//   return Math.max(...answer);
// };

// console.log(solution(input));
