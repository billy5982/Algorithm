function solution(k, m, score) {
    /*
        한상자의 m개씩 담아 포장, 가장 높은 점수가 k 점, 가장 낮은 점수가 p라면 사과 한상자의 가격 p*m
        [1,2,3,1,2,3,1] 이라면 2,3,2,3,으로 구성된 사과 상자를 판매해야 좋은 가격을 얻을 수 있음
        m단위로 사과를 끊고, m단위로 안끊기면 제외, 
    */
    
//  시간초과가 났기 떄문에 m의 배수에 있는 자리라면? 해당 자리의 숫자 * m을 해주면 되지 않을까?
    let sum = 0;
    let appleSort = score.sort((a,b)=>b-a)
    for(let i=m-1; i<appleSort.length; i+=m){
        sum+= appleSort[i]*m
    }
    return sum
//     시간 초과
//     let sortM = []
//     let appleSort = score.sort((a,b)=>b-a)
//     while(appleSort.length>0){
//         sortM.push(appleSort.splice(0,m))
//     }
    
//     const sumPrice = sortM.map((el)=>{
//         if(el.length===m){
//             return el[m-1]*m
//         }else{
//             return 0
//         }
//     })
    
//     return sumPrice.reduce((acc,cur)=>acc+cur)

}