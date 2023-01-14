function solution(arr1, arr2) {

    const answer = arr1.map((el,idx)=>{
        let arr = [];
        /*
            el[0] * arr2[0][0] + el[1]*arr2[1][0]
            el[0] * arr2[0][1] + el[1]*arr2[1][1]
        */
        for(let i=0; i<arr2[0].length; i++){
            let sum = 0
            for(let j=0; j<arr2.length; j++){
                sum+=el[j]*arr2[j][i]
            }
            arr.push(sum)
        }
        return arr
    })
    return answer
}