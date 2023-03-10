function solution(k, score) {
    /*
        매일 한명의 가수가 노래를 부름. 문자 투표수로 가수에게 점수 부여, 점수 중 k번째 이내이면 명예의 전당 등재
        목표 : 매일 최하위 점수를 뽑아내야함.
        k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 높으면 k번쨰랑 교체
        k = 3
        1일차 : [10] 명예의 전당 : [10] => 최하위 점수 [10]
        2일차 : [100] 명예의 전당 :[10,100] =>10밖에 없기떄문에 3번쨰 이내로 큼 => 최하위 점수 [10]
        3일차 : [20] 명예의 전당 : [10,100,20] =>[100,20,10] => k 일까지는 명예의 전당에 모두 등재됨. => 최하위 점수 [10]
        4일차 : [150] 명예의 전당 : [150,100,20] => 10이 최하위니깐 빠짐 => 최하위 점수 [20]
        
        변수 : 명예의 전당 배열, 최하위 숫자 기록,일당 최하위 숫자 배열
        k일차 전
        1. 1일차부터 k일차까지는 명예의 전당에 Push 대신 Push되는 곳에 최하위 숫자를 계속 확인하고 push해야함.
        2. 명예의 전당의 최하를 계속 기억해놔야한다 왜? sort로 계속 할 수 없기 때문에
        3. 들어오는 숫자와 min을 비교해서 갱신한다.
        k일차 후
        3. min과 들어오는 숫자를 비교한다. 만약에 min보다 더크다면 숫자를 교체해야한다. => 교체해야할 경우 다음 제일 작은 숫자를 갱신
        4. 갱신된 제일 작은 숫자를 min으로 두고 push 한다
    */
    let winsArr = [];
    let daysMin = [];
    let min = 0;
    for(let i=0; i<score.length;i++){

        if(i<k){
            winsArr.push(score[i])
        }else{
            if(min<score[i]){
                const minidx = winsArr.findIndex((el)=>el===min)
                winsArr[minidx] = score[i]
            }
        }
        min = Math.min(...winsArr)
        daysMin.push(min)
    }
    return daysMin
}