
function solution(n) {
    const axis = []
    for(let i = 1; i<=n; i++){
        axis.push(new Array(i).fill(0))
    }
    let cnt = 1;
    let y = -1 , x = 0;
    // 싸이클은 하단, 우측, 우-좌 하-상 순으로 돈다 n/2번 도는 것이라 생각한다.
    // 하단으로 내려가는 시작점은 i가 기준이다.
    for(let i = n; i>0; i-=3){
        for(let j = 0; j<i; j++){axis[++y][x] = cnt++}
        for(let j = 0; j<i-1; j++){axis[y][++x] = cnt++;}
        for(let j =0; j<i-2; j++){axis[--y][--x] = cnt++;}
    }
    
    return axis.flat()
}
