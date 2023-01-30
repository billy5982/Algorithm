const solution = (dirs) => {
  let coordinates = {
    x: 0,
    y: 0
  };

  return dirs.split("").reduce((acc, dir) => {
    let { x, y } = coordinates;

    switch (dir) {
      case "U":
        if (y === 5) break;
        acc.add(`${x}/${y + 0.5}`);
        coordinates.y++;
        break;
      case "D":
        if (y === -5) break;
        acc.add(`${x}/${y - 0.5}`);
        coordinates.y--;
        break; 
      case "R":
        if (x === 5) break;
        acc.add(`${x + 0.5}/${y}`);
        coordinates.x++;
        break;
      case "L":
        if (x === -5) break;
        acc.add(`${x - 0.5}/${y}`);
        coordinates.x--;
        break;
    };

    return acc;
  }, new Set()).size;
};

// function solution(dirs) {
//     let origin = [0,0];
//     let visted = []
 
//     // 지나간 좌표에 지점을 저장해야한다.     
//     for(let i=0; i<dirs.length; i++){
//         let curMove = dirs[i]
        
//         if(curMove==='U'&&origin[1]+1<6){
//             origin[1] = origin[1]+1
//             visted.push(`${origin[0]}/${origin[1]-0.5}`)
//         }else if(curMove==='D'&&origin[1]-1>-6){
//             origin[1] =origin[1]- 1
//             visted.push(`${origin[0]}/${origin[1]-0.5}`)
//         }else if(curMove==='L'&&origin[0]-1>-6){
//             origin[0] =origin[0]- 1
//             visted.push(`${origin[0]-0.5}/${origin[1]}`)
//         }else if(curMove==='R'&&origin[0]+1<6){
//             origin[0] =origin[0]+ 1
//             visted.push(`${origin[0]+0.5}/${origin[1]}`)
//         }
        
//         // let curXY = XY[origin[1]][origin[0]]
//         // if(!curXY){
//         //     count++;
//         //     XY[origin[1]][origin[0]] = true
//         // }
     
//     }
//     const leng = visted.reduce((acc,cur)=>{
//     if(acc.includes(cur)){
//         return acc;
//     }else{
//         acc.push(cur)
//         return acc
//     }
//    },[])
//     return leng.length
// }

// // function solution(dirs) {
// //     let origin = [5,5];
// //     let visted = []
 
// //     // 지나간 좌표에 지점을 저장해야한다.     
// //     for(let i=0; i<dirs.length; i++){
// //         let curMove = dirs[i]
        
// //         if(curMove==='U'&&origin[1]+1<6){
// //             origin[1] = origin[1]+1
// //             visted.push(`${origin[0]}/${origin[1]-0.5}`)
// //         }else if(curMove==='D'&&origin[1]-1>-6){
// //             origin[1] =origin[1]- 1
// //             visted.push(`${origin[0]}/${origin[1]-0.5}`)
// //         }else if(curMove==='L'&&origin[0]-1>-6){
// //             origin[0] =origin[0]- 1
// //             visted.push(`${origin[0]-0.5}/${origin[1]}`)
// //         }else if(curMove==='R'&&origin[0]+1<6){
// //             origin[0] =origin[0]+ 1
// //             visted.push(`${origin[0]+0.5}/${origin[1]}`)
// //         }
        
// //         // let curXY = XY[origin[1]][origin[0]]
// //         // if(!curXY){
// //         //     count++;
// //         //     XY[origin[1]][origin[0]] = true
// //         // }
     
// //     }
// //     console.log(visted)
// //    // .reduce((acc,cur)=>{
// //    //  if(acc.includes(cur)){
// //    //      return acc;
// //    //  }else{
// //    //      acc.push(cur)
// //    //      return acc
// //    //  }
// //    // },[])
// //    // console.log(firstVis)
// // }