const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

let arr =[];

for(let i=1;i<=T;i++){
    let ab = input[i].split(' ');
    let ac ={
        N : Number(ab[0]),
        st : ab[1],
    }
    arr.push(ac);
}

solution(T,arr)

function solution(caseT,S){
    
    for(let i=0;i<T;i++){
        let ary = [];
        for(let k=0;k<arr[i].st.length;k++){
        for(let j=0;j<arr[i].N;j++){
            ary.push(arr[i].st[k]);
        }
    }
    console.log(ary.join(''));
}
}