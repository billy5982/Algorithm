function solution(files) {
    // HEAD는 문자로 이루어짐 한글자 이상.
    // NUMBER => 연속된 숫자.
    // TAIL은 나머지 여기에는 숫자가 다시 나타날 수도 있으며 아무 글자도 없을수 있음.
    // 1. HEAD 사전순으로 정렬
    // 2. HEAD 부분이 같을 경우에는 Number 비교, NUMBER,HEAD가 같을 경우에는 변동 x
    
    let engsort = files.sort((a,b)=>{
        let convertA = a;
        let convertB = b;

        let [headA,numberA] = checkHeadNum(convertA)
        let [headB,numberB] = checkHeadNum(convertB);
        
        if(headA.toUpperCase()>headB.toUpperCase()){
                return 1;
        }else if(headA.toUpperCase()<headB.toUpperCase()){
            return -1;
        }else{
            return +numberA - +numberB 
        }
        })
   
    return engsort
}

function checkHeadNum(str){
        let HeadA = '';
        let numberA = ''
    for(let i = 0; i<str.length; i++){
            if(numberA.length===0&&(isNaN(+str[i]) ||str[i]===' ')){
                // 형 변환이 불가해야함. NAN이여야함. 그리고 numberA가 없어야함.
                HeadA+= str[i]
            }else if(!isNaN(+str[i])){ 
                // 형 변환 가능해야함. HEAD에 숫자가 있어야함. 숫자가 시작된 지점부터 for문을 돌려서 숫자만 추출 후 끝내야함.
                numberA+=str[i]
            }else if(isNaN(+str[i])&&i>0){
                break;                 
            }
        }
    return [HeadA,numberA]
}