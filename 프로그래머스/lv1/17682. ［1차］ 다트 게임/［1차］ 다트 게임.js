function solution(dartResult) {
    /*
        S : 점수 1제곱, D : 점수 2제곱, T : 점수 3제곱 
        *(스타상) 은 그전까지 숫자의 곱 2 ,  #은 *-1
        *# = *-2
        순회하면서 S,D,T를 찾아낸다. 
        *#은 연속적으로 나오지 않음
    */
    let numbers = [];
    let seperate = dartResult.split('')
    let count = 0;
    // console.log(seperate)
    // 제곱의 기준점을 만들어줘야함(문자열이 오면 앞의 문자열을 자른다!)
    while(seperate.length>0){
        // 현재 순회하는 게 S,T,D를 포함하고 있으면         
        if(['S','T','D'].includes(seperate[count])){
            let points = seperate.splice(0,count+1).join('');
            numbers.push(points)
            count = 0;
        }else if(['*','#'].includes(seperate[count])){
            let shapStar = seperate.splice(0,1).join('');
            numbers.push(shapStar);
            count = 0;
        }else{
            count++
        }
    }
    let sum = 0;
    let standard = 1;
    let result = []
    numbers.forEach((el,idx)=>{
        if(numbers[idx+1]==='#'){
            result.push(checkAlphabet(el) *-1)
        }else if(numbers[idx+1]==='*'){
        // *일 경우에 그 전 숫자와 현재 숫자가 *2
            result[result.length-1] = result[result.length-1]*2
            result.push(checkAlphabet(el)*2) 
        }else if(!isNaN(+el[0])){
            result.push(checkAlphabet(el))
        }

    })
    
    return result.reduce((acc,cur)=>acc+cur)
}

function checkAlphabet(word){
    const nums = word.slice(0,word.length-1)
    console.log(nums)
    if(word[word.length-1]==='D'){
        return Math.pow(+nums,2)
    }else if(word[word.length-1]==='S'){
        return Math.pow(+nums,1)
    }else{
        return Math.pow(+nums,3)
    }
}