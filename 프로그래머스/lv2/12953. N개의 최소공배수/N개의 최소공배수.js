function solution(arr) {
    /*
        유클리드 호제
        만약 a,b가 존재할 때 a>b라면 a%b === 0, a%b !== 0 
        최소 공배수는 두수 곱 / 최대 공약수
        for loop을 이용해서 두수의 최소 공배수를 구하고 넘김
        그다음 수와 현재 최소공배수의 최소 공배수를 구해야함(반복되는것.)
    */
    let num1 = arr[0]; // 해당 수를 다음수로 넘어가는 수로 만들것.
    let a = num1;

    for(let i=1; i<arr.length; i++){
    let GCD = 0;
    let LCM = 0;
    
    let b = arr[i];
    // 최대 공배수를 구하는 과정
    if(a>b){
        GCD = getGCD(a,b)
    }else{
        GCD = getGCD(b,a)
    }
    
    LCM = (a*b)/GCD
    a = LCM
    
    }
   return a
}
function getGCD(a,b){
    let remainder = a%b
    if(remainder === 0) return b
    return getGCD(b,remainder)
}