function solution(clothes) {
    // 매일 다른 옷을 조합하여 자신을 위장
    // 오늘 동그란 안경, 긴 코트, 파란색 티셔츠
    // 다음날 (동그란 안경, 긴 코트, 파란색 티셔츠,청바지) || 선글라스 안경, 긴 코트, 파란색 티셔츠
    // 스파이는 무조건 한개 이상의 의상을 입음
    // [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
    const cloth = clothes.reduce((acc,cur)=>{
        if(acc[cur[1]]){
            acc[cur[1]]+=1
            return acc
    }else{
        acc[cur[1]]=1;
        return acc
    }
    },{})
    
    const values = Object.values(cloth)
    const answer = values.reduce((acc,cur)=>acc*(cur+1),1)-1
    
    return answer;
}