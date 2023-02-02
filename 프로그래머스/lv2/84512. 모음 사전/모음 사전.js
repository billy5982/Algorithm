function solution(word) {
    // 5가지를 만들어야함. 5가지 boolean값이 있어야 함. for loop를 돌아야함.5까지 도는?
    // for loop
    let aps = ['A','E','I','O','U']
    let count = 0;
    let flag = false;
    function dfs(str){
        if(str.length===5 || flag) return 
        let makeWord = str
        for(let i = 0; i<aps.length ; i++){
            if(!flag)count++
            makeWord = str + aps[i]
            if(makeWord===word){
                flag = true
                break;
            }else{
                dfs(makeWord)
            }
        }
        
    }
    (dfs(''))
    return (count)
}