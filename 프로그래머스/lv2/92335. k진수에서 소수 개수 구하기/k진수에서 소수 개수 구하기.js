function checkDecimal(num){
    let lastNum = 2;
    
    for(let i=2; i*i<=num; i++){
        if(num%i===0)return false
    }
    return true 
}

function solution(n, k) {
    /* 
        1. P0일때 시작점을 의미함.
        2. 0P일떄 끝점을 의미함.
        3. 0P0일 떄 중간을 의미함.
        모든 P는 0을 가지고 있으면 안됨.
        일단 0일 때는 pass해야함. 숫자가 발견됐을 때는
        뒤의 숫자가 0인지 확인 0이 아니라면 일단 문자열에 더함. 그이후 0이 나왔다면 문자열을 초기화
    */
    let nums = []; // 모든 단어를 보관할 장소.
    let convertK = n.toString(k).split('').map(Number)
    let str = ''
    for(let i =0; i<convertK.length; i++){
        // P0일 때     
        if(i===0 && convertK[i]){
            str+=convertK[i]
            continue;
        }
        // 0p0가 관측 됐을 때
        if(convertK[i]===0){
            if(str.length!==0){
                nums.push(str);
                str = '';    
            }
            continue;
        }
        if(i === convertK.length-1){
            if(convertK[i]!==0){
                str+=convertK[i]
            }
            nums.push(str);
            str = ''
        }
        // if(c)
        // 위 케이스에 걸리지 않았다면?
        str+=convertK[i]
    }
    console.log(nums)
    const numsFilter = nums.map(Number).filter((el)=>{
        if(el!==1){
            return checkDecimal(el)
        }
        return false
    })
    return (numsFilter.length)
}