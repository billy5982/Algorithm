function solution(number, limit, power) {
    /*  자기 자신 번호의 약수의 개수에 해당하는 공격력 무기 제한
     이웃나라와의 협약에 의해 공격력 제한수치 정해야함. 제한 수치보다 큰 공격력 가진 무기 기사는 협약기관에서 
     정한 공격령을 가지는 무기 구매
     공격력 1당 1kg의 철 필요
    */
    let sum =0;
    for(let i=1; i<=number; i++){
        let lastNum = 0
        let count = 0;
        for(let j=1; j*j<i; j++){
            if(i%j===0)count+=2
            lastNum = j   
        }
        // 약수가 홀수개일수도 있기 때문에 lastNum을 기록         
        lastNum += 1
        if(i%(lastNum*lastNum)===0)count++
        if(count>limit) count = power
        sum+=count
    }
    return sum;
}