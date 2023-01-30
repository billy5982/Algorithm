function solution(want, number, discount) {
    // today=>10일임.
    // 사이 간격을 splice 혹은 for문해줘야함.
    // 원하는 항목을 객체화 할것.want : number로, 
    // 그리고 discount를 순회하는 데 현재일수에서 10까지 slice를 해줄것.
    // 그다음 객체화를 시켜서 둘이 같은지를 비교 하나라도 같지 않으면 false break slice(i,i+10)
    let buyCnt = 0;
    let wantBuy = want.reduce((acc,cur,idx)=>{
        if(!acc[cur]){
            acc[cur] = number[idx]
        }
        return acc
    },{})
    for(let i=0; i<discount.length; i++){
        let flag = false;
        // i째부터 열흘 간 세일하는 항목         
        const saleList = discount.slice(i,i+10).reduce((acc,cur)=>{
        if(!acc[cur]){
            acc[cur] = 1;
        }else{
            acc[cur]+=1;
        }
        return acc
    },{}) 
        let saleListKey = Object.keys(saleList)
        // 1차 검사 saleListKey에 할인받고자하는 항목이 하나라도 없으면
        for(let key in wantBuy){
            if(!saleListKey.includes(key)){
                flag = false
                break;
            }
            if(saleList[key]){
                if(saleList[key]!==wantBuy[key]){
                    flag = false
                    break;
                }else{
                    flag = true;
                }
            }
        }
        if(flag){
            buyCnt++
        }
        
    }
    
    return (buyCnt)
}