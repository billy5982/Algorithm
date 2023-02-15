const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n")
const target = +input[0]
const N = +input[1]
let min = Infinity;
let fine=[];
let handicap = [];
if(N>0){
  handicap = input[2].split(' ').map(v=>+v)
}

function check(num){
  while(true){
    if(handicap.includes(num%10)){
      return false;
    }else{
      num = Math.floor(num/10)
    }
    if(num==0){
      break;
    }
  }
  return true
}

let min1 = Math.abs(target-100);
let min2 = Infinity;

for(let i = 0; i<=999999; i++){
  if(check(i)){
    let newMin = i.toString().length+Math.abs(target-i);
    if(newMin<min2) min2 = newMin;
    else if(newMin>min2){
      break;
    }
  }
}
console.log(Math.min(min1,min2))