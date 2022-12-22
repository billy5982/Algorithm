const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split('\n')


function cart(arr,price,buyItem){
    if(buyItem<=0)return price===0? 'Yes' : "No"
    let data = `${arr[0]}`.split(' ').map(Number)
    return cart(arr.slice(1),price-(data[0]*data[1]),buyItem-1)
}   
console.log(cart(input.slice(2),input[0],Number(input[1])))