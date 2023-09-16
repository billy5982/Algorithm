const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let cnt = 1;

function reverse(str,s,e){
    if(s>=e){
        return 1
    }else if(str[s]!==str[e]){
        return 0
    }else{
        cnt++
        return reverse(str,s+1,e-1)
    }
}
function isPalindrome(s){
    return reverse(s,0,s.length-1);
}

for(let i =1; i<=+input[0]; i++){
    console.log(isPalindrome(input[i]),cnt)
    cnt = 1;
}