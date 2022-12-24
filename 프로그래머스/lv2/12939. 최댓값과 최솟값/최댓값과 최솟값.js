function solution(s) {
    const nums = s.split(' ').map(x=>Number(x))
    const maxNum = nums.reduce((acc,cur)=>acc<cur?cur:acc)
    const minNum = nums.reduce((acc,cur)=>acc>cur?cur:acc)
    const result = `${minNum} ${maxNum}`
    return result
}