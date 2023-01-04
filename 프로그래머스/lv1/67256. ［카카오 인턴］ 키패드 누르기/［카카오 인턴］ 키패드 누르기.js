function solution(numbers, hand) {
    // 키를 찾아주는 함수 
    let answer = '';
    let leftHand = '*';
    let rightHand = '#';
    for(let el of numbers){
        if([1,4,7].includes(el)){
            answer+='L';
            leftHand = el;
            
        }else if([3,6,9].includes(el)){
            answer+='R';
            // 배열 위치에 따라 거리값 계산이 틀려질 수 있음 그래서 -2를 한것             
            rightHand = el-2;
        }else{
            let l = findKey(leftHand);
            let r = findKey(rightHand);
            let middle = findKey(el);
            let leftMove = Math.abs(l[0]-middle[0]) + Math.abs(l[1]-middle[1])
            let rightMove = Math.abs(r[0]-middle[0]) + Math.abs(r[1]-middle[1])
              if (rightMove === leftMove) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
                hand === 'right' ? (rightHand = el, answer += 'R') : (leftHand = el, answer += 'L');
            }else if(rightMove > leftMove) { // 오른손의 거리가 더 멀다면
                answer += 'L';
                leftHand = el;
            }else { // 왼손의 거리가 더 멀다면
                answer += 'R';
                rightHand = el;
            }
        }
    }
   return answer
}

function findKey(num){
    let numberIdx = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
        for(let i=0; i<4; i++){
            for(let j=0; j<3; j++){
                if(numberIdx[i][j]===num){
                    return [i,j]
                }
            }
        }
}