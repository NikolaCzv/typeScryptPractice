function add(
    num1: number,
    num2: number,
    showResult: boolean,
    pharse: string
    ){
    const result = num1 + num2

    if(showResult){
        console.log(pharse + result)
    } else {
        return num1 + num2
    }
}

const n1 = 5;
const n2 = 6;
const showResult = true
const resultPharse = "The result is: "


add(n1, n2, showResult, resultPharse);