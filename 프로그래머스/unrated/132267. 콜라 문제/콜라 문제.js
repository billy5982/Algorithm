function solution(a, b, n) {    
    // 받은 콜라 개수
    let getCola = 0;
    
    // 받았을 떄 나머지 + 다시 받는 콜라 개수
    let origin = n;
    
    while(origin>=a){
        let changeCola = Math.floor(origin/a)
        getCola = getCola + (changeCola*b)
        origin = (changeCola*b)+(origin%a)
    }
    return getCola;
}
 /*
    간단한 수학문제입니다.
    나오는 공식 그대로 적용하면 막히는거 없이 풀려요.

    주의할점은

    남은 병의 개수가 2개 미만이면 교환이 불가능합니다.
    a개당 교환해주는 b의 개수를 체크하셔야 합니다.
    테케 : [3, 2, 20], 36
    a: 빈병 갯수 => 마트에서 한병으로 줌, b : a개를 가져다 줄때 주는 새콜라, n : 총 빈병 개수
    빈병 20병 가져가면 2병당 1개의 콜라를 줌. 
    20->10                      20->6 // 나머지 1
    10->5                       6->2 
    5->2 //나머지 발생             2+1-> 1 나머지가 됨 총 9병의 콜라를 이득봄
    2->1 
    1+나머지 발생 
    */
    // 나누기 개수를 저장해서 다음거에 반영
    // 나머지가 발생한다면 해당 나머지를 저장
    // 마지막으로는 해당 나머지를 모두 