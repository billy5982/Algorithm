function solution(s){
    // (()) 괄호가 연속으로 오면 저장해놓고
    // (가 끝나는 순간 )의 숫자를 체크해야한다
    // [(,(], [),] => (()(() , ((, ))의 다음 거를 계속 알고있어야함 넣고 나서 비워줘야함
    // s='()())(()' False
   
    // 틀린이유 배열로 접근해서 unshift와 shift를 사용했기 떄문 또한, 열린괄호와 닫힌괄호로만 이용 마지막 예외 케이스에 걸렸을까?
    // 짝을 맞추는 문제는 열린거 +1 닫힌 거 -1 하고 -1했을 때 음수로 내려가게 된다면 짝이 맞지 않는 것이기 때문에 
 
    if(s[0]===')'||s.length<=1)return false
    let balance = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){ 
            balance+=1;
        }else{ // 갇힌 괄호라면? 일단 해당 배열을 안에 넣고
            balance-=1;
            if(balance<0){
                return false
            }
        }
    }
    return balance!==0 ? false : true
}