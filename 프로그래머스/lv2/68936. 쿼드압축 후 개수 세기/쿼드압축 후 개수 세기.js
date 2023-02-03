// 좌표 문제...

function solution(arr) {
    // y츠    
    // 전체 arr을 넣고 돌려야 함. 이미 합쳐진 수는 따로 뭔가 기준을 정해놓아야 할듯
    // 처음 발견을 11,111,1111 length의 따라 for문을 조정해야할듯
    
    let loopC = 2;
    //     
    let axisX = [1,1,0];
    let axisY = [0,1,1];
    // while(true){
    // n회차에서는 n회차의 도형을 합치기
        let loopY = 0;
        // y축         
        while(loopY<arr.length){
            // x축
            for(let i =0; i<arr[0].length; i = i + Math.pow(2,loopC)){
                // let 
            }
            loopY += Math.pow(2,loopC)
        }
    // }
}


