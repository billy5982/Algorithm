function solution(maps) {
    let answer = 1;
    let visited = maps;
    let queue = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    
    queue.push([0, 0]);
    visited[0][0] = 0;
    
    while(queue.length > 0) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if(nx == n - 1 && ny == m - 1) {
                        return ++answer;
                    }
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    
    return -1;
}

// function solution(maps) {
//     // queue에 출발점을 넣는다.
//     // while문에 진입했을 때 queue에 위치를 뺴서 해당 위치에서 가능한 곳을 찾는다. 현재 위치를 계속 기록한다.
//     // 다시 돌아가지 않게 이동된 곳은 0으로 마킹해놓는다.
//     // 나오면 이동수를 추가하고 queue에 다시 넣는다.
//     // queue에 아무것도 없을 때 끝낸다.
//     let map = maps.map((el)=>el.map(el2=>el2))
//     let queue = [];
//     queue[0] = [0,0,1]
//     let cur = [];
//     let dxArr = [1,0,-1,0];
//     let dyArr = [0,-1,0,1];
//     let answer = []
//     let n = maps.length - 1, m = maps[0].length - 1;
//     while(queue.length>0){
//         cur = queue.shift()
//         let [x,y,count] = cur
//         map[x][y] = 0;
//         if(x===n&&y===m){
//            answer.push([x,y,count])
//             break
//        }
//         for(let i=0; i<4; i++){
//             let dx = x+dxArr[i], dy = y+dyArr[i];
//             if(dx>-1&&dy>-1&&dx<=n&&dy<=m&&map[dx][dy]===1){
//                 queue.push([dx,dy,count+1])
//             }
//         }
     
//     }
//     return answer.length>0?answer[0][2]:-1
// }