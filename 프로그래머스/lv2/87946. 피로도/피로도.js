function solution(k, dungeons) {
     let answer = -1;
  const dfs = (k, dungeons, prev) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const copy = [...dungeons].map((v) => [...v]);
      copy[i] = [null, null];
      dfs(k - use, copy, prev + 1);
    }
    return (answer = Math.max(prev, answer));
  };
  dfs(k, dungeons, 0);
  return answer;
    
//     let answer = []
//     let bools = new Array(dungeons.length).fill(false)
    
//     function recursive(gauge,count,getCnt){
//         answer.push(count)
//         for(let i =0; i<dungeons.length; i++){
//             if(bools[i])continue
//             if(gauge>=dungeons[i][0]){
//                 bools[i] = true
//                 recursive(k-dungeons[i][1],count+1,getCnt+1)
//                 bools[i] = false
//             }else{
//                 return
//             }
//         }
//     }
    
//     for(let j =0; j<dungeons.length; j++){
//         if(k>=dungeons[j][0]){
//         bools[j] = true;
//         recursive(k-dungeons[j][1],1,1)
//         bools[j] = false
//         }
//     }
    
//     return (Math.max(...answer))
}
