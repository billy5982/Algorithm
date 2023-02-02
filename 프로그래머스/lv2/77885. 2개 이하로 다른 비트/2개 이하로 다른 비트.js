// 일단 비트단위 연산이 기본입니다.

// 저는 홀짝일때로 이 문제를 나누었는데

// 짝수일때는 간단합니다.
// 짝수를 2진수로 변홨했을때 1의 자리수가 0이기 때문에 +1 해주면 됩니다.
// ex) 2 -> 10 -> 11 -> output data : 3
// ex) 4 -> 100 -> 101 ->output data : 5
// ex) 6 -> 110 -> 111 -> output data : 7

// input data가 홀수
// input data를 2진수 변환했을때 가장 먼저 나오는 0의 자리를 1로 나머지는 0으로
// 이 숫자를 input data에 더하고 이 숫자를 /2 한 값을 빼주시면 됩니다.
// ex) 5 -> 101 -> 가장 먼저 나오는 0을 탐색(2의 1승자리) -> 101 + 10 - 1 -> 110 ->output data : 6
// ex) 3 -> 11 -> 가장 먼저 나오는 0을 탐색(2의 2승자리) -> 11 + 100 - 10 -> 101 ->output data : 5

function solution(numbers) {
  function f(x) {
    if (x % 2 === 0) return x + 1;
    let bit = "0" + x.toString(2);
    let idx = bit.lastIndexOf("0");
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  }
  const answer = [];
  for (let number of numbers) answer.push(f(number));
  return answer;
}

// function solution(numbers){
//     const getNums = numbers.map((el)=>{
        
//         //홀수
//         if(el%2){
//             let leng = el.toString(2)
//             let idx = leng.indexOf('0')
//             console.log(-idx)
//         }else if(el%2===0){
//             return (+(el.toString(2))+1)
//         }
//         return el
//     })
    
//     return getNums
// }
// function convert2 (origin, lastNum){
//         let lastNumA2 = lastNum.toString(2)
        
//         let lengCheckNumA = origin
        
//         if(lastNumA2.length>lengCheckNumA.length){
//             lengCheckNumA = lengCheckNumA.padStart(lastNumA2.length, "0")
//         }else{
//             lastNumA2 = lastNumA2.padStart(lengCheckNumA.length,'0')
//         }
    

//         const bitCompare = lengCheckNumA.split('').filter((el,idx)=>el===lastNumA2[idx])
    
//          if(lengCheckNumA.length - bitCompare.length>2){
//                 return false
//         }else{
//                 return true;
//         }
// }

// function solution(numbers){
//     const numberFilter = numbers.map((el)=>{
//         let bitEl = el.toString(2);
//         let nextNum = el+1;
//         let flag = true;
//         while(flag){
//             let checkedB = convert2(bitEl,nextNum)
            
//             if(!checkedB){
//                 nextNum +=1
//             }else{
//                 flag = false;
//             }  

//         }
//         return nextNum
//     })
//     return (numberFilter)
// }



// function solution(numbers) {
//     let [numA,numB] = numbers.map((el)=>el.toString(2))
//     let lastNumA = numbers[0]+1, lastNumB = numbers[1]+1;
//     let flagA = true, flagB = true
//     while(flagA || flagB){
//         if(flagA){
//             let checkedA = convert2(numA,lastNumA)

//             if(!checkedA){
//                 lastNumA +=1
//             }else{
//                 flagA = false;
//             }  
//         }
//         if(flagB){
//             let checkedB = convert2(numB,lastNumB)
            
//             if(!checkedB){
//                 lastNumB +=1
//             }else{
//                 flagB = false;
//             }  
//         }
//     }
//     return [lastNumA,lastNumB]
// }
