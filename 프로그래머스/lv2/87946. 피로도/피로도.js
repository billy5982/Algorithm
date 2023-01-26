function solution(k, dungeons) {
    let answer = -1
    function recursive(gauge,arr,cnt){  
        for(let i =0; i<arr.length; i++){
            const [limit,use] = arr[i]
            if(!limit || limit>gauge) continue;
            const copy = [...arr].map((el)=>[...el])
            copy[i] = [null,null]
            recursive(gauge-use,copy,cnt+1)
        }
        return (answer = Math.max(cnt,answer))
    }
    recursive(k,dungeons,0)
    return (answer)
}


