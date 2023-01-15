function solution(n, left, right) {
    let arr =[];
    for(let i=left; i<=right; i++){
        let x = Math.floor(i/n)
        let y = i%n
        arr.push(Math.max(x,y)+1)    
    }
    return arr
    // 런타임 에러
    // const arr = new Array(n*n).fill(0).reduce((acc,cur,idx)=>{
    //     if(idx>=left && idx<=right){
    //         let x = Math.floor(idx/n)
    //         let y = idx%n
    //         acc.push(Math.max(x,y)+1)    
    //     }
    //     return acc
    // },[])
    // const arr = new Array(n*n).fill(0).map((el,idx)=>Math.max(Math.floor(idx/n),idx%n)+1)
    
    return arr
//     dumped core
//     let arr = []
//     for(let i=0; i<n; i++){
//         arr.push(new Array(n).fill(0))
//     }
//     for(let j=0; j<arr.length; j++){
//         for(let k=0; k<arr[j].length; k++){
//             if(j>=k){
//                 arr[j][k] = j+1
//             }else{
//                 arr[j][k] = k+1
//             }
//         }
//     }
//     console.log(arr)
//     arr = arr.reduce((acc,cur)=>acc.concat(cur),[])
    
//     return (arr.slice(left,right+1))
}