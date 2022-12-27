function solution(priorities, location) {
    /*
        중요도가 높은 문서를 인쇄하는 프린터
        (A,B,C,D) 인쇄 대기 목록 중요도 2,1,3,2 라면 (C,D,A,B) 를 먼저 출력하기 위해 A,B를 맨 뒤로 보냄
        내가 인쇄 요청한 문서가 몇 번쨰로 인쇄되는지 알고 싶음.
        location은 내가 알고 싶은 문서의 순서를 알아야함
        위치는 인덱스, 인쇄순서는 1~9
        [1,1,9,1,1,1] ABCDEF=> [9,1,1,1,1,1] CDEFAB 5번쨰로 출력됨. 
        일단 순서의 정렬이 필요함. 제일 큰수와 인덱스 번호를 알아야함. 제일 큰수와 인덱스 번호를 찾았으면 그 앞에있는 거를 다 뒤로 보내야함
    */
 
    let obj = priorities.map((el,idx)=>{return {[idx] : el}});
    const result = [];
    // max의 인덱스를 찾아서 그 앞에있는 거는 뒤로 보내야함
    // 원본배열이 없어진다면 그걸로 종료 해야함
 
    while(obj.length>0){
        // indexof를 이용해서 맥스의 인덱스를 찾고 해당 인덱스를 새로운 배열에다가 넣어야됨.
        // 그 앞에있는 숫자들은 모두 원본배열 뒤에
        let max = obj.reduce((acc,cur)=>Object.values(acc)>=Object.values(cur)?acc:cur)
        let idx = obj.indexOf(max);
        let outNums = obj.splice(0,idx);
        obj.push(...outNums)
        result.push(obj.shift());
    }
    const idxNum = result.map((x,idx)=>+Object.keys(x)[0]===location ? true : false)
    return idxNum.indexOf(true)+1
}