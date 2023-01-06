function solution(ingredient) {
    // stack 방식 이용
    const stack = [];
    let count =0;
    ingredient.forEach((el)=>{
        stack.push(el);
        if(stack.length>=4){
        let find = stack.slice(-4).join('');
            if(find==='1231'){
                for(let i=0;i<4;i++){
                stack.pop()
            }
            count++
            }
        }
    })
    return count
//     시간 초과 발생
//     let changeWord = ingredient.join('')
//     let answer = 0;
//     const hambuger = '1231'
    
//     while(changeWord.includes(hambuger)){
//         changeWord = changeWord.replace(hambuger,'')
//         answer++
//     }
//     return answer
}