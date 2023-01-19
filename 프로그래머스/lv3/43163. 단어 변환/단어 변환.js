function solution(begin, target, words) {
    if(!words.includes(target))return 0
    let answer = [];
    let wordFills = Array(words.length).fill(false)
    let targetFill = Array(target.length).fill(false)
    // 반복 조건 for(let i=0; i<targetSplit)을 돌면서 문자 하나만 바꿨을 때 무언가가 있는 지 확인한다.
    // 만약 문자가 같다면 숫자를 리턴한다.
    function dfs(cur,count,idx,wordFill){
        
        if(cur===target){
            answer.push(count)
            // wordFill[idx] = false
            return;
        }
        for(let i=0;i<targetFill.length;i++){
            // 변환된 자리는 없애준다.
            let changeWord = cur.split('')
            changeWord.splice(i,1)
            changeWord = changeWord.join('')
            // word 에서 i의 위치를 자른것 중에 같은 것이 있는 지가 필요함.
            for(let j=0; j<wordFill.length; j++){
                // 이미 사용한 것이면 넘기기
                if(wordFill[j])continue;
                let vsWord = [...words[j]]
                vsWord.splice(i,1); 
                vsWord = vsWord.join('')
                if(changeWord===vsWord){
                    wordFill[j] = true;
                    dfs(words[j],count+1,j,[...wordFill])
                    wordFill[i] = false
                }
            }
            
        }
    }
    dfs(begin,0,-1,wordFills)
    return Math.min(...answer)
}