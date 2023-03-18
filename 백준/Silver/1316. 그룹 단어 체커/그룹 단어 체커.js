const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let word = [];
for(let i=1; i<=N;i++){
    let wr = input[i];
    word.push(wr);
}

  solution(N,word)
  function solution(T,arr){
      let count = 0;
      for(let i=0; i<N;i++){
          let wr = String(word[i]);
          let letter = [];
          let isgroup = true;
          for(let j=0; j<wr.length;j++){
              if(letter.indexOf(wr[j])===-1){ //letter에 wr[j]가 없을경우
                  letter.push(wr[j]);
              }else if(letter.indexOf(wr[j])!==letter.length-1){
                  isgroup = false;
              }
        
          }
          if(isgroup){
              count++;
          }
    
      }
      return console.log(count);
  }
