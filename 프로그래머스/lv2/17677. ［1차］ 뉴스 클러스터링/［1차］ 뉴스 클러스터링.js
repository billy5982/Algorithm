function makePair(str){
    const pairArr = str.toLowerCase().split('').reduce((acc,cur,idx,origin)=>{
        if(idx===origin.length-1){
            return acc
        }
        acc.push(cur+origin[idx+1])
    return acc
    },[])
    let reg = /^[a-zA-Z]*$/;
    return pairArr.filter((el)=>reg.test(el))
}

function makeUnion(obj1,obj2){
    let union = {...obj1}
    // console.log('union',union)
//     만약에 교집합 이라면? 그만큼 뺴야함. 뻇는데 같다면 교집합이고 같지 않다면 합집합으로 남기 떄문에 Math.abs 이용
    for(let key in obj2){
         // obj2에만 있고 obj1엔 없는경우엔 -를 해주면 안됨.
        if(union[key]){
            union[key]=Math.abs(union[key]-obj2[key])
        }else{
            union[key]=obj2[key]
        }
    }
    return union
}

function makeObj(acc,cur){
        if(acc[cur]){
            acc[cur]+=1
        }else{
            acc[cur]=1
        }
        return acc
    }

function makeIntersection(obj1,obj2){
    let count = 0;
    for(let key in obj1){
        if(obj2[key]){
        //만약 갯수가 같다면 갯수 만큼 더한다.
            if(obj2[key]===obj1[key]){
                count+=obj2[key]
            }else{
                let min = Math.min(obj2[key],obj1[key])
                count+= min
            }
        }
    }

    return count 
}

function solution(str1, str2) {
    //  교집합 / 합집합 => 갯수가 같을 때는 1로 규정
    // 1. str1의 페어, str2의 페어를 만든다. (모두 소문자로 통일)
    // 2. 필터와 정규식 검사를 통해 a-z만 있는 지 확인
    // 3. 필터된 배열 두개를 하나의 객체로 만든다. key의 갯수는 합집합
    // 4. 교집합은 객체 두개를 만들고 서로 갯수가 같으면 으로 한다.
    // 5. 교집합 / 합집합 *65536을 한다.
    const str1Obj = makePair(str1).reduce(makeObj,{})
    const str2Obj = makePair(str2).reduce(makeObj,{})

    const union = makeUnion(str1Obj,str2Obj)
    const interSectionLeng = makeIntersection(str1Obj,str2Obj)
    let unionLeng = interSectionLeng;
    for(let key in union){
        unionLeng+= union[key]
    }
    if(unionLeng<=interSectionLeng){
        return 65536
    }else{
        return (Math.floor(interSectionLeng/unionLeng*65536))
    }
}

//aa,a1,1+,+a,aa,a2
//aa,aa,aa,a1,12
