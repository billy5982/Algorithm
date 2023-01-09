function solution(n) {
    // n의 약수중 홀수인 것들이 풀이방법의 개수    
    let answer = []
    let lastNum = 0;
    for(let i=1; i*i<n; i++){
        console.log(i)
        if(n%i===0){
            answer.push(i)
            answer.push(n/i)
        }
        lastNum = i
    }
    lastNum +=1
    if(lastNum*lastNum % n ===0) answer.push(lastNum)
    return answer.filter((el)=>el%2!==0).length
}