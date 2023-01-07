function solution(id_list, report, k) {
    /* 
        각 유저는 한번에 한명의 유저 신고     
        한 유저를 여러번 신고할 수 있지만 신고 횟수는 1회로 처리
            신고 회수 제한 x
            서로 다른 유저를 계속해서 신고할 수 있음
        k번 이상 신고된 유저는 게시판 이용이 정지 해당 유저를 신고한 모든 유저에게 정지 사실 메일
        처리 결과 메일을 받은 횟수를 배열에 담아 return하도록.
        {
            muzi : {
                        user : [신고한 유저]
                        count : 0
                    },
            
        }
    */
    const reportUser = id_list.reduce((acc,cur)=>{
        acc[cur] = {
            user : [],
            count : 0
        }
        return acc
    },{})

    report.forEach((el)=>{
        const police = el.split(' ')
        
        // 유저를 신고한 사람 목록에 한번 더 신고했는 지 확인한다.        
        if(!(reportUser[police[1]].user.includes(police[0]))){
            reportUser[police[1]].user.push(police[0])
            reportUser[police[1]].count +=1;
        }
    })
    
    const reportUser2 = id_list.reduce((acc,cur)=>{
        acc[cur] = {
            count : 0
        }
        return acc
    },{})
    
    let arr = []
    
    for(let key in reportUser){
        if(reportUser[key].count>=k){
            arr.push(...reportUser[key].user)
        }    
    }
    arr.forEach((el)=>reportUser2[el].count+=1)
    let answer = []
    for(let el in reportUser2){
        answer.push(reportUser2[el].count)
    }
    return (answer)
}