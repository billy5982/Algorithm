function solution(s) {
    let copyS = s.split('')     
    let zeroCheck = 0;
    let leng = 0
//     0을 제거하고, 해당 길이를 2진법으로 다시 변환
   while(copyS.length>1){
        copyS = copyS.filter((el)=>{
            if(+el){
                return el
            }else{
                zeroCheck +=1
            }
        }).length.toString(2).split('')
        leng+=1
   }
   return [leng,zeroCheck]
  
}