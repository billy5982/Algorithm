// function solution(w){
//     if(w==='') return ''
//     let u,v
//     let cnt = 0;
    
//     const wLeng = w.length;
//     for(let i =0; i<wLeng; i++){
//         w[i] === '('? cnt++ : cnt--;
//         if(cnt ===0){
//             u = w.slice(0,i+1)
//             v = w.slice(i+1)
//             break;
//         }
//     }
    
//     const uLen = u.length;
//     for(let i =0; i<uLen; i++){
//         u[i]==='('? cnt++ : cnt--
//         if(cnt<0){
//             let str = '';
//             str += `(${solution(v)})`
//             for(let j=1; j<uLen-1; j++){
//                 u[j] === '(' ? (str+=')') : str+='('
//             }
//         return str
//         }
      
//     }
//     return u+solution(v)
// }

function checkPair(str){
    let cnt = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]==='('){
            cnt++;
        }else{
            cnt--
        }
        if(cnt<0){
            return false
            break;
        }
    }
    return true
}

function solution(p) {
    if(!p) return '';
    // w가 균형잡힌 문자열이라면 다음 과정을 통해 올바른 괄호 문자열로 바꿀수 있다.
    // 두 균형잡힌 괄호열 u,v로 분리
    // u는 균형잡힌 괄호 문자열 v = 빈문자열이 될수 있음
    function recursive(pp){
        let count = 0;
        let u = '', v = ''
        for(let i = 0 ; i<pp.length; i++){
            if(pp[i]==='('){
                count ++;
            }else{
                count --
            }
            if(count===0){
                u = pp.slice(0,i+1);
                v = pp.slice(i+1)
                break;
            }
        }
        let checkU = checkPair(u)
        if(checkU){
            return u+recursive(v)
        }else{
            let str =`(${recursive(v)})`
            for(let i = 1; i<u.length; i++){
                u[i] === "(" ? (str += ")") : (str += "(");
            }
            return str
        }
    }
    return recursive(p)
}