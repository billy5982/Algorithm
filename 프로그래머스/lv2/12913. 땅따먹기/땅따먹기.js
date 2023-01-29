
/*
    각열에 숫자를 바꿔야한다. 전열에 모든수와 현재열 하나의 수를 다 더했을 떄 제일 큰수가 해당 자리를 꾀찬다.
    꾀차는 수는 동일한 열을 더하면 안된다.
    DP는 점화식을 찾아야 하며, 메모를 진행해야한다. 
*/    
function solution(land) {
    for(let i=1; i<land.length; i++){
        // j = 현재열의 수         
        for(let j=0; j<4; j++){
            let plusArr = [];
            // k = 전열의 수            
            for(let k=0; k<4; k++){
                if(j===k)continue;
                plusArr.push(land[i][j]+land[i-1][k])
            }
            let max = Math.max(...plusArr);
            land[i][j] = max
        }
    }
    return Math.max(...land[land.length-1])
}
/*
    한 행씩 밟으면서 내려온다에 집중. 전체를 탐색해야함.
    1을 밟았을 때 2행으로 내려가는 데 밟은 idx를 다시 밟지 못함(다음 for문에선 내려온 idx는 continue)
    2
*/
    // dp문제라 Dfs 로 구현하면 틀림.
    //     const answer = []
    //     function dfs(idx,sum,arrIdx,idx){
    //         if(land.length<=arrIdx){
    //             return answer.push(sum);
    //         }
    //         for(let i=0; i<land[arrIdx].length; i++){
    //             if(i===idx)continue;
    //             dfs(i,sum+land[arrIdx][i],arrIdx+1,idx)
    //         }
    //     }
    //     for(let j=0; j<land[0].length; j++){
    //         dfs(land[0][j],land[0][j],1,j)
    //     }
    // return Math.max(...answer);
// }