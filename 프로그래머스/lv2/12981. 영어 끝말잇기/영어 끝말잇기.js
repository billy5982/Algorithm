function solution(n, words) {
    let arr = []    
    // 1. arr에 words[i]가 없다면 push
    // 2. 있다면 해당 인덱스를 저장, 또는 앞에 사람이 말한거랑 다를경우
    // 2-1. 해당 2번쨰가 걸림. 4명중 2%4 = 2번째, 1%4 = 1번째 
    // 3. 끝까지 존재하지 않는다면 0,0을 배출해야함. 만약 idx를 다 순회했는데 없었다면 이는 탈락자가 나오지 않은것.
    // 4. 현재 idx가 인원수로 나누었을 때 나머지가 0이라면 1바퀴를 순회한것.
    let terms = 1
    let findIdx = 0;
    let flag = false
    for(let i=0; i<words.length; i++){
        // 만약 한바퀴 돌았을 경우 텀 증가
        if(i%n===0) terms+=1
        let word = words[i]
        // 마지막 단어하고 현재 단어의 첫번째가 같지 않을떄?
        if(arr.length>0){
            let lastWord = arr[arr.length-1]
            if(lastWord[lastWord.length-1]!==word[0]){
                findIdx = i
                flag = true
                break
            }
        }
        
        // 순회하는 단어가 없다면 
        if(!arr.includes(word)){
            arr.push(word)
        }else{
        // 단어가 존재한다면?
            findIdx = i
            flag = true
            break
        }
    }
    if(flag){
    return [(findIdx+1)%n===0?n:(findIdx+1)%n,terms-1]
    }else{
        return [0,0]
    }
}