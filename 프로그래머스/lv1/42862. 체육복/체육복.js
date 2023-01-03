function solution(n, lost, reserve) {
    /*
        학생들의 번호는 체격순, 바로 뒷번호와 앞번호에게만 체육복을 빌려줄 수 있음.
        전체 학생 수 n, 도난 학생 lost, 여벌 reserve
        return 최대 체육 수업을 들을 수 있는 수 => n+빌려줄 수 있는 사람
        첫번쨰 체육 수업을 들을 수 있는 사람 => n - lost.length
        일단 인덱스를 합쳐서 lost이면 앞에꺼 뒤에껄 확인. 
        여벌 체육복을 가져온 학생이 도난 당했을 수도 있음.
    */
    let lostObj = lost.reduce((acc,cur)=>{
        if(!reserve.includes(cur)){
            acc[cur] = cur
        }
         return acc
    },{})
    
    let reserveObj = reserve.reduce((acc,cur)=>{
        // 여벌 체육복을 가져온 학생이 도난 당했을 수도 있음.
        if(!lost.includes(cur)){
                acc[cur] = cur
        }
         return acc
    },{})
    
    Object.values(lostObj).forEach((el)=>{
        if(reserveObj[el-1]){
            delete lostObj[el]
            delete reserveObj[el-1]
        }else if(reserveObj[el+1]){
            delete lostObj[el]
             delete reserveObj[el+1]
        }
    })
    let classStd = n-Object.values(lostObj).length
    return classStd
}