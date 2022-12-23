function solution(clothes) {
   /*
   풀이 해석
   1종류 옷이 있다 가정 -> 개수는 a개 -> 나올 수 있는 경우의 수 a가지
   2종류 옷이 있다 가정 -> 개수는 a,b개 -> 나올 수 있는 경우의 수 (a+b)+(ab)
   3종류 옷이 있다 가정 -> 개수는 a,b,c개 -> 나올 수 있는 경우의 수 (a+b+c) + (ab+ac+bc) + (abc)
   (a+b+c) + (ab+ac+bc) + (abc) => x^3 + (a+b+c)^2 + (ab+bc+ac)x + (abc) x를 이용해서 치환가능
   (x는 증명을 위한 수(곱을 위한 수))
   (x+a)(x+b)(x+c) = x^3 + (a+b+c)x^2 + (ab+bc+ac)x + (abc) -> x=1 계산 후 x^3는 사용하지 않는 수니까 제거 
   */
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