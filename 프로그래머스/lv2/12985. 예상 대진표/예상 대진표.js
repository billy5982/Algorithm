function solution(n,a,b){
    /*
        새롭게 태어나는 것들을 모아서 싸이클이 끝나면 arr에 계속 보관 
    */
    function twoNum(num1,num2){
        if(num1===a ||num1===b){
            return num1
        }else if(num2===a || num2===b){
            return num2
        }else{
            return num1
        }
    }
    
    let arr = new Array(n).fill(0).map((x,idx)=>idx+1)
    let count = 0;
    let flag = false
    while(arr.length!==0){
        let pushArr = [];
        count++;
        // 한줄씩 대진 검사. 8개의 배열을 4개로          
        for(let i=0; i<arr.length; i+=2){
            //만약 검사 단계에서 대진되었다면?
            if((arr[i]===a ||arr[i]===b)&&(arr[i+1]===a ||arr[i+1]===b)){
                console.log(arr[i],arr[i+1])
                flag = true
                break;
            }
            pushArr.push(twoNum(arr[i],arr[i+1]))
        }
       
        if(flag){
            break;
        }
        arr = pushArr
        
    }
   return count
}