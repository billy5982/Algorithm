function solution(survey, choices) {
    const obj = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0,
    }

    for(let i = 0; i < choices.length; i++){
        if('AN'===survey[i]){
            obj['N'] += choices[i] -4
        }else if('NA'===survey[i]){
            obj['A'] += choices[i]-4
        }else if('TR'===survey[i]){
            obj['R'] += choices[i]-4
        }else if('RT'===survey[i]){
            obj['T'] += choices[i]-4
        }else if('FC'===survey[i]){
            obj['C'] += choices[i]-4
        }else if('CF'===survey[i]){
            obj['F'] += choices[i]-4
        }else if('MJ'===survey[i]){
            obj['J'] += choices[i]-4
        }else if('JM'===survey[i]){
            obj['M'] += choices[i]-4
        }
    }
    let str = ''
    if(obj['R']>=obj['T']){
        str += 'R'
    }else{
        str += 'T'
    }
    
    if(obj['C']>=obj['F']){
           str += 'C'
    }else{
           str += 'F'
    }
    
    if(obj['J']>=obj['M']){
        str += 'J'
    }else{
        str += 'M'
    }
    
    if(obj['A']>=obj['N']){
         str += 'A'
    }else{
         str += 'N'
    }

    return str
}