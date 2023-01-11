function solution(s){
    // baabaa
    let arr = []
    
    //스택 식 풀이 후입선출 만약 arr의 무언가가 없다면 s[i]를 push
    for(let i=0; i<s.length; i++){
        if(arr[arr.length-1]===s[i]){
            arr.pop()
        }else{
            arr.push(s[i])
        }
    }
     return arr.length>0?0:1
    // 시간 초과 
    // while(count<copyS.length){
    //     if(copyS[count]===copyS[count+1]){
    //         copyS.splice(count,2)
    //         count = 0
    //         answer++;
    //     }else{
    //         count++
    //     }
    // }
    // return copyS.length>0?0:1
}