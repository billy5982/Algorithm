function solution(bridge_length, weight, truck_weights) {
    /*
    다리에 올라갈 수 있을 트럭에 대수 bridge_length
    weight 이하까지의 무개를 견딜 수 있음
    조건
    다리에 올라갈 수 있는 트럭의 대수 Bridge_length;
    다리에 트럭 대수가 weight을 초과 하면 안됨
    bridge_length 만큼 시간이 지나야 한대씩 빠져나갈수 있음
    단위 시간 당 단위 길이만큼 움직일 수 있음 
    카운트가 bridge_length가 되면 다리위에 있는 
        시작 0초 [] []
        시작 1초 [] [7]
        시작 2초 [7] [4]
        시작 3초 []
    */
    const originLength = truck_weights.length;
    const bridgeTruck = []
    const resultTruck = [];
    let count = 0;
    const waitingTruck = new Array(bridge_length)
    while(resultTruck.length !== originLength){
    
    // 다리에 진입한 트럭 무게
    const bridgeInTruck = waitingTruck.reduce((acc,cur)=>acc+cur,0);
    // 우선적으로 도착할 수 있는 트럭을 result에 넣어줘야함
    const TruckOut = waitingTruck.shift();
    // 다리에 빈 자리를 채우는 트럭이 아니라면??    
    if(TruckOut){
        resultTruck.push(TruckOut);
    }
    // 다리에 추가적으로 진입할 수 있다면?   
    if(bridgeInTruck+truck_weights[0]<=weight){
        let goTruck = truck_weights.shift();
        waitingTruck[waitingTruck.length-1] = goTruck;
    }
    // 도착할때마다 shift를 해주기 때문에 자리값을 맞춰줘야함
    waitingTruck.push(false)
    count++;
}
    return count+1
}