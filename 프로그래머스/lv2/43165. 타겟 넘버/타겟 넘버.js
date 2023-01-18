function solution(numbers, target) {
    // 모든 숫자를 더해보거나 빼서 마지막에 도달했을 때 특정 숫자가 target에 도달한 경우를 말함
    // 단계적인 실행이 필요 재귀함수
    // 다음숫자에 갔을때 더해보거나 뺄수 있어야함. 그리고 해당 숫자는 다음 재귀로 넘김
    // 마지막으로 넘어갔을 때, 인자의 숫자를 확인해야 한다.
    let answer = 0;
    // n은 배열의 자리, 다음걸로 넘어갈때 하나씩 넘어간다. sum은 +,-했을 때의 숫자 
    function dfs(n,sum,target,arr){
        if(n===arr.length){ //break Case n이 하나씩 이동되었을 때
            if(sum===target)answer++;
            return;
        }
        dfs(n+1,sum+arr[n],target,arr)
        dfs(n+1,sum-arr[n],target,arr)
    }
    dfs(0,0,target,numbers)
    return answer
}