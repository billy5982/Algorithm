function solution(skill, skill_trees) {
    let result = 0;

    //skill의 요소들이 있는지 확인
    let filteredTrees = skill_trees.map(tree => {
        return tree.split("").filter(ele => skill.includes(ele))
    });
    
    //가능한 스킬트리인지 확인
    for(let i = 0; i < filteredTrees.length; i++) {
        let isValid = true;
        for(let j = 0; j < filteredTrees[i].length; j++) {
          if(skill[j] !== filteredTrees[i][j]) {
            isValid = false;
            break;
          }
        }
        if(isValid) result++;
    }
    
    return result;
}

// // 모든 skill을 순회하면서 스킬을 탐색한다.
// // el.split을 하고 reduce를 통해 t
// // skillTrees.map((el)=>{

// // })

// function solution(skill, skill_trees) {
//     let answer = skill_trees.map((el)=>{
//         let skillT = el.split('')
//         let obj = {}
//         // console.log(el)
//         for(let el2 of skill){
//             let skillIdx = skillT.indexOf(el2)
//             obj[el2] = skillIdx
//         }
    
//         let skillEntries = Object.entries(obj).sort((a,b)=>a[1]>b[1]?1:-1).map((el)=>el[1]===-1?'':el[0]).join('')
      
//         if(!el.includes(skill[0])){
//             return false
//         }else if(el.includes(skillEntries)){
//             return true
//         }
//     })
//     return answer.filter((el)=>el).length
// }