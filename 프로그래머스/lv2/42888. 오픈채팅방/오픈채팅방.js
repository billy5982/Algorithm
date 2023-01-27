function solution(record) {
    const inUser = record.reduce((acc,cur)=>{
        if(cur.includes('Enter')||cur.includes('Change')){
            const splitCur = cur.split(' ');
            const [none,uid,nickname] = splitCur
            acc[uid] = nickname
        }
        return acc
    },{})
    
    const consoleArr = record.map((el)=>{
        const [keyword,id] = el.split(' ')
        if(el.includes('Enter')){
            return `${inUser[id]}님이 들어왔습니다.`
        }else if(el.includes('Leave')){
            return `${inUser[id]}님이 나갔습니다.`
        }
        return false
    })
    return (consoleArr.filter(el=>el))
    // return answer;
}