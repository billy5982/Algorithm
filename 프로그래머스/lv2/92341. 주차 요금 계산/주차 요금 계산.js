/* 
    출차 내역이 없을 경우에는 23:59으로 할것
    형태 {
        차번호 : {
            in : 
            out : 
        } 형태로 만들어볼것. 아웃은 일단 23:59로 세팅 하지만 out이 나온다면 해당 값으로 바꾸기
    }
        23:59면 23*60+59 형태로 보관할 것. 계산하기 쉽게
        기본시간 180분까지는 5000원, 그이후 10분당 600원씩 올라감
        180을 - 했을 때 양수로 남아있다면, 10분당 600원씩 기록할것
    */
function solution(fees, records) {
    let fullOutTime = 23*60+59
    const [basicTime,basicMoney,min,minPay] = fees
    // 최종 배열로 바꿨을 떄 홀수라면, 23:59분을 추가해줘야 함.  
    const carsVisited = records.reduce((acc,cur,idx)=>{
        let [time,carNum,status] = cur.split(' ')
        let [hour,min] = time.split(':')
        let totalTimes = (+hour*60) +(+min)
        
        if(!acc[carNum]&&status==='IN'){
            acc[carNum] = {
                in : totalTimes
            }
        }else if(acc[carNum]&&status==='IN'){
            // 다시 들어온 차일 경우에             
            acc[carNum] = {
                ...acc[carNum],
                [`in${idx}`] : totalTimes
            }
        }
        // 두번 이상 들어왔다 나가는 차량일 경우        
        if(acc[carNum]?.out && status==='OUT'){
            acc[carNum] ={
                ...acc[carNum],
                [`out${idx}`] : totalTimes
            }
        }else if(status==='OUT'){
            acc[carNum] = {
                ...acc[carNum],
                out : totalTimes
            }
        }
        return acc
    },{})
    
    const sortCars = Object.entries(carsVisited).sort((a,b)=>+a[0]-+b[0]).map((el)=>{
        let setCar = Object.entries(el[1])
        let timeSet = setCar.length % 2 !== 0
        if(timeSet){
            setCar[setCar.length] = ['out',fullOutTime]
        }
        // 시간 계산 해야함         
        let duringTime = 0;
        setCar.forEach((el)=>{
            if(el[0].includes('in')){
                duringTime+=el[1]
            }else{
                duringTime-=el[1]
            }
        })
        return Math.abs(duringTime)-basicTime
    })
    const payMoney = sortCars.map((el)=>{
        if(el<=0){
            return basicMoney;
        }else{
            return basicMoney+Math.ceil(el/min)*minPay
        }
    })
    return (payMoney)
    // return answer;
}