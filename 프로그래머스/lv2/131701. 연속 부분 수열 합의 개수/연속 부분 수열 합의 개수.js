function solution(elements) {
    let answer = [];
    
    function recursive(rotate){
        if(rotate>elements.length)return;
        
        for(let i =0; i<elements.length; i++){
            let sum = 0;
            for(let j=0; j<rotate; j++){
                if(i+j>elements.length-1){
                    let leng = i+j-elements.length
                    // if(rotate===3)console.log(leng,rotate)
                    sum+=elements[leng]
                }else{
                    sum+=elements[i+j]
                }
            }
            answer.push(sum)
        }
        recursive(rotate+1)
    }
    recursive(1);
    let an = new Set(answer)
    return an.size
}

/*
    기본적인 for문은 계속 elements를 순회한다.
    대신 i를 전달해주어 두번째 for문에서는 i만큼 순회한다.
    더해질 것은 
*/