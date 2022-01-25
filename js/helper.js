const randomNumber = n => {
    return Math.floor( Math.random() * n)
}

const shuffleArr = arrArg => {
    let res = []
    let arr = [...arrArg]
    let iterations = arr.length
    for(let i = 0; i < iterations ; i++){
        let picked = randomNumber(arr.length);
        res.push(arr[picked])
        arr.splice( picked, 1 )
    }
    return res

}

let arr = [1,2,3,4]
console.log( shuffleArr(cards) );
console.log( cards );