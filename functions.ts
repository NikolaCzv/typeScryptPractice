function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num: number){
    console.log('Result: ' + num)
//retrun void means does not return anything
}

let combineValues: (a: number, b:number) => number;
combineValues = add

console.log(combineValues(1,7))


printResult(add(5, 12))