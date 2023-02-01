function solution(babbling) {
    //  제한 두번이상 반복은 안됨. 연속된 발음만 안되는것, 알파벳 소문자만 가능하기 때문에 
    let posBab = ["aya", "ye", "woo", "ma"]
    let answer = babbling.map((el)=>{
        let word = el;
        for(let el2 of posBab){
            // 현재 발음을 포함하고 있다면? 연속된 경우일땐 -2로 표시해줄것         
            let idx = word.indexOf(el2)
            while(idx!==-1){
                word = word.replace(el2,' ')
                let newidx = word.indexOf(el2);
                if(idx+1===newidx){
                    idx = -1
                }else{
                    idx = newidx
                }
            }
        }
        word = word.split(' ').join('')
        console.log(word)
        if(word.length===0) return 1
        return 0
    }).reduce((acc,cur)=>acc+cur)
    
    return answer;
}