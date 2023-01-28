function solution(n, t, m, p) {
    /* 
        튜브의 순서는 p번째,t는 튜브가 말해야하는 숫자,m은 게임 참여 인원.
        n진법으로 숫자를 바꿔야함. 
        while문은 튜브가 말하는 것을 모아 그 길이가 숫자를 넘지 않을 정도로만.     
        현재말하고 있는 차례가 누구인지 기억하는 변수도 필요할듯. for문의 길이가 길면 그때마다 카운트 해줘야하기 떄문
        그리고 현재 인원수랑 같을 경우 다음으로 넘어갔을떄 첫번쨰 자리로 다시 초기화가 필요함.
        해당 지점은 10진법을 넘어갈떄임. 10~15는 A~F로 표시할것.
    */ 
    let answer = '';
    let num = 0;
    let curM = 1;
    while(answer.length < t){
        if(curM>m) curM=1;
        let convertN = num.toString(n)
        if(convertN.length>1){ //한글자 이상이라면?
            for(let i=0; i<convertN.length; i++){
                if(curM>m) curM=1;
                if(curM===p)answer+=convertN[i]
                curM+=1
            }
            num++;
            continue;
        }
        //한자리 수라면  
        if(answer.length>t)break;
        if(curM===p)answer+=convertN
        num++;
        curM+=1
    }
    return answer.toUpperCase().slice(0,t)
}