function solution(brown, yellow) {
    // 1 48 2 24 3 16 4 12 8 6
   // 1.a+b값의 약수를 구합니다.
   // 2.약수의 개수가 홀수냐 짝수냐에 따른 조건을 추가하고
   //   가운데부터 짝이 맞는 두가지 약수 값의 -2를 하고 곱했을때 b값과 같으면 정답입니다.
    let sum = brown+yellow
    let arr = []
    for(let i=1; i<sum; i++){
        if(sum%i===0){
            let calX = (i-2)
            let calY =(sum/i)-2
            if(calX*calY===yellow){
                arr.push(calX+2,calY+2)
                break
            }
            
        }
    }
    
    return arr.sort((a,b)=>b-a)
}