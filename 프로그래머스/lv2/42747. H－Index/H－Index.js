function solution(citations) {
    // 순번과 현재 수를 비교했을 때 같아지는 수 또는 끝까지 도달했을 때
    const sortCitations = citations.sort((a,b)=>b-a)
    const filterBig = sortCitations.filter((el,idx)=>el>=idx+1)
    return filterBig.length
    // let Hindex = 0;
    // for(let i =0; i<sortCitations.length; i++){
    //     if(sortCitations[i]>=i+1&&i<=sortCitations.length-1){
    //         Hindex++;
    //         continue
    //     }
    //     break
    // }
    // return Hindex
}