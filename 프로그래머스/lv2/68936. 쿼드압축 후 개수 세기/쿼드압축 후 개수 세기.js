function solution(arr){
    let answer = [0,0];
    
    function sliceArr(arr){
        // break case 1 : 모두 잘게 쪼개졌을떄
        // arr[0][0] 은 모든 수가 동일할 때 0일지, 1일지 분별해주는 수이다.
        let value = arr[0][0];
        let leng = arr.length;
        // 더이상 쪼갤수가 없을때        
        if(leng<=1){
            answer[value] += 1;
            return 
        }
        
        // break case 2 : 정사각형의 합이 모두 같을 때 -> 하나로 변환할 수 있는 정사각형을 의미
        const checkedArrSum = arr.reduce((acc,row)=>{
            // 들어온 배열의 열마다 순회하면서 숫자를 더해야한다. 사각형의 열의 요소를 전부 순회함을 의미           
            return acc+row.reduce((ac,sum)=>ac+sum)
        },0)
        
 
        // leng*leng  === checkedArrSum 정사각형이기 때문에 행과 열은 동일한 길이이다.
        // 전부 1일 경우에는 2x2사각형 기준 leng * leng === 4 여야 모두 같은수가된다.
        if(checkedArrSum === leng*leng || checkedArrSum===0){
            answer[value] +=1;
            return 
        }     
        
        // 사분면을 나눠야 한다. 열을 나눠야하며 행을 나눠야한다. ex) 4x4
        // 첫 열부터 중간열을 나눔 0~1x4
        const devide1 = arr.slice(0,leng/2)
        // 중간열 부터 마지막 열까지 나눔 2~3x4
        const devide2 = arr.slice(leng/2)
        
        // 이제 나눠진 열의 행을 절반으로 쪼개면 정사각형이 된다. 
        // x/2, y/2 계속 쪼개서 모두가 같으면 큰정사각형, 다르면 제일 작은 정사각형까지 쪼개진다.
        // 예시) 4x4 기준 배열
        // y,x = [0~1,0~1]
        sliceArr(devide1.map((el)=>el.slice(0,leng/2)))
        // y,x = [0~1,2~3]
        sliceArr(devide1.map((el)=>el.slice(leng/2)))
        sliceArr(devide2.map((el)=>el.slice(0,leng/2)))
        sliceArr(devide2.map((el)=>el.slice(leng/2)))
    }
    
    sliceArr(arr);
    
    return answer
}
// 중요한 것은 합쳐서 1인 구역이 중요한게 아님.
// 4등분(실행해야할 재귀함수의 수)을 했을 때 모두가 1,0이라면 1개로 처리하는게 중요한것.
// 마지막 1개의 도달할 경우에는 breakCase임.
// 혹은 자른 배열이 모두 같다면 해당 수를 파악해서 +1해주고 break 해주어야함.
// function solution(arr){
//         let total  = [0,0]
//         // n은 사등분하는 범위의 열 개수이다.         
//         function compress(arr,n){
//             const value = arr[0][0]
//             // 1개만 남았을 때
//             if(n<=1){
//                 total[value] +=1;
//                 return ;
//             }
            
//             const sum = arr.reduce((sum,row)=>{
//                 return sum + row.reduce((a,b)=>a+b)
//             },0);
            
//             // n은 자른 열의 갯수이다. 정사각으로 자르기 때문에 2*2 => 4 1이 4개 있는 경우이다.
//             if(sum===0 || sum ===n * n){
//                 total[value] +=1;
//                 return;
//             }
//             // 열을 반으로 나눈다.             
//             const devide1 = arr.slice(0,n/2);
//             const devide2 = arr.slice(n/2);
            
//             //위 열의 행의 중간을 자른다
//             compress(devide1.map((value)=>value.slice(0,n/2)),n/2)
//             compress(devide1.map((value)=>value.slice(n/2)),n/2)
//             // 아래 열의 행의 중간을 자른다.
//             compress(devide2.map((value)=>value.slice(0,n/2)),n/2)
//             compress(devide2.map((value)=>value.slice(n/2)),n/2)
//         }
//         compress(arr,arr.length)
//         return total
// }



// // 좌표 문제...

// function solution(arr) {
//     // y츠    
//     // 전체 arr을 넣고 돌려야 함. 이미 합쳐진 수는 따로 뭔가 기준을 정해놓아야 할듯
//     // 처음 발견을 11,111,1111 length의 따라 for문을 조정해야할듯
    
//     let loopC = 2;
//     //     
//     let axisX = [1,1,0];
//     let axisY = [0,1,1];
//     // while(true){
//     // n회차에서는 n회차의 도형을 합치기
//         let loopY = 0;
//         // y축         
//         while(loopY<arr.length){
//             // x축 i는 기준 좌표이기 때문에 현재에 위치에 따라서 비교할 위치를 잡아야함.
//             for(let i =0; i<arr[0].length; i = i + Math.pow(2,loopC)){
//                 // let
//                 let cur = [loopY,i]
//                 let answer = [cur]
//                 console.log(cur)
//                 for(let j =0; j<axisX.length; j++){
//                     console.log([loopY+Math.pow(2,loopC)*axisY[j],i+Math.pow(2,loopC)*axisX[j]])
//                 }
                
//             }
//             loopY += Math.pow(2,loopC)
//         }
//     // 바뀐 항목이 있으면 다시 검사해야함. 대신 합쳐졌기 때문에 자리수를 늘림.    
//     loopC++
//     // }
// }


