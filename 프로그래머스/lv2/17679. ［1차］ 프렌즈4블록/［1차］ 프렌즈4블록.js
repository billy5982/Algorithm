function solution(m, n, board) {
    let graph = Array.from({length: n}, () => []);
    board.forEach((line, i) => {
        for (let j = 0; j < n; j++) {
            graph[j].push(line[j]);
        }
    });
    const dx = [1, 0, 1];
    const dy = [0, 1, 1];
    while (fullSearch()) {
        graph = graph.map((row) => {
            row.sort((a, b) => {
                if (a === "-") return -1;
                else return 1;
            });
            return row;
        });
    }
    return graph.flatMap(v => v).filter(v => v === "-").length;

    function fullSearch() {
        let isChanged = false;
        const explodes = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                if (graph[i][j] === "-") continue;
                const [x, y] = [i, j];
                const blocks = [];
                for (let k = 0; k < 3; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if (nx < n && ny < m) {
                        if (graph[x][y] === graph[nx][ny]) blocks.push([nx, ny]);
                        else break;
                    } else break;
                }
                if (blocks.length === 3) {
                    explodes.push([x, y]);
                    explodes.push(...blocks);
                }
            }
        }
        if (explodes.length >= 4) {
            isChanged = true;
            explodes.forEach(v => {
                const [x, y] = v;
                graph[x][y] = "-";
            });
        }
        return isChanged;
    }
}

// function solution(m, n, board) {
    
//     // 1. 검사 순서는 우,하,좌,상이다.
//     // 2. break 케이스는 상에 도달했을때 Return을 한다. 현재와 상이 같다면 기준 배열에 넣어준다. 
//     // 3. 기준 배열의 length를 기록하고, 달라졌다면 좌표를 0,0으로 옮긴다 -> 달려졌다는 것은 깨지는 배열이 있다는 것이다.
//     // 3-1. 좌표를 옮기면서 for문을 통해 기준 좌표를 순회한다. 기준 좌표의 있는 것들은 꺠진것이기 떄문에 false 처리.
//     //      한번 더 순회하면서 false 처리가 되있으면 좌표를 하나씩 올라가며 유효 문자가 있을 경우 false랑 바꾼다. 
//     // 3-2. 한템포 돌았을때 만약 깨진게 발생하지 않으면 좌표를 1 이동. 기준길이가 달라지지 않았을때 이동한다. (x가 -1끝에 도달할 경우
//     //      y축을 이동시킨다.)
//     // 4. 좌표가 끝에 도달했을 때는 케이스를 마무리한다.
    
//     const boardArr = board.map((el)=>el.split(''))
//     let currentAxis = [0,0];
//     let moveX = [0,1,1];
//     let moveY = [1,1,0];
//     let answers = [];
//     let flag = false;
//     let count = 0;
    
//     while(currentAxis[0]<=n-2 && currentAxis[1]<=m-2){
        
//         let [curX,curY] = currentAxis;
//         let origin = boardArr[curY][curX]
//         let same = [`${curY}/${curX}`]
//         // console.log(boardArr)
//         if(!boardArr[curY][curX]){
//             if(currentAxis[0]<=n-2 && currentAxis[1]<=m-2){
//                 currentAxis[0] = 0;
//                 currentAxis[1] += 1;
//                 continue
//             }else if(currentAxis[0]<=n-2 && currentAxis[1]<=m-2){
//                 currentAxis[0] = currentAxis[0]+1;
//                 continue
//             }else{
//                 break
//             }
//         }
        
//         for(let i=0; i<moveX.length; i++){
//             let moved = boardArr[curY+moveY[i]][curX+moveX[i]]
//             if(origin===moved){
//                 same.push(`${curY+moveY[i]}/${curX+moveX[i]}`)
//             }
//         }
        
//         if(same.length>=4){
//             answers = [...answers,...same]
//             flag = true;
//         }
        
//         // 바뀌었던 항목이 있다면 한번 더 검사해야되기 때문에 초기화         
//         if(currentAxis[0]===n-2 && currentAxis[1]===m-2 && flag){
//             const setLeng = new Set(answers)
//             count += setLeng.size
//             answers.forEach((el)=>{
//                 boardArr[el[0]][el[2]] = false
//             })
//             // y 축 순회             
//             for(let i = m-1; i>0; i--){
//                 // x 축 순회
//                 for(let j = 0; j<n; j++){
//                     if(!boardArr[i][j]){
//                         for(let k=i-1; k>=0; k--){
//                             if(boardArr[k][j]){
//                                 boardArr[i][j] = boardArr[k][j]
//                                 boardArr[k][j] = false
//                                 break;
//                             }
//                         }
                        
//                     }
//                 }
//             }
//             answers = [];
//             currentAxis = [0,0]
//             flag = false;
//         }else{
//             if(currentAxis[0]===n-2 && currentAxis[1]<=m-2){
//                 currentAxis[0] = 0;
//                 currentAxis[1] += 1;
//             }else if(currentAxis[0]<=n-2 && currentAxis[1]<=m-2){
//                 currentAxis[0] = currentAxis[0]+1;
//             }else{
//                 break
//             }
//         }
//     }
//      return count
// }


//     const boardArr = board.map((el)=>el.split(''))

//     let currentAxis = [0,0]
    
//     let answer = [];
    
//     let axisKeyword = {
//         L : -1,
//         R : +1,
//         U : -1,
//         D : +1,
//     }
    
//     // 사실상 키워드가 필요없음. 해당 자리에서 상하좌우를 살펴보면 되는것.    
//     function dfs(curAxis,arr){
//         if(arr.length === 4){ 
//             answer.push(arr) 
//             return;
//         }

//         let {x,y} = curAxis
//         let moveL = x+axisKeyword[L],moveR=x+axisKeyword[R],moveU = y+axisKeyword[U], moveD =y+axisKeyword[D]

//         //우하좌상으로 검사예정
//         if(boardArr[x][y]===boardArr[moveR][y]){
//             dfs({x:moveR,y:y},[boardArr[x][y]])    
//         }else if(boardArr[x][y]===boardArr[x][moveD]){
//             dfs({x:x,y:moveD},[...arr,boardArr[x][y]])
//         }else if(boardArr[x][y]===boardArr[moveL][y]){
//             dfs({x:moveL,y:y},[...arr,boardArr[x][y]])
//         }else if(boardArr[x][y]===boardArr[x][moveU]){
//             dfs({x:x,y:moveU},[...arr,boardArr[x][y]])
//         }else{
//             return;
//         }
//     } 
    
// //     while(currentAxis[0]<=n-2 && currentAxis[1]<=m-2){
        
// //     }