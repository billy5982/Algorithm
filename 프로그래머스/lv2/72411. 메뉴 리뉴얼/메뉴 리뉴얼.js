
// 손님마다의 course 경우의 수가 필요함 2,3,4 면 2개의 코스 3개의 코스 4개의 코스가 준비되어야함.
// course 마다 재귀함수가 시작되어야하고, 해당 경우의 수가 도달할 때 마무리를 해야함.
// orders를 도는 for, 해당 재귀함수 내에선 course에 맞춰서 돌아야함.
function solution(orders, course) {
    let menuObj = {}
    // 코스는 중복이 되면 안됨. 조합 제작 시 음식 종류에 따른 구분이 필요함.
    // 음식 종류가 필요함.
    let maxObj = course.reduce((acc,cur)=>{
        acc[cur] = {
            arr : [],
            max : -1
        }
        return acc
    },{})
    // 테스트     
    // memu는 만들어야할 메뉴들 그자체,startMenu가 조합된 음식을 의미, cnt는 몇개의 조합인지를 의미
    // 조합을 만들 수 없는 경우가 있음. length 자체가 조합보다 작을 경우엔 만들 수 없음.
    for(let food of orders){
        for(let count of course){
            let bools = new Array(food.length).fill(false);
            let obj = {}
            for(let i=0; i<food.length; i++){
                if(i>food.length-count) break;
                bools[i] = true;
                setCourse(food,food[i],count,bools,obj,i)  
            }
            // console.log(obj)
            for(let key in obj){
                if(menuObj[key]){
                    menuObj[key]+=1
                }else{
                    menuObj[key] = 1
                }
            }
        }
    }
    
    function setCourse(memu,startMenu,cnt,bool,menuObj,ord){
        // 메뉴 조합을 추가         
        if(startMenu.length === cnt){
            // console.log(startMenu)
            let getMenu = startMenu.split('').sort().join('')
            if(menuObj[getMenu]){
                menuObj[getMenu] +=1;
            }else{
                menuObj[getMenu] = 1;
            }
            return;
        }
        
        for(let i =ord+1; i<memu.length; i++){
            if(bool[i]) continue;
            bool[i] = true;
            setCourse(memu,startMenu+memu[i],cnt,bool,menuObj,i);
            bool[i] =false
        }
        
    }
    // console.log(menuObj)
    for(let key in menuObj){
        let leng = key.length
        if(menuObj[key]>=2){
            if(maxObj[leng]['max']<menuObj[key]){
                maxObj[leng]['arr'] = []
                maxObj[leng]['arr'].push(key)
                maxObj[leng]['max'] = menuObj[key]
            }else if(maxObj[key.length].max===menuObj[key]){
                maxObj[leng]['arr'].push(key)
            }
        }
    }
   
    let result = [];
    for(let key in maxObj){
        maxObj[key]['arr'].length>0?result.push(...maxObj[key]['arr']) : null
    }
    
    return result.sort()
}

// 손님마다의 course 경우의 수가 필요함 2,3,4 면 2개의 코스 3개의 코스 4개의 코스가 준비되어야함.
// course 마다 재귀함수가 시작되어야하고, 해당 경우의 수가 도달할 때 마무리를 해야함.
// orders를 도는 for, 해당 재귀함수 내에선 course에 맞춰서 돌아야함.
// function solution(orders, course) {
//     let menuObj = {}
//     // 코스는 중복이 되면 안됨. 조합 제작 시 음식 종류에 따른 구분이 필요함.
//     // 음식 종류가 필요함.
//     let maxObj = course.reduce((acc,cur)=>{
//         acc[cur] = {
//             arr : [],
//             max : -1
//         }
//         return acc
//     },{})
//     // 테스트     
//     // memu는 만들어야할 메뉴들 그자체,startMenu가 조합된 음식을 의미, cnt는 몇개의 조합인지를 의미
//     // 조합을 만들 수 없는 경우가 있음. length 자체가 조합보다 작을 경우엔 만들 수 없음.
//     for(let food of orders){
//         for(let count of course){
//             let bools = new Array(food.length).fill(false);
//             let obj = {}
//             for(let i=0; i<food.length; i++){
//                 bools[i] = true;
//                 setCourse(food,food[i],count,bools,obj)  
//                 bools[i] = false;
//             }
//             // console.log(obj)
//             for(let key in obj){
//                 if(menuObj[key]){
//                     menuObj[key]+=1
//                 }else{
//                     menuObj[key] = 1
//                 }
//             }
//         }
//     }
    
//     function setCourse(memu,startMenu,cnt,bool,menuObj){
//         // 메뉴 조합을 추가         
//         if(startMenu.length === cnt){
//             let getMenu = startMenu.split('').sort().join('')
//             if(menuObj[getMenu]){
//                 menuObj[getMenu] +=1;
//             }else{
//                 menuObj[getMenu] = 1;
//             }
//             return;
//         }
        
//         for(let i =0; i<memu.length; i++){
//             if(bool[i]) continue;
//             bool[i] = true;
//             setCourse(memu,startMenu+memu[i],cnt,[...bool],menuObj);
//             bool[i] =false
//         }
        
//     }
//     // console.log(menuObj)
//     for(let key in menuObj){
//         let leng = key.length
//         if(menuObj[key]>=2){
//             if(maxObj[leng]['max']<menuObj[key]){
//                 maxObj[leng]['arr'] = []
//                 maxObj[leng]['arr'].push(key)
//                 maxObj[leng]['max'] = menuObj[key]
//             }else if(maxObj[key.length].max===menuObj[key]){
//                 maxObj[leng]['arr'].push(key)
//             }
//         }
//     }
   
//     let result = [];
//     for(let key in maxObj){
//         maxObj[key]['arr'].length>0?result.push(...maxObj[key]['arr']) : null
//     }
    
//     return result.sort()
// }

// function solution(orders, course) {
//   let answer = [];
//   let obj = {};

//   course.map((num) => {
//     orders.forEach((menu) => {
//       combination(menu.split(""), num).map((el) => {
//         const word = el.sort().join("");
//         obj[word] ? (obj[word] += 1) : (obj[word] = 1);
//       });
//     });
//   });

//   course.map((num) => {
//     let maxNum = 0;
//     for (const key in obj) {
//       if (obj[key] === 1) continue;
//       if (key.length === num) {
//         obj[key] > maxNum ? (maxNum = obj[key]) : "";
//       }
//     }
//     let temp = Object.keys(obj).filter((key) => {
//       return obj[key] === maxNum && key.length === num;
//     });
//     temp;
//     temp.map((el) => answer.push(el));
//   });

//   return answer.sort();
// }

// function combination(arr, num) {
//   const result = [];
//   if (num === 1) return arr.map((el) => [el]);

//   arr.forEach((fix, idx, array) => {
//     const restArray = array.slice(idx + 1);
//     const combiArr = combination(restArray, num - 1);
//     const combiFix = combiArr.map((el) => [fix, ...el]);

//     result.push(...combiFix);
//   });

//   return result;
// }

