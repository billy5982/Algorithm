function solution(t, p) {
    // 사실상 연속으로 하면됨. p.length만큼 잘라서 대신 for을 순회할때 이전 숫자 전까지만
    // slice의 뒷 인덱스는 포함하지 않음    
    let count = 0;
    for(let i=0; i<t.length-p.length+1;i++){
        let tWord = t.slice(i,i+p.length)
        Number(tWord)<=Number(p)&&count++
    }
    return count
}