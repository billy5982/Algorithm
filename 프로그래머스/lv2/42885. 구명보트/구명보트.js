function solution(people, limit) {
    let sortPeople = people.sort((a,b)=>a-b)
    // 배에 태우고 보내버려야함. 
    // 1. 배에 아무도 없다면 해당 사람을 추가
    // 1-2 배에 사람이 있다면 가장 큰거에서 하나씩 내려오기. 만약에 넣었다면 for문 패쓰
    let count = 0;
    let Lidx = 0;
    let Ridx = sortPeople.length-1
    while(Lidx<=Ridx){
        // 만약 제일 작은 수와 큰수를 더했을 떄 수용 무게라면 다음 작은수로 이동한다.        
        if(sortPeople[Lidx]+sortPeople[Ridx]<=limit){
            Lidx++;
        }
        // 위 케이스가 통과했으면 가장 무거운사람을 보내야하고, 통과를 안했어도 제일 큰수보다 작은수를 검사해야하기 때문에 당겨야한다.
        // 왜냐 더이상 낄때가 없기 때문에 큰수는 혼자 태워보내야함
        Ridx--;
        count+=1
    }
    return count
}