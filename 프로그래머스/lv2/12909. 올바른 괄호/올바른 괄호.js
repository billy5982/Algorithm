function solution(s){
    // (()) 괄호가 연속으로 오면 저장해놓고
    // (가 끝나는 순간 )의 숫자를 체크해야한다
    // [(,(], [),] => (()(() , ((, ))의 다음 거를 계속 알고있어야함 넣고 나서 비워줘야함
    // s='()())(()' False


    if(s[0]===')')return false
    let arr = [...s]
    let openBracket = 0;
    let closeBracket = 0;
    
    while(arr.length>0){
        if(arr[0]==='('){ 
            arr.shift()
            openBracket+=1;
        }else{ // 갇힌 괄호라면? 일단 해당 배열을 안에 넣고
            arr.shift(); // 이상태에서는 )가 빠진 상태 다음 게 온 상태
            closeBracket+=1;
            if(arr[0]==='('){ // 열리는 괄호라면? 둘을 일단 비교
                if(openBracket===closeBracket){ // 둘이 같다면 초기화 하고 다시 배열을 넣어주기
                    openBracket = 0;
                    closeBracket = 0;
                }else{
                    return false; // 길이가 같지 않다면 false 처리
                }
            }
        }
    }
    
    return openBracket===closeBracket ? true : false
}