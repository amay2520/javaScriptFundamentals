const arr = [1,2,3,4] 
const total = arr.reduce(function(acc,curval){
    console.log(`acc: ${acc}, crr: ${curval}`)
    return acc + curval
})

console.log(total)