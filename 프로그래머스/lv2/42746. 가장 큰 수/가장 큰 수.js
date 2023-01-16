function solution(numbers) {
    let arr = numbers.map(String)
    arr = arr.sort((a,b)=>{
        if(a+b>b+a){
            return -1
        }else if(a+b<b+a){
            return 1
        }else{
            return 0
        }
    })
    let check0 = arr.reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur]+=1;
        }else{
            acc[cur] =1
        }
        return acc
    },{})
    if(check0[0]){
        if(check0[0]===numbers.length){
            return '0'
        }
    }
    return arr.join('')
    // 3자리 이후 대응 불가
    /*
        sort 시 0번째를 비교 만약 0번째가 같거나 비슷할 경우 문자열 길이를 비교
        문자열이 둘다 2개일 경우 => 뒤에꺼를 비교
        문자열이 하나만 2개일 경우 => 앞에꺼와 2개의 뒤에껄 비교
    */
    // let arr = numbers.map(String).sort((a,b)=>{
    //     if(a.length===2 && b.length===2){
    //         if(+a[0]===+b[0]){
    //             return +a[1]>+b[1]?-1:1
    //         }else{
    //             return +a[0]>+b[0]?-1:1
    //         }
    //     }else if(a.length===1 && b.length===1 ){
    //             return +a[0]>+b[0]?-1:1
    //     }else{
    //         if(a.length>b.length){
    //             return +a[1]>+b[0]? -1:1
    //         }else{
    //             return +a[0]>+b[1]? -1:1
    //         }
    //     }
    // })
    // return (arr.join(''))
    // 틀린 풀이
    //1. while문을 순회하며 숫자 이어 붙이기
    //2. 이어 붙이기가 끝났으면, 첫번째 수를 뺴서 뒤로 붙이기
    // let origin = [...numbers]
    // let arr = []
    // for(let i =0; i<numbers.length; i++){
    //     let count = '' 
    //     let idx = 0
    //     while(idx<numbers.length){
    //         count+= `${origin[idx]}`
    //         idx++
    //     }
    //     arr.push(count)
    //     origin.push(origin.shift())
    // }
    // return `${Math.max(...arr.map(Number))}`
}