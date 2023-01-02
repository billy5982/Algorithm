function solution(food) {
    // 왼쪽, 오른쪽 부터시작중앙에 물을 배치, 물을 먼저 먹는 선수가      
    // 1번 음식 3개, 2번 음식 4개, 3번음식 6개    food[0]은 제외해야함
    const foodSort = food.slice(1).map((el,idx)=>{return {[idx+1] : Math.floor(el/2)}})
    let leftFood = [];
    for(let i =0; i<foodSort.length; i++){
        let currentFood = Object.entries(foodSort[i])
        for(let j =0; j<currentFood[0][1];j++){
            leftFood.push(currentFood[0][0])
        }
    }
    leftFood.push('0')
    for(let i =foodSort.length-1; i>=0; i--){
        let currentFood = Object.entries(foodSort[i])
        for(let j =0; j<currentFood[0][1];j++){
            leftFood.push(currentFood[0][0])
        }
    }
    return leftFood.join('')
}