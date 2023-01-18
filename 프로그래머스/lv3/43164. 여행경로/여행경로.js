function solution(tickets){
    tickets.sort()
    let vis = Array(tickets.length).fill(false);
    let answer =[];
    function dfs(cur,cnt,path){
        if(cnt===tickets.length && answer.length ===0){
            answer = path
            return  
        }
        for(let i=0; i<tickets.length; i++){
            if(vis[i])continue;
            if(tickets[i][0]===cur){
                vis[i] = true
                dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]])
                vis[i] = false;
            }
        }
    }
    dfs("ICN",0,["ICN"])
    return answer
}

// function solution(tickets) {
//     // ICN으로 시작되는 곳을 먼저 찾는다.
//     // Arr[0][0] -> ICN인 곳을 찾는다.
//     // 만약 두군데라면 Sort를 진행해야한다. 알파벳순으로 Sort를 하고 [0][1]을 넣어야 된다.
//     // queue에서 빠진 것들은 다른 answer에 담는다.
//     const answer = [];
//     let queue = ['ICN'];
//     let ticketCopy = tickets.map((el)=>el.map((el2)=>el2))
//     while(queue.length>0){
//         let destination = queue.shift()
//         let ticketsFilter = ticketCopy.reduce((acc,cur,idx)=>{
//             if(cur[0]===destination){
//                 acc.push([...cur,idx])
//             }
//             return acc
//         },[])
        
//         if(ticketsFilter.length >1){
//             ticketsFilter = ticketsFilter.sort((a,b)=>a[1] < b[1] ? -1 : a[1] > b[1]? 1 : 0)
//             // sort를 했는데 해당 도착지에 그다음으로 나아갈 수 없는 경우
//             for(let i=0; i<ticketsFilter.length; i++){
//                 const nextLev = ticketCopy.filter((el)=>el[0]===ticketsFilter[i][1])
//                 if(nextLev.length>0){
//                     ticketCopy[ticketsFilter[i][2]] = [0,0];
//                     queue.push(ticketsFilter[i][1])
//                     break;
//                 }
//             }
//         }else if(ticketsFilter.length ===1){
//             ticketCopy[ticketsFilter[0][2]] = [0,0];
//             queue.push(ticketsFilter[0][1])
//         }
//         answer.push(destination)
//         // if(queue.length===0&&)
//     }
//     return (answer)
// }