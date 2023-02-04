/*
    나머지가 3일 땐 1, 나머지 6일땐 2, 나머지 0일 땐 4의 패턴을 가짐
    [4,1,2] math.floor(n%3) 
    1/3 => 0.3 -> 1
    2/3 -> 0.6 -> 2
    3/3 -> 1.0 -> 4
    4/3 -> 1.3 -> 11 1%3 = 1
    5/3 -> 1.6 -> 12 1%3 = 1
    6/3 -> 2.0 -> 14 2-1% 3 =1
    만약 몫이 존재한다면. 다음숫자를 쌓아야 함.
    7/3 -> 2.3 -> 21 2 % 3 -> 2
    8/3 -> 2.6 -> 22 2 % 3 -> 2
    9/3 -> 3.0 -> 24 3-1 % 3 -> 2
    10/3 -> 3.3 -> 41 . 몫 3 % 3 0 4
    11/3 -> 3.6 -> 42 . 몫 3 % 3 0 4
    12/4 -> 4.0 ->  4
    몫을 다음 숫자로 넘겨야함
*/

function solution(n) {     
    let num124 = [4,1,2];
    let ans = ''
    
    while(n){
        ans = num124[n%3] + ans
        n = n%3 === 0 ? n/3-1 : Math.floor(n/3)
    }

    return ans
}