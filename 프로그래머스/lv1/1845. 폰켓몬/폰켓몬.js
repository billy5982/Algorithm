function solution(nums) {
    // N마리 폰켓몬 중 가져갈 수 있는 폰켓몬 = 전체N/2
    // 다양한 종류의 폰켓몬을 가져가야함 -> 중복을 제거
    // 중복되는 포켓몬은 하나로 1=>2마리,2,3 4중에 가장 많은 종류는 2마리를 가져올 수 있음
    // 6마리 중에 3마리를 가져오는 것 -> 3,3,3,2,2,4 -> 3,2,4
    // 3,3,3,2,2,2 -> 3,2 중복 제외 -> 2개임, 전체/2 => 3 
    // 중복 제외 < 전체/2 => 중복 제외
    // 중복 제외 > 전체/2 => 전체/2
    
    // 중복되는 몬스터 제외한 객체
    const kindsOfMon = nums.reduce((acc,cur)=>{
        acc[cur] ? acc[cur]+=1 : acc[cur]=1
        return acc
    },{})
   const monsterKinds = Object.keys(kindsOfMon).length;
   if(monsterKinds<=nums.length/2){
       return monsterKinds
   }else{
       return nums.length/2
   }
    
}