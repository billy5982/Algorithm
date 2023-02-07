
function solution(n) {
   const numArr = [];
  
    // 0으로 채워진 삼각달팽이의 틀(2차원 배열)을 만들기
    for(let i = 1; i <= n; i++){
        numArr.push(new Array(i).fill(0));
    }
  
    let row=-1, col=0;
  
    // 각 배열에 채울 값
    let curNum = 1;
  
    for(let i = n; i > 0; i-=3){
        for(let j = 0; j < i ; j++) {numArr[++row][col] = curNum++;}
        for(let j = 0; j < i-1 ; j++) {numArr[row][++col] = curNum++;}
        for(let j = 0; j < i-2 ; j++) {numArr[--row][--col] = curNum++;}
    }
   
    // 2차원 배열을 1차원 배열로 변경해서 반환해야함.
    return numArr.flat();
}
