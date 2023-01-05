function solution(new_id) {
    // 아이디 알파벳 소문자,숫자,빼기,밑줄,마침표(.)만 쓸수 있음
    // 마침표 (.)은 처음과 끝에 사용할 수 없음, 연속사용 불가
    // 1단계 모든 문자 소문자 치환
    let answer = new_id.toLowerCase().split('')
    let limitCase = new Array(26).fill(97).map((el,idx)=>String.fromCharCode(el+idx))
    limitCase.push('-','_','.')

    // 2단계 특수문자 제거
    let answerFilter = answer.filter((el)=>{

        if(limitCase.includes(el)){
            return true
        }else if(!isNaN(+el)){
            return true
        }else{
            return false
        }
    })

    // 3단계 .이 두번이상 연속된 부분은 .하나로 통일
    let count = 0;
    while(count<answerFilter.length){
        if(answerFilter[count]==='.' && answerFilter[count+1]==='.'){
            answerFilter.splice(count,2,'.')
            count=0;
        }else{
            count ++
        }
    }
  
    // 4단계 처음과 끝에 .이 존재한다면 제거    
    answerFilter = removeDot(answerFilter)
    
    // 5단계 길이가 아예 없다면 a를 삽입,6단계 16개 이상이면 15개로 줄임
    if(answerFilter.length===0){
        answerFilter.push('a')
    }else if(answerFilter.length>=16){
        // 첫과 끝에 존재하는 .을 제거         
        answerFilter = removeDot(answerFilter.slice(0,15))
    }
    
    while(answerFilter.length<3){
        answerFilter.push(answerFilter[answerFilter.length-1])
    }
    
    return answerFilter.join('')
}

function removeDot(answerFilter){
 while(answerFilter[0]==='.'||answerFilter[answerFilter.length-1]==='.'){
        if(answerFilter[0]==='.'){
            answerFilter.splice(0,1)
        }else if(answerFilter[answerFilter.length-1]==='.'){
            answerFilter.splice(answerFilter.length-1,1)
        }
    }
    return answerFilter
}