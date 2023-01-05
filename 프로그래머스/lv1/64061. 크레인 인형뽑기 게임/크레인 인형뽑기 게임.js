// [1,2,3,4,5]
// [0,0,0,0,0],    1,5,3,5,1,2,1,4       
// [0,0,1,0,3],    
// [0,2,5,0,1],    
// [4,2,4,4,2],    [4,3,1,1]
// [3,5,1,3,1],    
function solution(board, moves) {
    // move를 순회하면서 해당 인덱스의 번호중 제일 위에 있는 것을 0으로 바꾼다. 0으로 바꾸기 전 인덱스는 Moves에 담는다
    const moveArr = [];
    for(let i=0; i<moves.length; i++){
        for(let j=0;j<board.length; j++){
            // 
            const curNum = board[j][moves[i]-1]
            if(curNum){
                board[j][moves[i]-1] = 0
                moveArr.push(curNum)
                break;
            }
        }
    }
    let count = 0;
    let answer= 0;
    while(count<moveArr.length){
      
        if(moveArr[count]===moveArr[count+1]){
            moveArr.splice(count,2)
            answer +=2;
            count = 0;
        }else{
            count++;
        }
    }
    return answer
}