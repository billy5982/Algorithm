// 1~n 번ㅡ로 분류되는 개인정보 n개가 존재
//  약관마다 개인 정보 보관 유효기간이 정해짐.
//  모든 요일은 28일로 규정
function solution(today, terms, privacies) {
    // 1. terms 의 숫자는 28을 곱한다
    const termsObj = terms.reduce((acc,cur)=>{
        const dateSplited = cur.split(' ');
        acc[dateSplited[0]] = +dateSplited[1]*28
        return acc 
        },{});
    
    const dateCalculated = privacies.map((el)=>{
        let registerDate = el.slice(0,10).split('.').map(el=>+el)
        registerDate[2]+= +termsObj[el[11]]-1
        while(registerDate[2]>28){
            registerDate[2] -= 28;
            registerDate[1]++;
            if(registerDate[1]>12){
                registerDate[1]=1
                registerDate[0]++
            }
        }

        return registerDate
    }).map((el)=>{
        if(String(el[1]).length===1){
            el[1] = `0${el[1]}`
        }
        if(String(el[2]).length===1){
            el[2] = `0${el[2]}`
        }
        return el.join('')
    })
    
    const numberToday = +(today.split('.').join(''))
    const result = dateCalculated.map((el,idx)=>{
        
        if(+el<numberToday){
            return idx+1
        }else{
            return false
        }
    })
    return result.filter((el)=>el)
    // 2. privacies에서 현재날짜에서 곱한 28*개월 수를 카운트한다. 카운트한 숫자를 확인하면서 날짜를 올린다.
    // 3. 만약 현재 날짜보다 더 크다면 해당 인덱스를 리턴한다
    
}