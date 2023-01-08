function solution(s) {
    // 스택 방식 이용해보기
    let word = ''
    let fullWord = ''
    for(let el=0; el<s.length; el++){
        if(s[el-1]===' '||el===0){
            word+=s[el].toUpperCase()
        }else if(s[el]===' '){
            word+=' '
        }else{
            word+= s[el].toLowerCase()
        }
    }
    
    
   return word
}